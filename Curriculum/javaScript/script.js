const valor = document.getElementById("hora");
const horaSistema = new Date().getHours();

if (horaSistema < 12 && horaSistema >= 6) {
    valor.textContent = "Bom dia!";
}
else if (horaSistema < 18 && horaSistema >= 12) {
    valor.textContent  = "Boa tarde!";
}
else {
    valor.textContent  = "Boa noite!";
}