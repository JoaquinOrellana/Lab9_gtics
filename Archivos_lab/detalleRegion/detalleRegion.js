
$(document).ready(function () {
    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const idRegion = urlParams.get('region');



    $.ajax({
      method: "GET",
      url: "https://pokeapi.co/api/v2/region/"+idRegion,


    }).done(function (data) {

      let listalocations = data.locations;
      console.log(listalocations);

      let tblDinamic = "";
      for (let i = 0; i < listalocations.length; i++) {
        let url=listalocations[i].url;
        let id=url.substr(35,2);
        console.log(id);
        tblDinamic += "<tr>";
        tblDinamic += "   <td>" + (i + 1) + "</td>";
        tblDinamic += "   <td>" + listalocations[i].name + "</td>";
        tblDinamic += "   <td> <a class=\"btn btn-primary botonDetalle\" role=\"button\" href='../detalleLocacion/detalleLocacion.html?locacion="+id+"'>Detalles</a>  </td>";
        tblDinamic += "</tr>";
      }
      console.log(tblDinamic);
      $("tbody").html(tblDinamic);


    }).fail(function (e) {
      console.log(e);
    });


});
