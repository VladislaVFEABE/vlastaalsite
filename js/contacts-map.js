document.addEventListener('DOMContentLoaded', function () {
  const addressItems = document.querySelectorAll('#custom-address-list li');
  const modal = document.getElementById('custom-modal-window');
  const closeBtn = document.querySelector('.custom-modal-close-btn');
  const mapContainer = document.getElementById('custom-map-container');

  let map;
  let geocoder;

  function showMapForAddress(address) {
    if (!geocoder) {
      geocoder = new google.maps.Geocoder();
    }

    geocoder.geocode({ address: address }, function (results, status) {
      if (status === 'OK') {
        const location = results[0].geometry.location;

        // Очистка контейнера перед повторной инициализацией
        mapContainer.innerHTML = '';
        map = new google.maps.Map(mapContainer, {
          zoom: 16,
          center: location,
        });

        new google.maps.Marker({
          map: map,
          position: location,
        });

        modal.classList.remove('custom-modal-hidden');
      } else {
        alert('Не удалось найти адрес: ' + status);
      }
    });
  }

  addressItems.forEach((item) => {
    item.addEventListener('click', () => {
      const address = item.getAttribute('data-address');
      showMapForAddress(address);
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('custom-modal-hidden');
    mapContainer.innerHTML = ''; // Очищаем карту при закрытии
  });

  // Закрытие по клику вне модального окна
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('custom-modal-hidden');
      mapContainer.innerHTML = '';
    }
  });
});
