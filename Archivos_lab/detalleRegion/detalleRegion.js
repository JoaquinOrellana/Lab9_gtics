
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


      let tamlista=listalocations.length;
      console.log("Tamaño de lista:"+tamlista);
      const locxpag=10;
      const cntpag=Math.ceil(tamlista/locxpag);
      console.log("paginas:"+cntpag);
      let i = 1;
      $("#paginador").append("<li class=\"page-item disabled\"><span class=\"page-link\">Previous</span></li>")
      for (i;i<cntpag;i++){
        $("#paginador").append("<li class=\"page-item \" id='pag"+i+"'><button value=\"1\" class=\"page-link\">"+i+"</button></li>")
      }
      $("#paginador").append("<li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>")

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
