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
    
    // Filtro 1: Título (Protegemos los que no tienen título)
    const tituloReal = cuadro.titulo ? cuadro.titulo.toLowerCase() : "sin título";
    const coincideTitulo = tituloReal.includes(textoBusqueda);

    // Filtro 2: Técnica
    const coincideTecnica = tecnicaSeleccionada === 'todas' || cuadro.tecnica === tecnicaSeleccionada;

    // Filtro 3: Género
    const coincideGenero = generoSeleccionado === 'todos' || cuadro.genero === generoSeleccionado;

    // Solo mostramos el cuadro si pasa los 3 filtros a la vez
    return coincideTitulo && coincideTecnica && coincideGenero;
  });

  // Dibujamos la galería con los cuadros que pasaron el filtro
  cargarGaleria(cuadrosFiltrados);
}

// --- 3. EVENTOS (Escuchamos cuándo el usuario usa los filtros) ---
inputBuscar.addEventListener('input', aplicarFiltros); // Se activa cada vez que tecleas
selectTecnica.addEventListener('change', aplicarFiltros);
selectGenero.addEventListener('change', aplicarFiltros);

cargarGaleria(misCuadros);

// 👇 NUEVO: Lógica del Modal 👇

// 1. Seleccionamos los elementos del Modal
const modal = document.getElementById('modal');
const imagenModal = document.getElementById('imagen-modal');
const btnCerrar = document.getElementById('btn-cerrar');

// 2. Escuchamos los clics dentro de toda la galería
galeriaContenedor.addEventListener('click', (evento) => {
  // Comprobamos si el clic fue exactamente en una etiqueta <IMG>
  if (evento.target.tagName === 'IMG') {
    // Cogemos la ruta (src) de la imagen clickeada
    const rutaImagen = evento.target.src;
    
    // Se la ponemos a la imagen gigante del modal
    imagenModal.src = rutaImagen;
    
    // Mostramos el modal
    modal.classList.add('activo');
    
    // Opcional: quitamos el scroll de la página de fondo
    document.body.style.overflow = 'hidden'; 
  }
});

// 3. Lógica para cerrar el Modal SÓLO con el botón X
btnCerrar.addEventListener('click', () => {
  // Ocultamos el modal
  modal.classList.remove('activo');
  
  // Devolvemos el scroll a la página
  document.body.style.overflow = 'auto';
});