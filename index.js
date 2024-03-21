// 1. Cache at least one element using selectElementById.
const firstName = document.getElementById('firstName');
console.log('firstName');

// firstName.setAttribute('placeholder', 'Enter your first name');

// 2. Cache at least one element using querySelector or querySelectorAll.
const registerButton = document.querySelector('.btn');
console.log('registerButton');

//3. Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
const registrarButton = document.querySelector('.container').lastElementChild;
console.log('last item', registrarButton);

//*4. Iterate over a collection of elements to accomplish some task.
const formInputs = document.querySelectorAll('.container input');
formInputs.forEach(input => {
    console.log(input.value)
})

//5. Create at least one element using createElement.


