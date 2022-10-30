const numberOfItemsRef = document.querySelectorAll(".item");
console.log("Number of categories :", numberOfItemsRef.length);
function getCategoryAndElements() {
    numberOfItemsRef.forEach(element => {
        console.log('Category :', element.firstElementChild.textContent);
        console.log('Elements:', element.lastElementChild.querySelectorAll('li').length);

    })
}
getCategoryAndElements();