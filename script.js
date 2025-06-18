const phrases = [
  "El conocimiento es poder, pero solo si se comparte.",
  "Cada día es una nueva oportunidad para mejorar.",
  "Aprender a escribir rápido requiere práctica constante.",
  "La lluvia golpeaba el techo con un ritmo relajante.",
  "Nunca es tarde para empezar algo nuevo.",
  "La paciencia es la clave del éxito duradero.",
  "El sol se oculta lentamente tras las montañas.",
  "Caminar por el bosque me llena de energía.",
  "Las palabras pueden construir o destruir.",
  "Hoy es un buen día para escribir sin errores.",
  "La práctica hace al maestro, incluso al mecanografiar.",
  "Siempre hay algo nuevo que aprender.",
  "No te rindas, incluso si cometes errores.",
  "La constancia vence al talento cuando el talento no se esfuerza.",
  "Un café por la mañana y todo parece más fácil.",
  "Cada tecla que presionas te acerca a la perfección.",
  "El viento soplaba fuerte entre los árboles.",
  "La meta está más cerca de lo que crees.",
  "Una mente tranquila produce mejores resultados.",
  "Todo gran logro comenzó con un pequeño paso.",
  "La educación cambia el mundo, tecla por tecla.",
  "Nunca subestimes el poder de una buena práctica.",
  "Escribe como si cada palabra contara.",
  "Los errores son parte del proceso de aprendizaje.",
  "Nada vale más que la disciplina diaria.",
  "Un texto bien escrito refleja una mente clara.",
  "Cada palabra bien tecleada es una victoria.",
  "Las estrellas brillaban intensamente en la noche.",
  "La motivación viene y va, la disciplina permanece.",
  "El mar susurra historias antiguas entre sus olas.",
  "Escribir bien también es una forma de arte.",
  "Las montañas nos enseñan a ser pacientes y fuertes.",
  "La vida es mejor con buena ortografía.",
  "Un hábito diario te convierte en experto.",
  "Las metas grandes se logran con pequeños avances.",
  "Hoy puedes superar tu récord de velocidad.",
  "La música fluye como las palabras bien escritas.",
  "Practicar te libera de depender del corrector.",
  "Una historia bien contada empieza con una palabra.",
  "Respira, concéntrate y deja que tus dedos fluyan.",
  "La velocidad sin precisión no sirve de nada.",
  "El teclado es tu instrumento, úsalo con maestría.",
  "Cuando falles, simplemente vuelve a intentarlo.",
  "Todo se logra con tiempo y dedicación.",
  "Teclear rápido es útil en cualquier profesión.",
  "No corras, pero no te detengas nunca.",
  "Un texto claro refleja una mente clara.",
  "Hoy tienes la oportunidad de escribir mejor.",
  "Escribe como si alguien estuviera leyendo.",
  "Nada supera a una mente enfocada.",
  "Los detalles marcan la diferencia en todo.",
  "Cada error corregido es una mejora personal.",
  "Un minuto de práctica vale más que mil teorías.",
  "Domina el teclado y dominarás tus ideas.",
  "El silencio ayuda a concentrarse y rendir más.",
  "Tus dedos pueden volar si tú se los permites.",
  "Todo logro comienza con una decisión.",
  "No temas a los errores, abrázalos y aprende.",
  "Los buenos hábitos se crean escribiendo a diario.",
  "El mundo necesita más personas que escriban bien.",
  "Una buena redacción empieza con una buena práctica.",
  "El teclado no muerde, así que adelante.",
  "Cada letra correcta fortalece tu confianza.",
  "Escribir bien es también pensar mejor.",
  "Nada reemplaza al esfuerzo continuo.",
  "Los retos grandes se enfrentan letra por letra.",
  "Respira hondo y no te apresures.",
  "La claridad es la cortesía del escritor.",
  "Un texto sin errores es música para los ojos.",
  "El orden de las palabras importa más de lo que crees.",
  "Todo avance merece celebración, por pequeño que sea.",
  "No pares hasta que estés orgulloso.",
  "La constancia transforma lo difícil en fácil.",
  "El ritmo constante supera la prisa vacía.",
  "El camino del aprendizaje es infinito.",
  "La precisión es una forma de respeto.",
  "Un buen texto requiere paciencia y práctica.",
  "Escribir rápido es útil, escribir bien es esencial.",
  "Cada frase bien escrita vale la pena.",
  "Los buenos escritores también cometen errores.",
  "No hay progreso sin desafío.",
  "Escribe con intención, no solo por velocidad.",
  "Practica hoy lo que quieres dominar mañana.",
  "Tu mejor versión está a una frase de distancia.",
  "La ortografía es música escrita.",
  "Un teclado puede ser tu mejor herramienta.",
  "El hábito hace al experto.",
  "No importa cuán lento vayas, sigue avanzando.",
  "Las palabras son poderosas, úsalas con sabiduría.",
  "La perfección está en los detalles.",
  "La calma te lleva más lejos que el apuro.",
  "Las letras bien escritas abren puertas.",
  "Confía en tu proceso, no en la perfección inmediata.",
  "El teclado es un campo de entrenamiento diario.",
  "El esfuerzo silencioso produce grandes resultados.",
  "No escribes para ser perfecto, sino para mejorar.",
  "Cada sesión de práctica es una inversión.",
  "La mente y las manos deben trabajar en armonía.",
  "El progreso se mide en letras, no en errores.",
  "Los grandes escritores también comenzaron con errores.",
  "Hoy es un gran día para escribir mejor.",
  "Una mente enfocada produce manos veloces.",
  "La dedicación convierte lo imposible en rutina.",
  "Escribir bien te diferencia en el mundo digital.",
  "La mecánica de escribir se domina con amor y repetición."
];


let fullText = '';
let currentIndex = 0;
let correctChars = 0;
let totalCharsTyped = 0;
let startTime = null;
let timerInterval = null;
let countdown = 60;

const exerciseDisplay = document.getElementById('exerciseDisplay');
const inputChar = document.getElementById('inputChar');
const ppmEl = document.getElementById('ppm');
const accuracyEl = document.getElementById('accuracy');
const feedback = document.getElementById('feedback');
const restartBtn = document.getElementById('restartBtn');
const durationSelect = document.getElementById('durationSelect');
const timerEl = document.getElementById('timer');

const finalPPM = document.getElementById('finalPPM');
const finalAccuracy = document.getElementById('finalAccuracy');
const finalMessage = document.getElementById('finalMessage');
const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));

function generateLongText() {
  let result = '';
  while (result.length < 800) {
    const random = phrases[Math.floor(Math.random() * phrases.length)];
    result += ' ' + random;
  }
  return result.trim();
}

function resetTest() {
  clearInterval(timerInterval);
  countdown = parseInt(durationSelect.value) * 60;
  updateTimerDisplay();

  startTime = null;
  correctChars = 0;
  totalCharsTyped = 0;
  currentIndex = 0;
  inputChar.value = '';
  inputChar.disabled = false;
  inputChar.focus();

  fullText = generateLongText();
  renderText();

  ppmEl.textContent = '0';
  accuracyEl.textContent = '100%';
  feedback.textContent = 'Presiona una tecla correcta para comenzar la prueba.';
  feedback.className = 'alert alert-info text-center';
}

function updateTimerDisplay() {
  const mins = String(Math.floor(countdown / 60)).padStart(2, '0');
  const secs = String(countdown % 60).padStart(2, '0');
  timerEl.textContent = `${mins}:${secs}`;
}

function startCountdown() {
  timerInterval = setInterval(() => {
    countdown--;
    updateTimerDisplay();

    if (countdown <= 0) {
      clearInterval(timerInterval);
      finishTest();
    }
  }, 1000);
}

function renderText() {
  exerciseDisplay.innerHTML = '';
  for (let i = 0; i < fullText.length; i++) {
    const span = document.createElement('span');
    span.textContent = fullText[i];
    span.classList.add('char');
    exerciseDisplay.appendChild(span);
  }
}

function updateStats() {
  const elapsedMinutes = (new Date() - startTime) / 60000;
  const ppm = Math.round((correctChars / 5) / elapsedMinutes);
  const accuracy = (correctChars / totalCharsTyped) * 100;

  ppmEl.textContent = isNaN(ppm) ? '0' : ppm;
  accuracyEl.textContent = isNaN(accuracy) ? '100%' : accuracy.toFixed(2) + '%';

  return { ppm, accuracy };
}

function getMotivationMessage(ppm) {
  if (ppm < 10) return '¡Vamos! Todos empezamos desde cero. 💪';
  if (ppm < 20) return 'Estás calentando motores. ¡Sigue así!';
  if (ppm < 30) return '¡Bien hecho! Poco a poco vas subiendo.';
  if (ppm < 40) return '¡Estás en forma! Tu práctica está rindiendo frutos.';
  if (ppm < 50) return '¡Increíble! Escribes más rápido que la mayoría.';
  if (ppm < 60) return '¡Wow! Estás en la élite. Sigue subiendo.';
  return '¡Eres una máquina de escribir humana! 🧠⌨️';
}

inputChar.addEventListener('keydown', (e) => {
  if (!startTime) {
    startTime = new Date();
    startCountdown();
  }

  const expectedChar = fullText[currentIndex];
  const typedChar = e.key;

  if (typedChar.length === 1) {
    e.preventDefault();
    totalCharsTyped++;

    const chars = exerciseDisplay.querySelectorAll('.char');

    if (typedChar === expectedChar) {
      chars[currentIndex].classList.remove('incorrect');
      chars[currentIndex].classList.add('correct');
      correctChars++;
      currentIndex++;
    } else {
      chars[currentIndex].classList.remove('correct');
      chars[currentIndex].classList.add('incorrect');
    }

    updateStats();
  }
});

function finishTest() {
  inputChar.disabled = true;
  const { ppm, accuracy } = updateStats();

  finalPPM.textContent = ppm;
  finalAccuracy.textContent = accuracy.toFixed(2) + '%';
  finalMessage.textContent = getMotivationMessage(ppm);
  resultModal.show();
}

restartBtn.addEventListener('click', resetTest);
resetTest();
