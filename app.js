let text = document.getElementById("info");
let btn = document.getElementById("intro-btn");
btn.addEventListener("click", function () {
  if (btn.innerHTML === "ENG") {
    text.innerHTML =
      "I've been working for at least 10 years in the food&beverages industry, it has been a long journey with lots of fun," +
      "but I yearned to learn something different. So I started to look at tutorials on web development on youtube.<br /> <br />" +
      "Since then, I've been practicing and learning new things, web development lets you create new things and improve code" +
      "to solve problems, this has become my new passion.<br />" +
      "I'm on my way to learning new skills like react and react native, for now Im making webpages with html, css and javascript" +
      "applying responsive designing to give a better user experience.<br /><br />" +
      "My objective is to apply my experience on Food and Beverages industry and develop web services to make process" +
      "more efficient in the F&B and hospitality industry.";

    btn.innerHTML = "ESP";
  } else {
    text.innerHTML =
      "Gran parte de mi vida he trabajado en la industria hotelera y de restauración, mientras trabajaba empecé a estudiar programación," +
      "en este camino he notado el potencial que tiene la tecnología y lo que se puede crear desde cero tan solo teniendo una" +
      "computadora y conexión a internet.<br /> <br />" +
      "Ahora estoy aprendiendo REACT y haciendo preyectos en html, css y javascript para aplicar todo lo aprendido.<br /><br />" +
      "Mi objetivo es crear aplicaciones y software para optimizar y automatizar procesos en la industria hotelera, creando ambientes con comunicación<br /> interdepartamental más fluida y procesos eficientes.";

    btn.innerHTML = "ENG";
  }
});

//  Blogpost

let element = document.getElementById("back-link");

element.setAttribute("href", document.referrer);

element.onclick = function () {
  history.back();
  return false;
};
