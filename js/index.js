// Your code goes here


const navElementSelector = document.querySelectorAll(".main-navigation .container .nav a");
const paragraphElementSelector = document.querySelector


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



// function highlight(test) {
//     //console.log('test');
//     test.style.backgroundColor = 'blue';
// }



