
$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "https://pokeapi.co/api/v2/region"
  }).done(function (msg) {
    let listaRegiones = msg.results;
    let tabla = "";
    for (let i = 0; i < listaRegiones.length; i++) {
      tabla += "<tr>";
      tabla += "   <td>" + (i + 1) + "</td>";
      tabla += "   <td>" + listaRegiones[i].name + "</td>";
      tabla += "   <td><a class=\"btn btn-primary botonDetalle\" href='detalleRegion/detalleRegion.html?region="+(i+1)+"' role=\"button\">Detalle</a></td>";

      tabla += "</tr>";
    }
    $("tbody").html(tabla);
  }).fail(function(err) {
    console.log(err);
    alert("La region no exite")
  })
});
