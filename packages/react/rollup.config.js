import typescript from "rollup-plugin-typescript2";

export default {
    input: {
        "": "src/index.ts",
        "atoms/color": "src/atoms/color.tsx",
        "atoms/margin": "src/atoms/margin.tsx",
        "atoms/text": "src/atoms/text.tsx",
        "molecules/select": "src/molecules/select.tsx",
    },
    output: {
        dir: "lib",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
    },
    plugins: [typescript()],
    external: ["react", "@ds.e/foundation"],
};
