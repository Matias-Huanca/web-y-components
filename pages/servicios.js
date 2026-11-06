function serviciosComponent(el) {
  const componenteEl = document.createElement("div");

  componenteEl.innerHTML = `<section class="servicios">
      <h2 class="servicios__title">
        <span class="mis">Mis</span><span class="mis-servicios">servicios</span>
      </h2>
      <div class="card-cont">
        <div class="card">
          <img
            class="card__img"
            src="./imagenes/Course Website Landing Page Thumbnail 1.png"
            alt=""
          />
          <h3 class="card__title">Desarrollo de paginas web</h3>
          <p class="card_descrip">
            Creación de sitios web modernos, totalmente responsivos y
            optimizados con enfoque mobile-first.
          </p>
        </div>
        <div class="card">
          <img class="card__img" src="./imagenes/foto-servicios-2.png" alt="" />
          <h3 class="card__title">Animaciones webs</h3>
          <p class="card_descrip">
            Animaciones e interacciones personalizadas utilizando CSS,
            JavaScript y los Frameworks más actuales del mercado.
          </p>
        </div>
        <div class="card">
          <img class="card__img" src="./imagenes/foto-servicios-3.png" alt="" />
          <h3 class="card__title">Desarrollo de apps</h3>
          <p class="card_descrip">
            Diseño y desarrollo de aplicaciones web a medida y plataformas
            interactivas adaptadas a tus necesidades.
          </p>
        </div>
      </div>
    </section>`;

  el.appendChild(componenteEl);
}

function servicios() {
  // Llama al Servicios (Propio)
  const servicios = document.querySelector(".serviciosComponent");
  if (servicios) {
    serviciosComponent(servicios);
    console.log("ejecutando main de servicios");
  }
  //Llama al header
  const headerServicios = document.querySelector(".headerServicios");
  if (headerServicios) {
    headerComponent(headerServicios);
    menuVentana();
  }
  //Llama al Footer
  const footerServicios = document.querySelector(".footerServicios");
  if (footerServicios) {
    footerComponent(footerServicios);
  }
}
servicios();
