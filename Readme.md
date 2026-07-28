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