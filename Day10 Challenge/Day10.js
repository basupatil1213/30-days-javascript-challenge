// Day 10: Event Handling

// Tasks/Activities:

// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

function handleChangeText() {
    let p_ele = document.getElementById("change-text");
    let new_text = generateRandomText(50);
    p_ele.innerText = new_text;

}

// Task 2: Add a double-click event listener to an image that toggles its visibility.

function handleImageVisibility(event) {
    let img_ele = event.target;

    img_ele.classList.toggle("img-hidden");
}

// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.

function handlebgclrChange(event) {
    let target_ele = event.target
    target_ele.style.backgroundColor = generateRandomBgColor();
}


// Task 4: Add a mouseout event listener to an element that resets its background color.

function handlebgclrReset(event) {
    let target_ele = event.target
    target_ele.style.backgroundColor = "white";
}

// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

function handleKeyDown(event) {
    let value = event.key;
    console.log(`pressed value: ${value}`);
}

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

const inputField = document.getElementById('myInput');
const displayValue = document.getElementById('displayValue');

// Add a keyup event listener to the input field
inputField.addEventListener('keyup', function () {
    displayValue.textContent = inputField.value;
});

// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const form = document.getElementById('myForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            
            const formData = new FormData(form);
            const formEntries = {};
            formData.forEach((value, key) => {
                formEntries[key] = value;
            });

            
            console.log('Form Data:', formEntries);
        });

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const selectDropdown = document.getElementById('mySelect');
        const selectedValue = document.getElementById('selectedValue');

        
        selectDropdown.addEventListener('change', function() {
            selectedValue.textContent = `Selected: ${selectDropdown.value}`;
        });


// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.getElementById('myList');

        // Add a click event listener to the list using event delegation
        list.addEventListener('click', function(event) {
            if (event.target && event.target.nodeName === 'LI') {
                console.log(`List item clicked: ${event.target.textContent}`);
            }
        });

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

const parent = document.getElementById('parent');
        const addButton = document.getElementById('addButton');

       
        addButton.addEventListener('click', function() {
            const newItem = document.createElement('div');
            newItem.textContent = 'New Item';
            newItem.classList.add('child');
            parent.appendChild(newItem);
        });

       
        parent.addEventListener('click', function(event) {
            if (event.target && event.target.classList.contains('child')) {
                console.log(`Dynamically added item clicked: ${event.target.textContent}`);
            }
        });



//Task1 helper

function generateRandomText(length) {
    const characters = 'ABCDEF GHIJKLMN OPQRST UVWXYZ abcdefghijklmnopqrstuvwxyz ';
    let randomText = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomText += characters[randomIndex];
    }
    return randomText;
}

// Task3 helper

function generateRandomBgColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
