var map = mapbox.map('map');
map.zoom(9).center({
  lat: -13.893,
  lon: -74.298
});



map.addLayer(mapbox.layer().id('ruben.map-u6za9qld', function() {
  map.interaction.auto();
  map.interaction.off('on');
  map.interaction.off('off');
  map.interaction.on({
    on: function(o) {
      console.log(o);

      document.getElementById('distrito').innerHTML = o.data.DISTRITO;
      document.getElementById('distrito2').innerHTML = o.data.DISTRITO;
      document.getElementById('act_princ').innerHTML = o.data.ACT_PRINCI;
      document.getElementById('clima').innerHTML = o.data.CLIMA;


      document.getElementById('p_total').innerHTML = o.data.P_TOTAL;
      document.getElementById('p_femenina').innerHTML = o.data.P_FEMENINA;
      document.getElementById('p_masculina').innerHTML = o.data.P_MASCULIN;
      document.getElementById('pae_ocupad').innerHTML = o.data.PEA_OCUPAD;

      document.getElementById('sup_territ').innerHTML = o.data.SUP_TERRIT;
      document.getElementById('sup_agrico').innerHTML = o.data.SUP_AGRICO;


      $('#loading_prod').addClass("loading");
      window.setTimeout(function() {
        $('#loading_prod').removeClass("loading");
      }, 500);


      $('.po').css('display','none');

      for (var i = 1; i <= 10; i++) {


        var prod = "PROD" + i;
        var prod_img = "P" + i;

        var prod_div = "prod" + i;
        var prod_div_img = "p" + i;
        var id_div="po"+i;

        console.log(prod)

        if (check_null(o.data[prod])) {

          $('#'+id_div).css('display','block');
          document.getElementById(prod_div).innerHTML = o.data[prod];
          document.getElementById(prod_div_img).src = "http://dl.dropbox.com/u/43116811/regionproducto/" + o.data[prod_img] + ".png";

        } else if (i == 10) {

        } else {

          console.log("no producto");
          break;
        }



      };



      function check_null(k) {
        if (k.replace(/\s/g, "") + String.fromCharCode(160) != String.fromCharCode(160)) {
          return true;
        } else {
          return false;
        }
      };


      /* document.getElementById('country').innerHTML = o.data.country;
      document.getElementById('province').innerHTML = o.data.province;
      document.getElementById('criteria').innerHTML = o.data.criteria;
      document.getElementById('dateofinscription').innerHTML = o.data.dateofinscription;
      document.getElementById('url').innerHTML = o.data.url;
      document.getElementById('url').href = o.data.url;*/

      /* a.setAttribute("href",url);
           a.href = "somelink url"*/

      /*

ACT_PRINCI: "Agropecuario"
CLIMA: "Trunda seca"
DISTRITO: "Paras"
P1: "mai"
P2: "pap"
P3: "vac"
P4: "alp"
P5: ""
P6: ""
P7: ""
P8: ""
P9: ""
P10: ""
PEA_OCUPAD: 0
PROD1: "Maíz amiláceo"
PROD2: "Papa"
PROD3: "Ganado vacuno"
PROD4: "Alpacas y Llamas"
PROD5: ""
PROD6: ""
PROD7: ""
PROD8: ""
PROD9: ""
PROD10: ""
P_FEMENINA: 3890
P_MASCULIN: 1127
P_TOTAL: 5017
SUP_AGRICO: 1255
SUP_TERRIT: 791.01


           */
    }
  });
}));

// Attribute map
map.ui.attribution.add()
  .content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');

map.setZoomRange(7, 12);
map.ui.hash.add();
map.ui.zoomer.add();
map.ui.zoombox.add();


      $(document).ready(function(){


              $('#map').removeClass("loading");

      });




