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

    window.location = "../../juego/meeple-combat/imprimibles.html"

})

logoBtn.addEventListener('click', function () {

    window.location = "../../juego/meeple-combat/"

})

matecitoBtn.addEventListener('click', function () {

    window.location = "https://www.matecito.co/battlerol.net"

})


jugarBtn.addEventListener('click', function () {


    window.location = "../../juego/meeple-combat/interfaz/index.html"

})




proyectoBtn.addEventListener('click', function () {

    window.location = "../../juego/meeple-combat/proyecto.html"

})



