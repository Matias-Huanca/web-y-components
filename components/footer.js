function footerComponent(el) {
  const componenteEl = document.createElement("div");
  componenteEl.innerHTML = `<section class="footer">
        <img class="footer-logo" src="./imagenes/logo-agustin.png" alt="" />
        <div class="footer__opc-cont">
          <div class="footer__opc">
            <img class="footer__img" src="./imagenes/home.png" alt="" />
            <h4 class="footer__title">Home</h4>
          </div>
          <div class="footer__opc">
            <img class="footer__img" src="./imagenes/user.png" alt="" />
            <h4 class="footer__title">Servicios</h4>
          </div>
          <div class="footer__opc">
            <img class="footer__img" src="./imagenes/phone.png" alt="" />
            <h4 class="footer__title">Contacto</h4>
          </div>
        </div>
        <div class="footer__redes">
          <img src="./imagenes/Frame 24.png" alt="" />
          <img src="./imagenes/Frame 26.png" alt="" />
          <img src="./imagenes/Frame 27.png" alt="" />
        </div>
        <a class="footer_github" href="https://github.com/Matias-Huanca"
          >©2026 - https://github.com/Matias-Huanca</a
        >
      </section>`;

  el.appendChild(componenteEl);
}
