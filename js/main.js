document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});
document.body.addEventListener('keydown', (e) => {
    e.preventDefault();
    return false;
});
document.body.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
});
document.body.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
});

imprimiblesBtn.addEventListener('click', function () {

    window.location = "/imprimibles.html"

})

logoBtn.addEventListener('click', function () {

    window.location = "/index.html"

})

matecitoBtn.addEventListener('click', function () {

    window.location = "https://www.matecito.co/Battlerol.net"

})


jugarBtn.addEventListener('click', function () {


    window.location = "../../juego/index.html"

})




proyectoBtn.addEventListener('click', function () {

    window.location = "/proyecto.html"

})



