document.getElementById('bold-icon-style').addEventListener('click', function () {
    const textEditorBox = document.getElementById('text-eidtor-box');
    textEditorBox.style.fontWeight = 'bold';
});

document.getElementById('italic-icon').addEventListener('click', function () {
    const textEditorBox = document.getElementById('text-eidtor-box');
    textEditorBox.style.fontStyle = 'italic';
});

document.querySelector('.underline-icon').addEventListener('click', function () {
    const textEditorBox = document.getElementById('text-eidtor-box');
    textEditorBox.style.textDecoration = 'underline';
});

document.querySelector('.left-align-icon').addEventListener('click', function () {
    const textEditorBox = document.getElementById('text-eidtor-box');
    textEditorBox.style.textAlign = 'left';
});

document.getElementById('midle-align-icon').addEventListener('click', function () {
    const textEditorBox = document.getElementById('text-eidtor-box');
    textEditorBox.style.textAlign = 'center';
});

document.getElementById('right-align-icon').addEventListener('click', function () {
    const textEditorBox = document.getElementById('text-eidtor-box');
    textEditorBox.style.textAlign = 'right';
});

document.querySelector('.number-type input').addEventListener('input', function () {
    const fontSizeInput = document.querySelector('.number-type input');
    const textEditorBox = document.getElementById('text-eidtor-box');
    const fontSizeValue = fontSizeInput.value;
    textEditorBox.style.fontSize = fontSizeValue + 'px';
});

document.getElementById('color-picker-box').addEventListener('input', function () {
    const selectedColor = document.getElementById('color-picker-box').value;
    const textEditorBox = document.getElementById('text-eidtor-box');
    textEditorBox.style.color = selectedColor;
});


document.getElementById('UperCaseTextEditor').addEventListener('click', function () {
    const textEditorBox = document.getElementById('text-editor-box');
    textEditorBox.style.textTransform = "uppercase";
});
document.getElementById('LowerCaseTextEditor').addEventListener('click', function () {
    const textEditorBox = document.getElementById('text-editor-box');
    textEditorBox.style.textTransform = 'uppercase';

});
