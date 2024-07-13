function getWindowWidthAndHeight() {

    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    document.querySelector('p').textContent = `Width: ${width} Height: ${height}`;
}