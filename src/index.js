let textarea1 = document.getElementById("paste");
let textarea2 = document.getElementById("copy");
let copybutton = document.getElementById("copybutton");

textarea1.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    paste = paste.replace(/(\[.*?\])/g, '');
    textarea2.value = paste;
});

copybutton.addEventListener('click', copy);

function copy() {
  textarea2.select();
  document.execCommand("copy");
}
