
$(document).ready(function () {
    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const idLocacion = urlParams.get('locacion');

    // Elementos importantes:
    const tabla = document.getElementsByTagName("tbody")[0]
    const img_container = document.getElementById("pokemons")
    const template =  document.querySelector("template")

    $.get("https://pokeapi.co/api/v2/location/" + idLocacion)
        .done((areas) => {
            console.log(areas.areas.length)
            console.log(areas.areas)

            for (let ii=0; ii<areas.areas.length; ii++){

                let row = template.content.querySelector("tr").cloneNode(true);

                row.cells.item(0).innerHTML = (ii+1).toString()
                row.cells.item(1).innerHTML = areas.areas[ii].name

                let boton = row.cells.item(2).children[0]
                boton.id = areas.areas[ii].url.split('/').reverse()[1];

                boton.addEventListener("click", function (){
                    mostrarImagenes(this.id)
                })

                tabla.appendChild(row)
            }
        })
        .fail((err) => {
            console.log(err)
            alert("Esta locación no existe")
        })

    function mostrarImagenes(id){
        img_container.innerHTML = ""



        $.get()
    }

});
