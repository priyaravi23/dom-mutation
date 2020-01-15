(function () {
    const fileInput = document.querySelector('input[type="file"]');
    const container = document.querySelector('.meta');
    console.dir(fileInput);

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        console.log(file);
        const img = new Image();
        img.src = 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7';
        container.innerHTML = '';
        container.appendChild(img);
    });

    const printFileMeta = ({name, lastModified, size, type}) => `<div>
    <div>${name}</div>
    <div>${size}</div>
    <div>${lastModified}</div>
    <div>${type}</div>
</div>`;

}());
