function portfolio() {
  //Llama al header
  const headerPortfolio = document.querySelector(".headerPortfolio");
  if (headerPortfolio) {
    headerComponent(headerPortfolio);
    menuVentana();
  }
  // Componente SERVICIOS
  const serviciosPortfolio = document.querySelector(".serviciosPortfolio");
  serviciosComponent(serviciosPortfolio);
  // Componente Footer
  const footerPortfolio = document.querySelector(".footerPortfolio");
  footerComponent(footerPortfolio);
}
portfolio();
