let map;

function initMap() {
  const uluru = { lat: 10.6415174, lng: 106.6586135 };
  const uluruSecond = { lat: 10.6367181, lng: 106.6609428 };
  const mapElement = document.getElementById("js-map");
  const map = new google.maps.Map(mapElement, {
    zoom: 16,
    center: uluru,
  });

  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });

  const secondMarker = new google.maps.Marker({
    position: uluruSecond,
    map: map,
  });
}
