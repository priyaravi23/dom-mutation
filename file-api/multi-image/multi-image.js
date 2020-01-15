var preview = document.getElementById("preview");
var fileInput = document.querySelector("input[type=file]");

function showFile() {
    for (var i = 0; i < fileInput.files.length; i++) {
        var reader = new FileReader();

        reader.onload = function(readerEvent) {
            var listItem = document.createElement("li");

            listItem.innerHTML = "<img src='" + readerEvent.target.result + "' />";
            preview.append(listItem);
        };

        reader.readAsDataURL(fileInput.files[i]);
    }
}

fileInput.addEventListener('change', () => {
    showFile();
});