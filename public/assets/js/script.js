document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const img = document.getElementById("img");
  const resizeObserver = new ResizeObserver(() => {
    const width = window.innerWidth;

    if (width <= 640)
      return (img.src = "/assets/images/image-product-mobile.jpg");
    return (img.src = "/assets/images/image-product-desktop.jpg");
  });
  resizeObserver.observe(body);
});
