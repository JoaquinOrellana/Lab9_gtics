
$(document).ready(function () {
    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const idRegion = urlParams.get('region');



    $.ajax({
      method: "GET",
      url: "https://pokeapi.co/api/v2/region/"+idRegion,


    }).done(function (data) {
      let pagina=0;
      let listalocations = data.locations;
      let tamlista=listalocations.length;
      const locxpag=10;
      const cntpag=Math.ceil(tamlista/locxpag);

      crearbotpag(pagina);
      function crearbotpag(pag){

        document.getElementById("paginador").innerHTML="";

        if(pag==0){
          $("#paginador").append("<li class=\"page-item direccion disabled\" value='-1' ><span class=\"page-link\">Previous</span></li>")
        }else{
          $("#paginador").append("<li class=\"page-item direccion \" value='-1'><span class=\"page-link\">Previous</span></li>")
        }
        for (let i=0;i<cntpag;i++){
          if(pag==i){
            $("#paginador").append("<li class=\"page-item active\"  id='pag"+i+"' value='"+i+"'><button  class=\"page-link\">"+(i+1)+"</button></li>")
          }else{
            $("#paginador").append("<li class=\"page-item \"  id='pag"+i+"' value='"+i+"'><button  class=\"page-link\">"+(i+1)+"</button></li>")
          }
        }
        if(pag==cntpag-1){
          $("#paginador").append("<li class=\"page-item direccion disabled\" value='1'><a class=\"page-link\" href=\"#\">Next</a></li>")
        }else{
          $("#paginador").append("<li class=\"page-item direccion\" value='1'><a class=\"page-link\" href=\"#\">Next</a></li>")
        }

        $(".page-item:not(.direccion)").click(function (){
          console.log(this.value);
          pagina= this.value;
          gentabla(pagina);
          crearbotpag(pagina);
        })

        $(".direccion:not(.disabled)").click(function (){
          console.log("pagina antes:"+pagina);
          pagina =pagina+this.value;
          console.log("Pagina a dps:"+pagina);
          gentabla(pagina);
          crearbotpag(pagina);
        })


      }




      gentabla(pagina);


      function gentabla(pag){
        let tblDinamic = "";

        for (let i = pag*locxpag; i <(pag+1)*locxpag; i++) {
          if(i<tamlista){
            let url=listalocations[i].url;
            let id=url.substr(35,2);
            tblDinamic += "<tr>";
            tblDinamic += "   <td>" + (i + 1) + "</td>";
            tblDinamic += "   <td>" + listalocations[i].name + "</td>";
            tblDinamic += "   <td> <a class=\"btn btn-primary botonDetalle\" role=\"button\" href='../detalleLocacion/detalleLocacion.html?locacion="+id+"'>Detalles</a>  </td>";
            tblDinamic += "</tr>";
          }

        }

        $("tbody").html(tblDinamic);

      }











    }).fail(function (e) {
      console.log(e);
    });


});
