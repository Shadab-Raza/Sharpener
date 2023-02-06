//--------------------------------TASK-3-----------------------------------------------------

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
//-----------------------------------------

    //M-1 (Without Using Variable)
    //console.log(document.getElementById('header-title'));

    //M-2 (By Using Variable)
    // var headerTitle = document.getElementById('header-title');
    // var header = document.getElementById('main-header');
    // console.log (headerTitle);

    // headerTitle.textContent = 'Hello';  ---> Method one to write from js
    // headerTitle.innerHTML = 'Welcome to Sharpener';    ---> Method two to write from js

    //headerTitle.style.color = 'black';
    //headerTitle.style.fontStyle = 'italic';

    // console.log(headerTitle.innerHTML);
    // headerTitle.innerHTML = '<h3>Hello</h3>';   ---> Method three to write from js/

    // header.style.border = 'solid 3px black';
    


// * GETELEMENTBYCLASSNAME
//-------------------------------------------------
    // Q.No 3

    // var title = document.getElementsByClassName('title');
    // console.log(title);

    // console.log(title[0]);
    // //title[0].textContent = "Hello";
    // title[0].style.fontWeight = "bold";
    // title[0].style.color = "green";



//----------------------------------TASK-4----------------------------------------------------------------------

     // TASK-4 Question-1

    // var items = document.getElementsByClassName('list-group-item');
    // console.log(items);

    // items[1].textContent = 'Second Item';
    // items[1].style.fontWeight = 'bold';
    // items[1].style.backgroundColor = 'yellow';

    // for (var i = 0; i < items.length; i++) {
    //     items[i].style.backgroundColor = '#f4f4f4';
    // }


    // TASK-4 Question-2
    // items[2].textContent = 'Third Item';
    // items[2].style.fontWeight = 'bold';
    // items[2].style.backgroundColor = 'green';



    // TASK-4 Question-3
    // items[0].textContent = 'First Item';
    // items[0].style.fontWeight = 'bold';
    // items[3].textContent = 'Fourth Item';
    // items[3].style.fontWeight = 'bold';



//-----------------------------------------TASK-5------------------------------------------------------------------

    // TASK-5 Playing with li with different className
    // var groupItem = document.getElementsByClassName('group_item');
    // console.log (groupItem); 
    // console.log (groupItem[0]); 

    // groupItem[0].textContent = "Item Five Manual";
    // groupItem[0].style.listStyle = 'none';
    // groupItem[0].style.fontWeight = 'bold';
    // groupItem[0].style.backgroundColor = 'green';
    // groupItem[0].style.color = 'white';
    // groupItem[0].style.padding = '15px 22px';
    // groupItem[0].style.border = '1px solid #cccc';
    // groupItem[0].style.borderRadius = '4px';




// * GETELEMENTBYTAGNAME
//-------------------------------------------------

    // Task-5
    // var li = document.getElementsByTagName('li');
    // console.log(li);
    // console.log(li[4]);

    // li[1].textContent = 'Second Item';
    // li[1].style.fontWeight = 'bold';
    // li[1].style.backgroundColor = 'yellow';

    // for (var i = 0; i < li.length; i++) {
    //     li[i].style.backgroundColor = '#f4f4f4';
    // }

    // li[4].style.listStyle = 'none';
    // li[4].style.fontWeight = 'bold';
    // li[4].style.backgroundColor = 'green';
    // li[4].style.color = 'white';
    // li[4].style.padding = '15px 22px';
    // li[4].style.border = '1px solid #cccc';
    // li[4].style.borderRadius = '4px';



//-----------------------------------------TASK-6------------------------------------------------------------------

// * QUERYSELECTOR
//-------------------------------------------------

    // var header = document.querySelector('#main-header');
    // console.log (header);

    // header.style.borderBottom = 'solid 4px #000000';

    // var input = document.querySelector('input');
    // input.value = "Hello World";

    // var submit = document.querySelector('input[type="submit"]');
    // submit.value = "SEND";

    // var item = document.querySelector('.list-group-item');
    // item.style.color = "red";

    // var lastItem = document.querySelector('.list-group-item:last-child');
    // lastItem.style.color = 'blue';

    // var secondItem = document.querySelector('.list-group-item:nth-child(2)');
    // secondItem.style.color = 'orange';


// TASK-6 Question-1 Solution

    // var secondItem = document.querySelector('.list-group-item:nth-child(2)');
    // var thirdItem = document.querySelector('.list-group-item:nth-child(3)');

    // secondItem.style.backgroundColor = 'green';
    // thirdItem.style.display = 'none';


// * QUERYSELECTORALL
//-------------------------------------------------

    // var titles = document.querySelectorAll('.title');
    // console.log(titles);

    // titles[0].textContent = 'Hello';

    // var odd = document.querySelectorAll ('li:nth-child(odd');
    // var even = document.querySelectorAll ('li:nth-child(even');

    // for(var i = 0; i < odd.length; i++) {
    //     odd[i].style.backgroundColor = '#f4f4f4';
    //     even[i].style.backgroundColor = '#ccc';
    // }


// TASK-6 Question-2 Solution

    var secondItem = document.querySelectorAll('li:nth-child(2)');
    console.log (secondItem);

    secondItem[0].style.color = 'green';

    var odd = document.querySelectorAll ('li:nth-child(odd');
    for(var i = 0; i < odd.length; i++) {
            odd[i].style.backgroundColor = 'green';
        }