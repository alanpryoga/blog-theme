function Home() {
  return '<div>Beranda</div>';
}

function About() {
  return '<div>Tentang</div>';

}

function Blog() {
  return '<div>Tulisan</div>';

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
  '/blog'       : {title: 'Tulisan', render: Blog},
  '/portfolios' : {title: 'Portofolio', render: Portfolios},
  '/contact'    : {title: 'Kontak', render: Contact},
};

// dispatcher function
function dispatch(defaultRoute) {
  let app  = document.getElementById('app');
  let view = routes[defaultRoute];

  if (view) {
    document.title = view.title;
    app.innerHTML  = view.render();
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
