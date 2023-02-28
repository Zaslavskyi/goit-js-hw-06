const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', (event) => {
    let size = event.target.value;
    text.style.fontSize = `${size}px`;
});