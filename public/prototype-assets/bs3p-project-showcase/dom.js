export function requiredElement(root, selector) {
    const element = root.querySelector(selector);
    if (!element)
        throw new Error(`ProjectShowcase: missing ${selector}`);
    return element;
}
