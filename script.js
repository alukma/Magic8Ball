respuesta = [

    "En mi opinión, sí",
    "Es cierto",
    "Es decididamente así",
    "Probablemente",
    "Buen pronóstico",
    "Todo apunta a que sí",
    "Sin duda",
    "Sí",
    "Sí - definitivamente",
    "Debes confiar en ello",
    "Respuesta vaga, vuelve a intentarlo",
    "Pregunta en otro momento",
    "Será mejor que no te lo diga ahora",
    "No puedo predecirlo ahora",
    "Concéntrate y vuelve a preguntar",
    "No cuentes con ello",
    "Mi respuesta es no",
    "Mis fuentes me dicen que no",
    "Las perspectivas no son buenas",
    "Muy dudoso",
]
function responder() {
    let pregunta = document.getElementById('pregunta');

    if (pregunta.value == "") {
        alert("ingrese una pregunta")
    } else {
        let numero = Math.floor(Math.random() * 20);
        let contenedor = document.getElementById('respuesta');
        contenedor.innerText = respuesta[numero];
        animar()
    }
    pregunta.value = ""
}
function animar() {
    let bola = document.getElementById('bola');
    let fondo = document.getElementById('fondo');
    let texto = document.getElementById('texto')
    bola.classList.add('shake')
    setTimeout(function () { bola.classList.remove('shake'); }, 1000)
    fondo.style.fill="purple"
    texto.innerHTML = ""
    
}
