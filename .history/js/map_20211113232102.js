let map;

function initMap() {
  const uluru = { lat: 10.6415174, lng: 106.6586135 };
  const mapElement = document.getElementById("js-map");
  const map = new google.maps.Map(mapElement, {
    zoom: 20,
    center: uluru,
  });

  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

// function initMap() {
//   const uluru = { lat: -34.397, lng: 150.644 };
//   const mapElement = document.getElementById("js-map");
//   const map = new google.maps.Map(mapElement, {
//     zoom: 4,
//     center: uluru,
//   });

//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }
