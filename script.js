const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.getElementById("leadForm").addEventListener("submit",(e)=>{
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const level = document.getElementById("level").selectedOptions[0].text;
  const mode = document.getElementById("mode").selectedOptions[0].text;
  const format = document.getElementById("format").selectedOptions[0].text;
  const goal = document.getElementById("goal").selectedOptions[0].text;
  const message = document.getElementById("message").value.trim();

  const text = `Hola English Home, quiero información sobre las clases de inglés.%0A%0A*Datos del interesado:*%0ANombre: ${name}%0AEdad: ${age}%0AWhatsApp: ${phone}%0ANivel: ${level}%0AModalidad de interés: ${mode}%0AClases: ${format}%0AObjetivo: ${goal}${message ? `%0AMensaje: ${message}` : ""}%0A%0A¡Gracias!`;

  window.open(`https://wa.me/527821070799?text=${text}`,"_blank","noopener");
});

document.getElementById("year").textContent = new Date().getFullYear();
