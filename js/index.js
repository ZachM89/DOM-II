// Your code goes here


const navElementSelector = document.querySelectorAll(".main-navigation .container .nav a");
const paragraphElementSelector = document.querySelectorAll("p");
const contentTitleSelector = document.querySelectorAll("h2");
const headerSelector = document.querySelector("header");
const imageSelector = document.querySelectorAll(".img-content");
const h4Selector = document.querySelectorAll("h4");
const windowSelector = window;
const navSelector = document.querySelector(".main-navigation .nav-container");
const input = document.querySelectorAll('p');



//navElementSelector.addEventListener('click', highlight(navElementSelector));

for(let a = 0; a < navElementSelector.length; a++){
    navElementSelector[a].addEventListener('click', (e) => {
        if(e.target.style.backgroundColor != 'blue'){
            e.target.style.backgroundColor = 'blue';
        } else {
            e.target.style.backgroundColor = 'white';
        }
        
    });
}

for(let a = 0; a < paragraphElementSelector.length; a++){
    paragraphElementSelector[a].addEventListener('dblclick', (e) => {
        e.target.style.display = 'none';
    })
}

for(let a = 0; a < contentTitleSelector.length; a++){
    contentTitleSelector[a].addEventListener('mouseover', (e) => {
        e.target.style.color = 'red';
    })

    contentTitleSelector[a].addEventListener('mouseout', (e) => {
        e.target.style.color = 'black';
    })
}

headerSelector.addEventListener('copy', (e) => {
    e.target.style.backgroundColor = 'yellow';
})

for(let a = 0; a < imageSelector.length; a++){
    imageSelector[a].addEventListener('cut', (e) => {
        e.target.style.display = 'none';
    })
}

for(let a = 0; a < h4Selector.length; a++){
    h4Selector[a].addEventListener('mouseenter', (e) => {
        e.target.style.color = 'green';
    })

    h4Selector[a].addEventListener('mouseleave', (e) => {
        e.target.style.color = 'brown';
    })
}

for(let a = 0; a < input.length; a++){
    input[a].addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = 'pink';
    })

    input[a].addEventListener('mouseup', (e) => {
        e.target.style.backgroundColor = 'dodgerblue';
    })
}




// function highlight(test) {
//     //console.log('test');
//     test.style.backgroundColor = 'blue';
// }



