(function () {
    const fileInput = document.querySelector('input[type="file"]');
    const container = document.querySelector('.meta');
    console.dir(fileInput);

    fileInput.addEventListener('change', () => {
      const innerHTML = Array.from(fileInput.files)
        .map(printFileMeta)
        .join('');
      container.innerHTML = innerHTML;
    });

    const printFileMeta = ({name, lastModified, size, type}) => `<div>
    <div>${name}</div>
    <div>${size}</div>
    <div>${lastModified}</div>
    <div>${type}</div>
</div>`;

}());
