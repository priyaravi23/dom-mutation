function showFile() {
    var preview = document.getElementById('show-text');
    var fileInput = document.querySelector('input[type=file]').files[0];

    var reader = new FileReader();
    var textFile = /text.*/;

    if (fileInput.type.match(textFile)) {
        reader.onload = function (event) {
            preview.innerHTML = event.target.result;
        }
    } else {
        preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
    }
    reader.readAsText(fileInput);
}