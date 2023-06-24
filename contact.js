$('.animated-text').addClass('animated-text');

function toggleNavigation() {
    var navigation = document.querySelector('.navigation');
    navigation.classList.toggle('toggled');
  } 

  var map = L.map('mapContainer').setView([40.397662, 49.875026], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(map);

        L.marker([40.397662, 49.875026]).addTo(map);