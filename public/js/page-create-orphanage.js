//create map
const map = L.map('mapid').setView([-22.7454761, -42.8615716], 16);
//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})
let marker;
 //create and add marker
 map.on('click',(event)=>{ 
    const lat=event.latlng.lat
    const lng=event.latlng.lng

    document.querySelector('[name=lat]').value=lat
    document.querySelector('[name=lng]').value=lng

    //remover icon Layer
    marker && map.removeLayer(marker)
    //add icon Layer
    marker=L.marker([lat,lng], {icon})
    .addTo(map)
})
//add photos
function addPhotoField(){
    //pegar container fotos #images
    const container = document.querySelector('#images')
    //pegar container para duplicar .new-uploads
    const fieldContainer = document.querySelectorAll('.new-upload')
    //add clone a última imagem adicionada.
    const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)
     //verificar se o campo está vazio, se sim, não adicionar ao container de images
    const input = newFieldContainer.children[0]
    if (input.value == ""){
        return
    }
    //limpar o campo antes de adicionar ao container de images
    input.value = "" 
    //adicionar clone ao container #images
    container.appendChild(newFieldContainer)

}
function deleteField(event){
    const span = event.currentTarget
    const fieldContainer = document.querySelectorAll('.new-upload')
    if(fieldContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    span.parentNode.remove()
}
//troca de cor entre o sim e o não
function toggleSelect(event){
     //retirar class active 
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })
    //pegar botão clicados
    const button = event.currentTarget
    //colocar class active no botão clicado
    button.classList.add('active') 
    //atualizar meu input hidden com o valor clicado
    const input = document.querySelector('[name ="open-on-wekeends"]')
    input.value = button.dataset.value
}