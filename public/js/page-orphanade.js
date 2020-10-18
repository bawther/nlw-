// options 
const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false,
}
//create map
const map = L.map('mapid', options).setView([-22.7454761, -42.8615716], 16);
//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [140, 2]
})
//create and add marker 
L
.marker([-22.7454761, -42.8615716], { icon })
.addTo(map)
//image gallery
function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes activec
    const buttons = document.querySelectorAll(".images button")
        buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de img
    imageContainer.src = image.src

    // add a classe .active para o botão clicado
    button.classList.add('active')
} 