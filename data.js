// Exportamos la lista para poder usarla en script.js
export const misCuadros = [
  {
    id: 1,
    tecnica: "Óleo",
    genero: "Paisaje",
    imagen: "img/Cuadro1.jpg"
  },
  {
    id: 2,
    tecnica: "Acrílico",
    genero: "Abstracto",
    imagen: "img/Cuadro2.jpg"
  },
  {
    id: 3,
    titulo: "Naturaleza Muerta",
    tecnica: "Acuarela",
    genero: "Bodegón",
    imagen: "img/Cuadro3.jpg"
  },
  {
    id: 4,
    titulo: "Naturaleza Muerta",
    tecnica: "Acuarela",
    genero: "Bodegón",
    imagen: "img/Cuadro4.jpg"
  },
];

// Torneos y exposiciones
export const trayectoria = [
  { anio: "2024", evento: "Certamen Nacional de Pintura Contemporánea", resultado: "Primer Premio" },
  { anio: "2023", evento: "Exposición Colectiva 'Ecos del Papel' en Galería Central", resultado: "Expositor principal" },
  { anio: "2021", evento: "Concurso de Jóvenes Talentos en Artes Plásticas", resultado: "Mención de Honor" }
];

// Cuadros Premiados
export const obrasPremiadas = [
  {
    id: 101,
    titulo: "El Silencio de la Forma",
    premio: "Primer Premio - Certamen Nacional 2024",
    tecnica: "Óleo sobre lienzo",
    imagen: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&w=1200&q=80",
    descripcion: "Esta obra fue reconocida por su atrevida exploración del vacío y la densidad. El jurado destacó la fuerza del contraste cromático y la técnica empleada en las sombras."
  }
];

// Otras obras 
export const obrasExperimentales = [
  {
    id: 201,
    titulo: "Ciudad Fragmentada",
    tecnica: "Assemblage sobre madera",
    // Foto general de la obra
    imagen: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
    // Foto de DETALLE (textura/relieve) que se verá al pasar el ratón
    imagenDetalle: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=600&q=80",
    descripcion: "Composición creada a partir de recortes de prensa antigua y piezas metálicas encontradas."
  },
  {
    id: 202,
    titulo: "Texturas del Alma",
    tecnica: "Collage y papel maché",
    imagen: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=600&q=80",
    imagenDetalle: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    descripcion: "Exploración tridimensional del papel, generando relieves que cambian con la luz."
  }
];