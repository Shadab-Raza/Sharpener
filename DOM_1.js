// Task 3 Question No - 2

    // Selecting the Document
// console.dir(document);
console.log(document.domain)
console.log(document.URL)
console.log(document.title);

// Changing the title
//document.title = 123;
//document.title = "My Site"

console.log (document.doctype);
console.log (document.head);
console.log (document.body);
console.log (document.all);
console.log (document.all[10]);

//document.all[10].textContent = 'Hello';

console.log(document.forms);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images)


// Using Selector for Selecting the Elements;

    // * GETELEMENTBYID
    //M-1 (Without Using Variable)
    console.log(document.getElementById('header-title'));

    //M-2 (By Using Variable)
    var headerTitle = document.getElementById('header-title');
    console.log (headerTitle);

    headerTitle.textContent = 'Hello'
    headerTitle.innerHTML = 'Welcome to Sharpener';
    headerTitle.style.color = 'black';
    headerTitle.style.fontStyle = 'italic';