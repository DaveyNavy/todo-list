export function clear() {
    const container = document.querySelector(".content");

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}