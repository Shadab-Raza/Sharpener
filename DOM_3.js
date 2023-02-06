var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem)

// Function for addItem
function addItem(e) {
    e.preventDefault();

    // Get input Value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append button to li
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append li to list
    li.appendChild(deleteBtn)

    // Create Edit button element
    var editBtn = document.createElement('button');

    // Add classes to del button
    editBtn.className = 'btn btn-secondary btn-sm mr-2 float-right edit';

    // Append button to li
    editBtn.appendChild(document.createTextNode('Edit'));

    // Append li to list
    li.appendChild(editBtn)

    itemList.appendChild(li);
}


// Function for removeItem
function removeItem(e) {
    e.preventDefault();

    if(e.target.classList.contains('delete')) {
        if(confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}