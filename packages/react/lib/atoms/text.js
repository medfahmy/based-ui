import React from 'react';

function Text({ size, children }) {
    const className = `dse-text dse-font-size-${size}`;
    return React.createElement("p", { className: className }, children);
}

export { Text };
//# sourceMappingURL=text.js.map
