const toggle = document.querySelector('.navbar-toggler');
const navLink = document.querySelectorAll('.nav-link');
toggle.addEventListener('click', () => {
  navLink.forEach(function (nav) {
    nav.style.color = 'white';
    nav.style.textAlign = 'left';
    nav.style.margin = '5px 0px';
  });
});

// script untuk slide makanan
const foodGallery = document.getElementById('foodGallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
  foodGallery.scrollBy({ left: -300, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  foodGallery.scrollBy({ left: 300, behavior: 'smooth' });
});

// Json untuk tampilan restoran
$.getJSON('data/restoran.json', function (data) {
  let restoran = data.restoran;

  $.each(restoran, function (i, data) {
    $('#daftar-restoran').append(`<div class="col-md d-flex justify-content-center">
            <div class="card mt-3 opacity-90" style="width: 18rem">
              <img src="img/restoran/${data.gambar}" class="card-img-top gambar-makanan" alt="restoran1" />
              <div class="card-body">
                <h5 class="card-title">${data.nama}</h5>
                
                <p class="card-text">${data.tempat}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><em>${data.deskripsi}</em></li>
              </ul>
              <div class="card-body">
                <button class="btn btn-success " type="button"> Detail </button>
              </div>
            </div>
          </div>`);
  });
});

// Json untuk tampilan makanan
$.getJSON('data/restoran.json', function (data) {
  let makanan = data.restoran;
  console.log(makanan);

  $.each(makanan, function (i, data) {
    $('#foodGallery').append(`<div class="food-item me-3">
            <img src="img/restoran/${data.gambar}" class="gambar-makanan rounded" style="width: 350px; height: 250px; object-fit: cover" alt="Mendoan" />
            <p class=" mt-2 fw-bold text-white">Mendoan</p>
            
          </div>`);
  });
});
