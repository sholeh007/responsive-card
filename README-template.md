# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![desktop-implement](./images/screenshot-desktop.png)
![mobile-implement](./images/screenshot-mobile.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind css](https://tailwindcss.com/) - JS library
- [Vite js](https://vitejs.dev/) - React framework

### What I learned

i learned how to create dynamic images when the dimesions are different. to make it, i use javascript to detect document width changes.

```js
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const img = document.getElementById("img");
  const resizeObserver = new ResizeObserver(() => {
    const width = window.innerWidth;

    if (width <= 640)
      return (img.src = "./assets/images/image-product-mobile.jpg");
    return (img.src = "./assets/images/image-product-desktop.jpg");
  });
  resizeObserver.observe(body);
});
```

### Continued development

this is a start, so i want to keep learning responsive design, design pattern and become a frontend specialist.

### Useful resources

- [resource 1](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API) - This helped me to understand detect document width changes.

## Author

- Frontend Mentor - [@sholeh007](https://www.frontendmentor.io/profile/sholeh007)
- Github - [@sholeh007](https://www.github.com/sholeh007)

## Acknowledgments

if you confusing to think class name, use tailwindcss.
