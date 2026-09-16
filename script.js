// Importamos los datos desde nuestro archivo data.js
import { misCuadros } from './data.js';

const galeriaContenedor = document.getElementById('galeria');
const inputBuscar = document.getElementById('buscar-titulo');
const selectTecnica = document.getElementById('filtro-tecnica');
const selectGenero = document.getElementById('filtro-genero');


function cargarGaleria(cuadros) {
  galeriaContenedor.innerHTML = '';

  if (cuadros.length === 0) {
    galeriaContenedor.innerHTML = '<p class="sin-resultados">No se encontraron obras con estos filtros.</p>';
    return;
  }
  cuadros.forEach(cuadro => {
    const tituloMostrar = cuadro.titulo || "Sin título";
    const tarjetaHTML = `
      <article class="tarjeta">
        <div class="tarjeta-imagen">
          <img src="${cuadro.imagen}" alt="${cuadro.titulo}" loading="lazy">
        </div>
        <div class="tarjeta-info">
          <h2>${tituloMostrar}</h2>
          <p class="meta">${cuadro.tecnica} | ${cuadro.genero}</p>
        </div>
      </article>
    `;

    galeriaContenedor.innerHTML += tarjetaHTML;
  });
}

function aplicarFiltros() {
  const textoBusqueda = inputBuscar.value.toLowerCase();
  const tecnicaSeleccionada = selectTecnica.value;
  const generoSeleccionado = selectGenero.value;

  const cuadrosFiltrados = misCuadros.filter(cuadro => {
    
    const tituloReal = cuadro.titulo ? cuadro.titulo.toLowerCase() : "sin título";
    const coincideTitulo = tituloReal.includes(textoBusqueda);

    const coincideTecnica = tecnicaSeleccionada === 'todas' || cuadro.tecnica === tecnicaSeleccionada;

    const coincideGenero = generoSeleccionado === 'todos' || cuadro.genero === generoSeleccionado;

    return coincideTitulo && coincideTecnica && coincideGenero;
  });

  cargarGaleria(cuadrosFiltrados);
}

inputBuscar.addEventListener('input', aplicarFiltros); 
selectTecnica.addEventListener('change', aplicarFiltros);
selectGenero.addEventListener('change', aplicarFiltros);

cargarGaleria(misCuadros);


const modal = document.getElementById('modal');
const imagenModal = document.getElementById('imagen-modal');
const btnCerrar = document.getElementById('btn-cerrar');

galeriaContenedor.addEventListener('click', (evento) => {
  if (evento.target.tagName === 'IMG') {
    const rutaImagen = evento.target.src;
    
    imagenModal.src = rutaImagen;
    
    modal.classList.add('activo');
    
    // Quitar el scroll de la página de fondo
    document.body.style.overflow = 'hidden'; 
  }
});

btnCerrar.addEventListener('click', () => {
  modal.classList.remove('activo');
  
  // Devolver el scroll a la página
  document.body.style.overflow = 'auto';
});