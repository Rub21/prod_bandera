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

      /*$('#loading_prod').addClass("loading");
      window.setTimeout(function() {
        $('#loading_prod').removeClass("loading");
      }, 500);*/

      $('.po').css('display', 'none');

      for (var i = 1; i <= 10; i++) {


        var prod = "PROD" + i;
        var prod_img = "P" + i;

        var prod_div = "prod" + i;
        var prod_div_img = "p" + i;
        var id_div = "po" + i;

        console.log(prod)

        if (check_null(o.data[prod])) {

          $('#' + id_div).css('display', 'block');
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

$(document).ready(function() {
  $('#map').removeClass("loading");

});