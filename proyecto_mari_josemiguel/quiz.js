const form = document.getElementById("quizForm");
const result = document.getElementById("result");

function recommendedProject(scores) {
  const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return entries[0][0];
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const scores = {
    videojuego: 0,
    animacion: 0,
    web: 0,
  };

  const answers = new FormData(form);

  for (const [, value] of answers.entries()) {
    if (scores[value] !== undefined) scores[value] += 1;
  }

  const project = recommendedProject(scores);
  let title = "";
  let text = "";

  if (project === "videojuego") {
    title = "Te conviene hacer un videojuego sencillo";
    text = "Tienes perfil de reto, interacción y resultado inmediato. Empieza con un juego pequeño y divertido.";
  } else if (project === "animacion") {
    title = "Te conviene hacer una animación bonita";
    text = "Te va mejor algo visual, relajado y llamativo. Prueba con movimientos suaves y colores agradables.";
  } else {
    title = "Te conviene hacer una página web de curiosidades";
    text = "Te gusta organizar ideas y mostrar contenido de forma clara. Una web personalizada te quedará genial.";
  }

  result.classList.remove("hidden");
  result.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
});
