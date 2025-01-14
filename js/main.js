const toggle = document.querySelector('.navbar-toggler');
const navLink = document.querySelectorAll('.nav-link');
toggle.addEventListener('click', () => {
  navLink.forEach(function (nav) {
    nav.style.color = 'white';
    nav.style.textAlign = 'left';
    nav.style.margin = '5px 0px';
  });
});

// Json untuk tampilan restoran
$.getJSON('data/restoran.json', function (data) {
  let restoran = data.restoran;

  $.each(restoran, function (i, data) {
    $('#daftar-restoran').append(`<div class="col-md d-flex justify-content-center">
            <div class="card mt-3 opacity-90" style="width: 18rem">
              <img src="img/restoran/${data.gambar}" class="card-img-top" alt="restoran1" />
              <div class="card-body">
                <h5 class="card-title">${data.nama}</h5>
                
                <p class="card-text">${data.tempat}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><em>${data.deskripsi}</em></li>
              </ul>
              <div class="card-body">
                <button class="btn btn-success m-0" type="button"> Detail </button>
              </div>
            </div>
          </div>`);
  });
});
