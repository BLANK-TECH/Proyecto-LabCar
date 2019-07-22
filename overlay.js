let flexModal = document.getElementById("overlay");
let closeModal = document.getElementById("btn-cerrar-iniciar");
let openModal = document.getElementById("open-modal");

//evento para abrir modal//
openModal.addEventListener('click', (e) => {
    e.preventDefault();
    flexModal.style.display = "flex";
});
//evento para cerrar modal//
closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    flexModal.style.display = 'none';
});
//evento para cerrar al tocar los costados//
window.addEventListener('click', (e) => {
    if (e.target == flexModal) {
        flexModal.style.display = 'none';
    }
});