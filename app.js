'use strict';

const switcher = document.querySelector('.btn-theme');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Sombre";
    } else {
        this.textContent = "Clair";
    }
    console.log("class actuelle : "+ className);
});


