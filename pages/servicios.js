function serviciosComponent(el) {
  const componenteEl = document.createElement("div");

  componenteEl.innerHTML = `<section class="servicios">
      <h2 class="servicios__title">
        <span class="mis">Mis</span><span class="servicios">servicios</span>
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
            Creacion de paginas webs, totalmente responsive y mobile first.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="card">
          <img
            class="card__img"
            src="./imagenes/Course Website Landing Page Thumbnail 1.png"
            alt=""
          />
          <h3 class="card__title">Animaciones para webs</h3>
          <p class="card_descrip">
            Animaciones personalizadas con CSS , JS y Frameworks. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Aenean lobortis posuere
            tristique.
          </p>
        </div>
        <div class="card">
          <img
            class="card__img"
            src="./imagenes/Course Website Landing Page Thumbnail 1.png"
            alt=""
          />
          <h3 class="card__title">Desarrollo de apps</h3>
          <p class="card_descrip">
            Algo interesante sobre mi Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla dui quam, sollicitudin at enim id, sodales
            vehicula velit. Aenean lobortis posuere tristique.
          </p>
        </div>
      </div>
    </section>`;

  el.appendChild(componenteEl);
}

function main() {
  const servicios = document.querySelector(".serviciosComponent");
  serviciosComponent(servicios);
}
main();
