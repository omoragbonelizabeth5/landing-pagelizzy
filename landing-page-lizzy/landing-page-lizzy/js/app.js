/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//declare global variable
const List = document.querySelector('#navbar__list')
const sections = document.querySelectorAll('section')


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
//create variable
const addToNavList = function (section) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = section.getAttribute('data-nav');
    a.setAttribute('href', '#' + section.getAttribute('id'));
    a.id = `link-${section.getAttribute("id")}`
    //append it
    li.appendChild(a);
    List.appendChild(li);

}


for (let i = 0; i < sections.length; i++) {
    addToNavList(sections[i])
}

//source: modified from code taken from https:gomakethings.com/how-to-test-if-an-element
const isInViewPort = function (elem) {
    const bound = elem.getBoundingClientRect();
    const { top, bottom, left, right } = elem.getBoundingClientRect();
    //helper function
    return (
        bound.top >= 0 &&
        bound.left >= 0 &&

        bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // b.right <= window.scrollY
        bound.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', (e) => {
    e.preventDefault();
    sections.forEach(sect => {
        const scroll = isInViewPort(sect.querySelector('h2'));
        const href = sect.getAttribute('id')
        const a = document.querySelector(`a[href="${href}"]`)

        if (scroll) {
            // add active class       
            sect.classList.add('your-active-class')
            
        } else {
            // remove active class
            sect.classList.remove('your-active-class')
        
        }

    })
});


// Scrolls to the section on click of the navigation item
(function () {
	for (let i = 0; i < sections.length; i++) {
		let navList = document.querySelector(`#link-section${i + 1}`);
		navList.addEventListener("click", (e) => {
			e.preventDefault();
			let section = document.getElementById("section" + (i + 1));
			section.scrollIntoView({
				behavior: "smooth",
				block: "start",
                inline: "start"
			});
			section.style.cssText = "padding-top: 50px";
		});
	}
})();

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


