const data = [
  {
    id: 1,
    title: 'Smart TV 4K UHD 43" LG 43UP7750PSB',
    img: "tvLG.jpg",
    price: 109999,
    expired: false,
    details: {
      description: `LG es innovación y eso se ve en cada uno de sus productos tecnológicos, pensados especialmente para que tu familia y vos disfruten mucho más de la vida. Tener un televisor LG es aprovechar la más alta calidad del mercado.
      Con el Smart TV 43UP7750 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.`,
      features: [
        "Su resolución es 4K.",
        "Tecnología HDR para una calidad de imagen mejorada.",
        "Modo de sonido: AI Sound Pro, AI Sound, Clear Voice, Ultra Surround.",
        "Con YouTube, Netflix, HBO Go, Apple TV, Spotify, Movistar Play, Zapping TV, Disney+.",
        "Sistema operativo webOS 6.0.",
        "Dimensiones: 967mm de ancho, 564mm de alto, 57.1mm de profundidad.",
      ],
    },
    stock: 10,
    categoria: "tv",
  },
  {
    id: 2,
    title: "Notebook Dell Inspiron 3515",
    img: "notebookDell.jpg",
    price: 149000,
    expired: false,
    details: {
      description: `Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podrás hacerlo de forma segura desde cualquier lugar y en cualquier momento.`,
      features: [
        "Procesador AMD Ryzen 5.",
        "Memoria RAM de 8GB.",
        "Pantalla LCD de 15.5",
        "Es antirreflejo.",
        "Placa de video AMD Radeon RX Vega 8 (Ryzen 2000/3000).",
        "Conexión wifi y bluetooth.",
      ],
    },
    stock: 5,
    categoria: "notebooks",
  },
  {
    id: 3,
    title: 'Smart TV 4K UHD Samsung 50" UN50AU7000',
    img: "tvSamsung.jpg",
    price: 193999,
    expired: false,
    details: {
      description: `Samsung es reconocida a nivel mundial como una empresa líder en la industria tecnológica. Todos sus productos son diseñados con una calidad superior y pensados para contribuir a un futuro mejor. Por eso, va a hacer que disfrutes de una experiencia visual incomparable.
      Con el Smart TV UN50AU7000G vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.`,
      features: [
        "Su resolución es 4K.",
        "Tecnología HDR para una calidad de imagen mejorada.",
        "Modo de sonido: Dolby Digital Plus, Q-Symphony.",
        "Tiene función Screen Share.",
        "Control LG Magic Remote no incluido.",
        "Sistema operativo Tizen.",
        "Dimensiones: 1116.8mm de ancho, 644.2mm de alto, 59.9mm de profundidad.",
      ],
    },
    stock: 10,
    categoria: "tv",
  },
  {
    id: 4,
    title: "Notebook Lenovo V-Series ADA iron gray",
    img: "notebookLenovo.jpg",
    price: 50000,
    expired: false,
    details: {
      description: `Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podrás hacerlo de forma segura desde cualquier lugar y en cualquier momento.`,
      features: [
        "Procesador AMD Athlon Gold.",
        "Memoria RAM de 4GB.",
        "Resolución de 1920x1080 px.",
        "Es antirreflejo.",
        "Placa de video AMD Radeon RX Vega 3.",
        "Conexión wifi y bluetooth.",
      ],
    },
    stock: 7,
    categoria: "notebooks",
  },
  {
    id: 5,
    title: "Celular Samsung Galaxy A03 128 GB Black",
    img: "celularSamsung.jpg",
    price: 49999,
    expired: false,
    details: {
      description: `Doble cámara y más detalles
        Sus 2 cámaras traseras de 48 Mpx/2 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo.
        Además, el dispositivo cuenta con cámara frontal de 5 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.
        Más para ver con su pantalla PLS de 6.5", disfrutá de colores intensos y mayor nitidez en todos tus contenidos.`,
      features: [
        "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
        'Pantalla PLS de 6.5".',
        "Tiene 2 cámaras traseras de 48Mpx/2Mpx.",
        "Cámara delantera de 5Mpx..",
        "Batería de 5000mAh.",
        "Memoria interna de 128GB.",
      ],
    },
    stock: 4,
    categoria: "celulares",
  },
  {
    id: 6,
    title: "Moto G52 128GB charcoal grey 6 GB RAM",
    img: "celularMotorola.jpg",
    price: 59999,
    expired: false,
    details: {
      description: `Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.`,
      features: [
        "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
        'Pantalla AMOLED de 6.6".',
        "Tiene 3 cámaras traseras de 50Mpx/8Mpx/2Mpx.",
        "Cámara delantera de 16Mpx.",
        "Procesador Snapdragon 680 Octa-Core de 2.4GHz con 6GB de RAM.",
        "Batería de 5000mAh.",
        "Memoria interna de 128GB.",
        "Con reconocimiento facial y sensor de huella dactilar.",
      ],
    },
    stock: 3,
    categoria: "celulares",
  },
];

export function getProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 2000);
  });
}

export function getProducto(productoId) {
  return new Promise((resolve, reject) => {
    let producto = data.find((producto) => {
      return producto.id === Number(productoId);
    });

    if (producto != undefined) {
      setTimeout(() => resolve(producto), 2000);
    } else {
      setTimeout(() => reject("El producto no existe!"), 2000);
    }
  });
}

export function getProductosByCategory(categoriaId) {
  return new Promise((resolve, reject) => {
    let productosByCategory = data.filter((producto) => {
      return producto.categoria === categoriaId;
    });
    if (productosByCategory.length > 0) {
      setTimeout(() => resolve(productosByCategory), 2000);
    } else {
      setTimeout(() => reject("Los productos no existen!"), 2000);
    }
  });
}
