function initMap() {
  var element = document.getElementById('map');
  var options = {
    zoom: 16,
    center: {
      lat: 59.935422,
      lng: 30.320494
    }
  };

  var myMap = new google.maps.Map(element, options);

  var marker = new google.maps.Marker({
    position: {
      lat: 59.936144,
      lng: 30.320864
    },
    map: myMap,
    icon: "img/map-marker.png"
  });
}
