// Task1: Select an HTML element by its ID and change its text content.
function handle_text_change() {
    // Select the HTML element by its ID
    const paragraph = document.getElementById('change-text');
    
    // Change its text content
    paragraph.textContent = 'Hello, I am on path to become pro in JavaScript!';
}

// Task2: Select an HTML element by its class and change its background color.

function change_bg_color() {
    let bgParagraphs = document.getElementsByClassName("bg-change-cls");
    for (let i = 0; i < bgParagraphs.length; i++) {
        let paragraph = bgParagraphs[i];

        // Check current background color and toggle it
        if (paragraph.classList.contains('red-bg')) {
            paragraph.classList.remove('red-bg');
            paragraph.classList.add('blue-bg');
        } else {
            paragraph.classList.remove('blue-bg');
            paragraph.classList.add('red-bg');
        }
    }
}

// Task3: Create a new div element with some text content and append it to the body.

function add_new_element() {
    let task3_div = document.getElementById("task-3");
    let text_node = document.createTextNode("newly appended div")
    let div_element = document.createElement("div");
    div_element.classList.add("task-item");
    div_element.appendChild(text_node);
    task3_div.appendChild(div_element);
}

// Task 4: Create a new li element and add it to an existing ul list.

function add_li_element(){
    let ul_element = document.getElementById("task-4");
    let text_node = document.createTextNode(`${(ul_element.childNodes.length % 2 !== 0 ? Math.floor(ul_element.childNodes.length/2): ul_element.childNodes.length/2) + 1}`);
    let li_element = document.createElement("li");
    li_element.appendChild(text_node);
    ul_element.appendChild(li_element);
}

// Task5: Select an HTML element and remove it from the DOM.

function delete_element(){
   let element = document.getElementById("remove-element");
   element.remove();

}

// Task 6: Remove the last child of a specific HTML element.

function remove_last_child(){
    let childrens = document.getElementsByClassName("li-element");
    let last_child = childrens[childrens.length - 1];
    last_child.remove();
}

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

function change_image_src() {
    let img_src = "https://habrastorage.org/getpro/habr/upload_files/88f/f62/19f/88ff6219fa2661ad4344f09f7b11a0ee.png";
    let img_element = document.getElementById("js-img");
    img_element.setAttribute("src", img_src);
}

// Task 8: Add and remove a CSS class to/from an HTML element.

function add_remove_bg(){
    let p_tag = document.getElementById("change_cls");
    p_tag.classList.remove("bg-black");
    p_tag.classList.add("bg-red");
}

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
function increment_count(event){
    let element = event.target;
    let count = parseInt(element.innerText);
    element.innerText = count + 1;
}

// Task 10: Add a mouseover event listener to an element that changes its border color.

function change_border_color (event) {
    let element = event.target;
    let random_color = get_random_color();
    element.style.border = `4px solid ${random_color}`;

}

function get_random_color(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
/* 

Day 9: DOM Manipulation
Tasks/Activities:
Activity 1: Selecting and Manipulating Elements
• Task 2: Select an HTML element by its class and change its background color.
Activity 2: Creating and Appending Elements
• Task 3: 
• 
Activity 3: Removing Elements
• Task 5: Select an HTML element and remove it from the DOM.
• Task 6: Remove the last child of a specific HTML element.
Activity 4: Modifying Attributes and Classes
• Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
• Task 8: Add and remove a CSS class to/from an HTML element.
Activity 5: Event Handling
• Task 9: Add a click event listener to a button that changes the text content of a paragraph.
• Task 10: Add a mouseover event listener to an element that changes its border color.

*/