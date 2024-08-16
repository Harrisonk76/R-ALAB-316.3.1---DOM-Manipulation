
var menuLinks = [
    {text: 'about', href: '#', sublinks:  [
      {text:'<h1>about<h1', href:'/about'}
    ]},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];


// PART 1 

// Step 1: Select and cache the <main> element in a variable named mainEl
const mainEl = document.querySelector('main');

// Step 2: Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainEl.style.backgroundColor = 'var(--main-bg)';

// Step 3: Set the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Step 4: Add a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr');


// PART 2 
// Step 1: Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector('#top-menu');

// Step 2: Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';

//Step 3: Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Step 4: Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

// PART 3 



menuLinks.forEach(link => {
    const newLink = document.createElement('a');
    newLink.setAttribute('href', link.href);
    newLink.innerHTML = link.text;
    topMenuEl.appendChild(newLink);
});



// Creating the sub-menu
//Step 1: Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector('#sub-menu')

// Step 2: Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';

//Step 3: Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Step 4: Add a class of flex-around to subMenuEl.
subMenuEl.classList.add('flex-around');

// Adding Menu Interaction

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');



topMenuEl.addEventListener('click', ( event ) => {
    event.preventDefault()
    // Check if the clicked element is an <a> element
    if (!event.target.matches('a')) {
        return; // Exit the function if the clicked element is not an <a> element
    }
    // Log the content of the <a> element to verify the handler is working
    console.log(event.target.textContent); 

    // Remove 'active' class from all <a> elements inside topMenuEl
    topMenuLinks.forEach(link => {
        link.classList.remove('active');
    });

    event.target.classList.add('active');

    const clickedLink = menuLinks.find(link => link.text === event.target.textContent);

    if (clickedLink.subLinks) {
        subMenuEl.style.top = '100%'; 
        buildSubmenu(clickedLink.subLinks); 
    } else {
        subMenuEl.style.top = '0%'; 
        subMenuEl.innerHTML = ''; 
    }
  if (event.target.textContent === "about") {
    mainEl.innerHTML = '<h1>About</h1>';}
});

const buildSubmenu = (subLinks) => {
    subMenuEl.innerHTML = '';

    subLinks.forEach(sublink => {
        const newSubLink = document.createElement('a');
        newSubLink.setAttribute('href', sublink.href);
        newSubLink.innerHTML = sublink.text;
        subMenuEl.appendChild(newSubLink);
       
    });   
}


subMenuEl.addEventListener('click', ( event ) => {
    event.preventDefault()
    if (!event.target.matches('a')) {
        return; 
    }
    console.log(event.target.textContent); 
    subMenuEl.style.top = '0%'; 

    topMenuLinks.forEach(link => {
        link.classList.remove('active');
    });


    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;

    
});
