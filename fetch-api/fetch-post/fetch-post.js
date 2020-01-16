function createGist(opts) {
    fetch('https://api.github.com/gists', {
        method: 'post',
        body: JSON.stringify(opts)
    }).then(response => {
        return response.json();
    }).then(data => {
       return `Created Gist:', ${data}`;
    });
}

function submitGist() {
    var content = document.querySelector('textarea').value;

    if (content) {
        createGist({
            description: 'Fetch API Post example',
            public: true,
            files: {
                'test.js': {
                    content: content
                }
            }
        });
    } else {
        return `Please enter in content to POST to a new Gist`;
    }
}