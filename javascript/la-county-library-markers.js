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

  //  call LA City API and iterate through array using jQuery
  // $.getJSON('https://data.lacity.org/resource/q5ed-t8zw.json', function(data) {
  //   var library_markers = [];

  //   $.each(data, function(key, val) {
  //     var library_latlng = {
  //       lat: object.location.coordinates[0],
  //       lng: object.location.coordinates[1]
  //     }

  //     var library_marker = new google.maps.Marker({
  //       position: library_latlng,
  //       title: val.branch_name
  //     });

  //     library_markers.push(library_marker);
  //   });

  //   $.each(library_markers, function(key, val) {
  //     val.setMap(map);
  //   });
  // });

  //  call LA City API and iterate through array using JS
  // $.getJSON('https://data.lacity.org/resource/q5ed-t8zw.json', function(data) {
  //   var libraryCoordinates = data.map(function(object) {
  //     return {
  //       title: object.branch_name,
  //       lat: object.location.coordinates[0],
  //       lng: object.location.coordinates[1]
  //     };
  //   });

  //   var libraryMarkers = libraryCoordinates.map(function(object) {
  //     return new google.maps.Marker({
  //       position: {lat: object.lat, lng: object.lng},
  //       title: object.title
  //     });
  //   });

  //   function setMapOnMarkers(map) {
  //     for (var i = 0; i < libraryMarkers.length; i++) {
  //       libraryMarkers[i].setMap(map);
  //     };
  //   };
  // });
}