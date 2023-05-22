const fs = require("fs");
const path = require("path");
const sass = require("node-sass");

function compile(filepath, filename) {
    const result = sass.renderSync({
        file: path.resolve(filepath),
        outputStyle: "expanded",
        includePaths: [path.resolve("src")],
    });

    fs.writeFileSync(path.resolve("lib", filename), result.css.toString());
}

function getComponents() {
    let components = [];
    let types = ["atoms", "molecules", "organisms"];

    types.forEach((type) => {
        const files = fs.readdirSync(path.resolve("src", type)).map((file) => ({
            input: path.resolve("src", type, file),
            output: path.basename(file, ".scss") + ".css",
        }));

        components = components.concat(files);
    });

    return components;
}

const components = getComponents();
// console.table(components);

components.forEach((component) => {
    compile(component.input, component.output);
});

compile("src/global.scss", "global.css");