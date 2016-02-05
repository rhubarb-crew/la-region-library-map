function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 34.050, lng: -118.255},
    zoom: 10
  });

  $.getJSON('https://data.lacounty.gov/resource/nrtn-ga3s.json', function(data) {
    var library_markers = [];

    $.each(data, function(key, val) {
      var library_latlng = {
        lat: parseFloat(val.address_and_location.latitude),
        lng: parseFloat(val.address_and_location.longitude)
      }

      var library_marker = new google.maps.Marker({
        position: library_latlng,
        title: val.library_name
      });

      library_markers.push(library_marker);
    });

    $.each(library_markers, function(key, val) {
      val.setMap(map);
    });
  });
}

