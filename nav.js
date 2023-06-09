menu = document.querySelector(".menu");
menu.onclick = function(){
    navs = document.querySelector(".navs");
    navs.classList.toggle("activo");
}

/* remove toggle icon and navbar */


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if( top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('activo');
                document.querySelector('header ul li a[href*=' + id + ']').classList.add('activo');
            });
        };
    });


    let header =  document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    
    navs.classList.remove("activo");

};

