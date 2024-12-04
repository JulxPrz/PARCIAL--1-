window.onscroll = function(){

    const scroll = document.documentElement.scrollTop;
    console.log(scroll)

    const header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if (scroll < 20){
        header.classList.remove('nav_mod');
    }

}


// Asistente Virtual: Mostrar/Ocultar preguntas
document.getElementById('assistant-icon').addEventListener('click', () => {
    const questions = document.getElementById('assistant-questions');
    questions.classList.toggle('hidden'); // Alterna la visibilidad de las preguntas
});

// Opcional: Manejar clic en las preguntas
document.querySelectorAll('.question').forEach(button => {
    button.addEventListener('click', (event) => {
        alert(`Seleccionaste: ${event.target.textContent}`);
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Verificar y aplicar el modo guardado en localStorage
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "Modo Claro";
    }

    // Alternar entre modo oscuro y claro
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        darkModeToggle.textContent = isDarkMode ? "Modo Claro" : "Modo Oscuro";

        // Guardar preferencia en localStorage
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    });
});


