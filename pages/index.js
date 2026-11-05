function main() {
  // Componente SERVICIOS
  const servicios = document.querySelector(".servicios-cont");
  serviciosComponent(servicios);
  // Componente Header
  const header = document.querySelector(".header-cont");
  headerComponent(header);
  // Componente Contacto
  const contacto = document.querySelector(".contacto-cont");
  contactoComponent(contacto);
  // Componente Footer
  const footer = document.querySelector(".footer-cont");
  footerComponent(footer);
  // Logica Menu Ventana
  menuVentana();
}

main();
