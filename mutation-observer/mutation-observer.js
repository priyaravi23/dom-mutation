var target = document.querySelector('#some-id');

// create an observer instance
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        console.log('Mutation Type: ', mutation.type);
    });
});

// configuration of the observer:
var config = {
    attributes: true,
    childList: true,
    characterData: true
};

// pass in the target node, as well as the observer options
observer.observe(target, config);


function duplicate() {
    target.appendChild(document.createElement("DIV"));
}