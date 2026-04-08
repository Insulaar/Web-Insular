---
title: "ENTRENAMIENTO ARTESANO"
visual: "cuadrado"
category: ["BRANDING", "DISEÑO DE INTERIOR", "DISEÑO GRAFICO"]
image: "./cover.webp"
order: 12
column: 2
row: 6
---


![UNO](./1.webp)

<div class="text-box">

<p class="f-bold t-large upper">ENTRENAMIENTO ARTESANO</p>
<p class="f-regular t-medium"><br />ENTRENAMIENTO ARTESANO ES UN CENTRO DE ENTRENAMIENTO UBICADO EN LA CIUDAD DE RÍO GRANDE, TIERRA DEL FUEGO. EL PROYECTO ABARCÓ EL DESARROLLO DE BRANDING Y EL DISEÑO INTEGRAL DE LA FACHADA MEDIANTE VINILOS MICROPERFORADOS, BAJO UN ESTILO MODERNO, FUNCIONAL Y ATLÉTICO.<br /><br />LA IDENTIDAD VISUAL BUSCA CONNOTAR DINAMISMO, FUERZA Y FLEXIBILIDAD. UN ASPECTO RELEVANTE DEL PROYECTO FUE LA INTERACCIÓN LUVÍDICA CON EL ENTORNO: LA LUZ SOLAR PROYECTA LA MARCA A TRAVÉS DE SOMBRAS Y CONTRALUCES SOBRE LAS SUPERFICIES INTERIORES DEL LOCAL, CREANDO UNA EXPERIENCIA VISUAL CAMBIANTE.</p>

</div>

![DOS](./2.webp)
<p class="f-regular t-medium">CADA PIEZA FUE DIAGRAMADA A MEDIDA SEGÚN LA MODULACIÓN DE LOS CRISTALES. LA GESTIÓN DE ARCHIVOS SE REALIZÓ BAJO ESPECIFICACIONES TÉCNICAS RIGUROSAS PARA FACILITAR SU PRODUCCIÓN Y COLOCACIÓN FINAL.</p>

</div>


![TRES](./3.webp)

<div class="text-box">

<p class="t-medium">
<span class="f-regular">Créditos:</span> 
<span class="f-light"> Lue </span></p>

</div>

![CUATRO](./4.webp)

![CINCO](./5.webp)

![SEIS](./6.webp)

![SIETE](./7.webp)

![OCHO](./8.webp)

![NUEVE](./9.webp)

<div class="video-container">
  <video 
    id="video-clip"
    src="/img/entrenamiento artesano/reel_entrenamientoartesano.mp4" 
    muted 
    playsinline
    autoplay
    style="width: 100%; height: auto;">
  </video>
</div>

<script>
  const video = document.getElementById('video-clip');
  const start = 3;  // Segundo de inicio
  const end = 12;   // Segundo de fin

  if (video) {
    // 1. Forzar inicio en el segundo 3 al cargar
    video.addEventListener('loadedmetadata', () => {
      video.currentTime = start;
    });

    // 2. Monitorear el tiempo para el loop
    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= end) {
        video.currentTime = start;
        video.play();
      }
    });

    // 3. Seguridad por si el usuario pausa y play manual
    video.addEventListener('play', () => {
      if (video.currentTime < start || video.currentTime >= end) {
        video.currentTime = start;
      }
    });
  }
</script>