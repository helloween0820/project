const perfil = document.getElementById("perfil");
const contenido = document.getElementById("contenido");
const complemento = document.getElementById("complemento");
const titulo = document.getElementById("titulo");
const desc = document.getElementById("desc");
const desc1 = document.getElementById("desc1");
const desc2 = document.getElementById("desc2");
const desc3 = document.getElementById("desc3");
const desc4 = document.getElementById("desc4");
const sistemas1 = document.getElementById("sistemas1");
const sistemas2 = document.getElementById("sistemas2");
const sistemas3 = document.getElementById("sistemas3");
const links = document.getElementById("links");

sistemas1.style.display = "none";
sistemas2.style.display = "none";
sistemas3.style.display = "none";

const textos = {
  perfil: {
    titulo: "perfil",
    desc: "aplicar el proceso de desarrollo de soluciones informaticas: evaluacion, gestión, planificacion, analisis, diseño, implantación, matenimiento, control y mercadeo. Definir y conceptualizar modelos y comportamientos de sistemas complejos, a partir de las teorías de las ciencias básicas y de la computación orientada al desarrollo de software. Participar en grupos interdisciplinarios de investigación y campo laboral, asumiendo una actitud de liderazgo, crítica, científica y ética, para desarrollar proyectos informáticos y de comunicaciones utilizando nuevas tecnologías.  ",
  },
  contenido: {
    titulo: "contenido",
    desc: "<li>ingenieria sistemas es la carrera del futuro.</li> <li>El programa de Ingeniería de Sistemas y Computación tiene como propósito la formación de profesionales capaces de interactuar con su entorno en el medio social, político y económico. Este ingeniero debe adquirir una preparación en el quehacer científico, tanto en el conocimiento de las ciencias básicas, como en el campo investigativo, para producir conocimiento y aplicarlo en el campo de los sistemas y la computación.</li> <li>Formar profesionales íntegros en ingeniería de sistemas y computación, capaces de proveer soluciones enmarcadas en conceptos de calidad a problemas del entorno, aplicando técnicas, métodos y herramientas acordes con los avances de la informática.</li><li>El programa de Ingeniería de Sistemas y Computación tiene como propósito la formación de profesionales capaces de interactuar con su entorno en el medio social, político y económico. Este ingeniero debe adquirir una preparación en el quehacer científico, tanto en el conocimiento de las ciencias básicas, como en el campo investigativo, para producir conocimiento y aplicarlo en el campo de los sistemas y la computación.</li> <li>la tecnología es la profesión del futuro</li>",
  },
  complemento: {
    titulo: "complemento",
    desc: "por ultimo queda por decir que la ingeniería de sistemas es una carrera que es muy rentable estudiar hoy en dia ya que el medio que mas se utiliza hoy en dia es el internet ya que es la forma por medio donde nos comunicamos a través de paginas web que se desarrollan mediante desarrolladores.  ",
  },
  links: {
    titulo: "Links",
    desc: '<li><a href="http://www.pedagogica.edu.co/">universidad pedagogica</a></li> <li><a href="http://www.uptc.edu.co/facultades/f_ingenieria/pregrado/sistemas/inf_general/#">ingenieria de sistemas y computación</a></li>',
  },
};

perfil.addEventListener("click", () => {
  titulo.innerHTML = textos.perfil.titulo;
  desc.innerHTML = textos.perfil.desc;
  sistemas1.style.display = "block";
  sistemas2.style.display = "none";
  sistemas3.style.display = "none";
});

contenido.addEventListener("click", () => {
  titulo.innerHTML = textos.contenido.titulo;
  desc.innerHTML = textos.contenido.desc;
  sistemas1.style.display = "none";
  sistemas2.style.display = "block";
  sistemas3.style.display = "none";
});

complemento.addEventListener("click", () => {
  titulo.innerHTML = textos.complemento.titulo;
  desc.innerHTML = textos.complemento.desc;
  sistemas1.style.display = "none";
  sistemas2.style.display = "none";
  sistemas3.style.display = "block";
});
links.addEventListener("click", () => {
  titulo.innerHTML = textos.links.titulo;
  desc.innerHTML = textos.links.desc;
  sistemas1.style.display = "none";
  sistemas2.style.display = "none";
  sistemas3.style.display = "none";
});
