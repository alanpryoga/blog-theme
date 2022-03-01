function Home() {
  return `<div id="homePage" class="container">
    <div class="row">
      <div class="col-6">
        <img src="https://dummyimage.com/250x250/dddddd/222222.jpg" alt="Profile Picture" class="center">
      </div>
      <div class="col-6">
        <h1 class="font-bold">Ade Syahlan Prayoga</h1>
        <p class="font-light">Software Engineer</p>
        <div>
          <a href="#">linkedin</a>
          <a href="#">facebook</a>
          <a href="#">twitter</a>
          <a href="#">github</a>
        </div>
      </div>
    </div>
  </div>`;
}

function About() {
  return '<div>Tentang</div>';
}

function Portfolios() {
  return '<div>Portofolio</div>';
}

function Contact() {
  return '<div>Kontak</div>';
}

// routes definition
const routes = {
  '/'           : {title: 'Ade Syahlan Prayoga', render: Home},
  '/about'      : {title: 'Tentang Saya', render: About},
  '/portfolios' : {title: 'Portofolio', render: Portfolios},
  '/blog'       : {title: 'Tulisan', externalLink: 'https://blog.alanpryoga.com'},
  '/contact'    : {title: 'Kontak', render: Contact},
};

// dispatcher function
function dispatch(defaultRoute) {
  let app  = document.getElementById('app');
  let view = routes[defaultRoute];

  if (view) {
    document.title = view.title;

    if (view.render != undefined) {
      app.innerHTML = view.render();
    } else {
      window.open(view.externalLink, '_blank');
    }
  } else {
    dispatch('/404');
  }
}

// handle event when document loaded
window.addEventListener('DOMContentLoaded', dispatch('/'));

// handle event when navigation link clicked
const navLinks = document.querySelectorAll('nav a');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function (e) {
    e.preventDefault();

    let route = this.dataset.route;
    dispatch(route);
  });
}
