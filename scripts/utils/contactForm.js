// OUVERTURE ET FERMETURE FORMULAIRE
let modal = document.getElementById("contact_modal");

function displayModal() {
	modal.style.display = "block";
    prenom.focus();
}
function closeModal() {
    modal.style.display = "none";
}