import { trayectoria, obrasPremiadas, obrasExperimentales } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. DIBUJAR LA LÍNEA DE TIEMPO
  const timelineContenedor = document.getElementById('timeline-contenedor');
  trayectoria.forEach(item => {
    timelineContenedor.innerHTML += `
      <div class="timeline-item">
        <div class="timeline-anio">${item.anio}</div>
        <div class="timeline-info">
          <h3>${item.evento}</h3>
          <span class="timeline-premio">${item.resultado}</span>
        </div>
      </div>
    `;
  });

  // 2. DIBUJAR LOS CUADROS PREMIADOS (Gran formato)
  const premiosContenedor = document.getElementById('premios-contenedor');
  obrasPremiadas.forEach(obra => {
    premiosContenedor.innerHTML += `
      <article class="obra-hero">
        <img src="${obra.imagen}" alt="${obra.titulo}" class="img-clickeable" loading="lazy">
        <div class="obra-hero-info">
          <div class="premio-insignia">🏆 ${obra.premio}</div>
          <h3>${obra.titulo}</h3>
          <p class="meta">${obra.tecnica}</p>
          <p class="descripcion">${obra.descripcion}</p>
        </div>
      </article>
    `;
  });

  // 3. DIBUJAR ARTE EXPERIMENTAL (Con efecto de textura al pasar el ratón)
  const experimentalContenedor = document.getElementById('experimental-contenedor');
  obrasExperimentales.forEach(obra => {
    experimentalContenedor.innerHTML += `
      <article class="tarjeta-masonry">
        <div class="imagen-dual">
          <img src="${obra.imagen}" alt="${obra.titulo} (General)" class="img-normal img-clickeable" loading="lazy">
          <img src="${obra.imagenDetalle}" alt="${obra.titulo} (Detalle)" class="img-detalle img-clickeable" loading="lazy">
        </div>
        <div class="tarjeta-info">
          <h2>${obra.titulo}</h2>
          <p class="meta">${obra.tecnica}</p>
          <p class="descripcion">${obra.descripcion}</p>
        </div>
      </article>
    `;
  });

  const modal = document.getElementById('modal');
  const imagenModal = document.getElementById('imagen-modal');
  const btnCerrar = document.getElementById('btn-cerrar');

  document.body.addEventListener('click', (evento) => {
    // Si la imagen tiene la clase 'img-clickeable', la abrimos en el modal
    if (evento.target.classList.contains('img-clickeable')) {
      imagenModal.src = evento.target.src;
      modal.classList.add('activo');
      document.body.style.overflow = 'hidden'; 
    }
  });

  btnCerrar.addEventListener('click', () => {
    modal.classList.remove('activo');
    document.body.style.overflow = 'auto';
  });
});