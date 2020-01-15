(function () {
    attachHandlerForImage();
    attachHandlerForText();
    window.files = [];
    attachUploadHandler();
}());

function attachHandlerForImage() {
    const fileInput = document.querySelector('input[accept="image/*"]');
    const container = document.querySelector('.images');

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        console.log(file);
        const img = new Image();
        // Read the image from the file as a data uri
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            console.log(reader.result);
            img.src = reader.result;
        });

        reader.readAsDataURL(file);

        container.appendChild(img);

        // Required for the upload
        window.files.push(file);
    });
}

function attachHandlerForText() {
    const fileInput = document.querySelector('input[accept="text/plain"]');
    const container = document.querySelector('pre');

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        console.log(file);
        // Read the image from the file as a data uri
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            console.log(reader.result);
            container.innerHTML = reader.result;
        });

        reader.readAsText(file);

        // Required for the upload
        window.files.push(file);
    });
}

function attachUploadHandler() {
    document.querySelector('.upload-button').addEventListener('click', () => {
        const formData = new FormData();
        console.log(window.files);
        window.files.forEach((file, index) => formData.append(file.name, file));
        console.log(formData);

        // use this formData with axios or fetch
        // Axios - https://stackoverflow.com/questions/47630163/axios-post-request-to-send-form-data
        // Fetch - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Uploading_a_file
    });
}