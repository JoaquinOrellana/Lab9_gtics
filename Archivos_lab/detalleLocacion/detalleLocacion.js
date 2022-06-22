
$(document).ready(function () {
    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const idLocacion = urlParams.get('locacion');

    // Elementos importantes:
    const tabla = document.getElementsByTagName("tbody")[0]
    const img_container = document.getElementById("pokemons")
    const template =  document.querySelector("template")

    $.get("https://pokeapi.co/api/v2/location/" + idLocacion)
        .done((location) => {

            for (let ii=0; ii<location.areas.length; ii++){

                let row = template.content.querySelector("tr").cloneNode(true);

                row.cells.item(0).innerHTML = (ii+1).toString()
                row.cells.item(1).innerHTML = location.areas[ii].name

                let boton = row.cells.item(2).children[0]
                boton.id = areas.areas[ii].url.split('/').reverse()[1]

                boton.addEventListener("click", function (){
                    mostrarImagenes(this.id, location.areas[ii].name)
                })

                tabla.appendChild(row)
            }
        })
        .fail((err) => {
            console.log(err)
            alert("Esta locación no existe")
        })

    function mostrarImagenes(id, nombreArea){
        img_container.innerHTML = ""

        $.get("https://pokeapi.co/api/v2/location-area/"+id)
            .done((msg) => {

                let img_cell = template.content.querySelector(".col-3").cloneNode(true)
                let listaPokemones = msg.pokemon_encounters

                const titulo = document.getElementById("areaSeleccionada")
                titulo.innerHTML = "Pokemones a encontrarse en el Área: " + nombreArea

                listaPokemones.forEach((pokemon) => {
                    let nombre = pokemon.pokemon.name
                    let idPokemon = pokemon.pokemon.url.split('/').reverse()[1]

                    img_cell.children[0].src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/"+ idPokemon +".gif"
                    img_cell.children[1].innerHTML = nombre

                    img_container.appendChild(img_cell)

                })



            })
            .fail((err) => {
                console.log(err)
                alert("Esta área no existe")
            })
    }
});
