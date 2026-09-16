Js y data en caso de tener información de los cuadros:
id: 1,
    titulo: "Atardecer en el Mar",
    tecnica: "Óleo sobre lienzo",
    anio: 2024,
    medidas: "80x60 cm",
    imagen: "img/prueba1.webp",
    descripcion: "Una exploración de tonos cálidos y luz natural."


    <article class="tarjeta">
        <div class="tarjeta-imagen">
          <img src="${cuadro.imagen}" alt="${cuadro.titulo}" loading="lazy">
        </div>
        <div class="tarjeta-info">
          <h2>${cuadro.titulo}</h2>
          <p class="meta">${cuadro.tecnica} | ${cuadro.anio}</p>
          <p class="medidas">${cuadro.medidas}</p>
          <p class="descripcion">${cuadro.descripcion}</p>
        </div>
      </article>


  para filtrar cuadros premiados

  // Importamos LA MISMA lista que usamos en la galería principal
import { misCuadros } from './data.js';

// 1. Filtramos SOLO los que tienen el atributo "premiado"
const obrasPremiadas = misCuadros.filter(cuadro => cuadro.premiado);

// 2. Filtramos SOLO los que tienen el atributo "imagenDetalle" (Assemblage)
const obrasExperimentales = misCuadros.filter(cuadro => cuadro.imagenDetalle);

// Y a partir de aquí, el código que ya teníamos para dibujarlos funciona igual:
const premiosContenedor = document.getElementById('premios-contenedor');
obrasPremiadas.forEach(obra => {
  premiosContenedor.innerHTML += `
    <article class="obra-hero">
      <img src="${obra.imagen}" class="img-clickeable">
      <div class="obra-hero-info">
        <div class="premio-insignia">🏆 ${obra.premiado}</div>
        <h3>${obra.titulo}</h3>
      </div>
    </article>
  `;
});




prueba de cuentas