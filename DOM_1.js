// Task 3 Question No - 2

    // Selecting the Document
// console.dir(document);
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title);

    // Changing the title
//document.title = 123;
//document.title = "My Site";

// console.log (document.doctype);
// console.log (document.head);
// console.log (document.body);
// console.log (document.all);
// console.log (document.all[10]);

//document.all[10].textContent = 'Hello';

// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


// Using Different Selector for Selecting the Elements;

// * GETELEMENTBYID

    //M-1 (Without Using Variable)
    // console.log(document.getElementById('header-title'));

    //M-2 (By Using Variable)
    var headerTitle = document.getElementById('header-title');
    var header = document.getElementById('main-header');
    // console.log (headerTitle);

    // headerTitle.textContent = 'Hello';  ---> Method one to write from js
    // headerTitle.innerHTML = 'Welcome to Sharpener';    ---> Method two to write from js

    //headerTitle.style.color = 'black';
    //headerTitle.style.fontStyle = 'italic';

    //console.log(headerTitle.innerHTML);
    // headerTitle.innerHTML = '<h3>Hello</h3>';   ---> Method three to write from js/

    header.style.border = 'solid 3px black';
    

// * GETELEMENTBYCLASSNAME

    // Q.No 3

    var title = document.getElementsByClassName('title');
    console.log(title);

    console.log(title[0]);
    //title[0].textContent = "Hello";
    title[0].style.fontWeight = "bold";
    title[0].style.color = "green";