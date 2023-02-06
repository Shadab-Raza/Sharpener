// ---------------------------------TASK-7------------------------------------------------------
    // TRAVERSING THE DOM

var itemList = document.querySelector('#items');

// parentNode
    // console.log(itemList.parentNode);
    // itemList.parentNode.style.backgroundColor = "#f4f4f4";
    // console.log(itemList.parentNode.parentNode);


// parentElement
    // console.log(itemList.parentElement);
    // itemList.parentElement.style.backgroundColor = "#f4f4f4";
    // console.log(itemList.parentElement.parentElement);
    

// childNodes
    //console.log(itemList.childNodes);


// children
    // console.log(itemList.children);
    // console.log(itemList.children[1]);
    // itemList.children[1].style.backgroundColor = 'yellow';


// firstChild
    // console.log(itemList.firstChild);


// firstElementChild
    // console.log(itemList.firstElementChild);
    // itemList.firstElementChild.textContent = "Hello 1";


// lastElementChild
    // console.log(itemList.lastElementChild);
    // itemList.lastElementChild.textContent = "Hello 4";


// nextSibling
    // console.log(itemList.nextSibling);


// nextElementSibling
    // console.log(itemList.nextElementSibling);


// previousSibling
    // console.log (itemList.previousSibling);


// previousElementSibling
    // console.log (itemList.previousElementSibling);
    // itemList.previousElementSibling.style.color = 'green';


// createElement

    // create a div
    var newDiv = document.createElement('div');
    // Add class
    newDiv.className = 'hello';

    // Add id
    newDiv.id = 'hello1';

    // Add attribute
    newDiv.setAttribute('title', 'Hello Div');

    // Question - 1

    // Create a text node
    var newDivText = document.createTextNode("Hello World");

    // Add text to div
    newDiv.appendChild(newDivText);

    var container = document.querySelector('header .container');
    var h1 = document.querySelector('header h1');
    
    console.log(newDiv);

    newDiv.style.fontSize = '30px';
    container.insertBefore(newDiv, h1);



    // Question - 2

    // Creating a div
    var newItem = document.createElement('li'); 

    // Create a Text Item
    var newItemText = document.createTextNode('Hello World');

    // Add text to div
    newItem.appendChild(newItemText);

    var items = document.querySelector('#items');
    var listGroupItem = document.querySelector ('.list-group-item');
    
    items.insertBefore(newItem, listGroupItem)

    console.log(newItem);

    // Giving styling to my li
    newItem.style.listStyle = 'none';
    newItem.style.padding = '15px 22px';
    newItem.style.border = '1px solid #cccc';
    newItem.style.borderRadius = '4px';

    

    