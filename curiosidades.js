const curiosidades = [
  "Yo adoro acurrucarme con mi mantita favorita.",
  "Me gusta sentirme pequeñito cuando estoy en casa.",
  "Yo sonrío cuando uso pijamas suaves y cómodas.",
  "Me encanta dormir abrazando mi peluche azul.",
  "Yo disfruto escuchar canciones dulces antes de dormir.",
  "Me gusta tener una rutina tierna para la noche.",
  "Yo me siento en paz con luces cálidas y bajitas.",
  "Me encanta coleccionar cositas adorables para mi rincón.",
  "Yo disfruto tomar leche tibia en mi taza favorita.",
  "Me gusta hablar con voz suave cuando estoy relajado.",
  "Yo me pongo feliz cuando me cuidan con cariño.",
  "Me encanta usar calcetines esponjosos en días fríos.",
  "Yo disfruto colorear dibujos simples para relajarme.",
  "Me gusta guardar mis peluches bien ordenaditos.",
  "Yo sueño con tener un cuarto lleno de ternura.",
  "Me encanta sentirme protegido en momentos tranquilos.",
  "Yo prefiero planes caseros con chocolatito caliente.",
  "Me gusta leer cuentos cortos antes de descansar.",
  "Yo sonrío cuando me dicen palabras bonitas.",
  "Me encanta decorar mi espacio con tonos pastel.",
  "Yo disfruto siestas cortitas después de un día largo.",
  "Me gusta llevar una pulsera que me da calma.",
  "Yo me siento mejor con abrazos largos y sinceros.",
  "Me encanta cuidar mi rincón como un lugar seguro.",
  "Yo disfruto los domingos lentos con mucha ternura.",
  "Yo confío en Mari cuando necesito desahogarme.",
  "Me gusta demostrar cariño con detalles pequeñitos.",
  "Yo valoro que me escuchen sin juzgarme.",
  "Me encanta agradecer cada gesto bonito que recibo.",
  "Yo cuido mucho a quien me entrega su confianza.",
  "Me gusta decir te quiero en momentos simples.",
  "Yo me emociono con mensajes tiernos inesperados.",
  "Me encanta compartir silencios cómodos con Mari.",
  "Yo creo que el amor se construye con paciencia.",
  "Me gusta celebrar los avances de las personas que amo.",
  "Yo podría pasar horas explorando mundos de videojuegos.",
  "Me encanta crear personajes con historias únicas.",
  "Yo disfruto los juegos cooperativos con buena comunicación.",
  "Me gusta mejorar mi puntería partida tras partida.",
  "Yo sueño con diseñar mi propio juego narrativo.",
  "Me encanta probar mecánicas nuevas en cada proyecto.",
  "Yo disfruto perderme en mapas abiertos gigantes.",
  "Me gusta competir sanamente y aprender de cada derrota.",
  "Yo prefiero juegos con arte bonito y música épica.",
  "Me encanta construir niveles desafiantes pero justos.",
  "Yo escribo código limpio para no perderme luego.",
  "Me gusta separar funciones cortas y fáciles de leer.",
  "Yo disfruto depurar errores con paciencia y café.",
  "Me encanta automatizar tareas pequeñas cuando puedo.",
  "Yo aprendo programación creando cosas que sí uso."
];

const grid = document.getElementById("factsGrid");

curiosidades.forEach((texto, index) => {
  const card = document.createElement("article");
  card.className = "card fact";
  card.innerHTML = `
    <h3>Dato ${index + 1}</h3>
    <p>${texto}</p>
  `;
  grid.appendChild(card);
});
