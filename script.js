let nav = document.querySelector("nav")
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('sticky');
    }
    else{
        nav.classList.remove('sticky')
    }
}

let navLinks = document.querySelectorAll("nav .navbar .menu li a")
console.log( navLinks)
for( var i = 0 ; i <= navLinks.length ; i++ ){
    navLinks[i].addEventListener("click" , function() {
         navBar.classList.remove("active");
        
    });
}