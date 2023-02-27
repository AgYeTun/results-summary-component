# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap 5
- [React](https://reactjs.org/) - JS library
- Axios
- Json-server
- React-svg

### What I learned

I learned how to use hover effect with gradient color.


```html
<div className="btn-bg w-100 py-3 mt-5 rounded-pill text-center">
  <p className="txt-primary">Continue</p>
</div>
```
```css
.btn-bg {
  cursor: pointer;
  background: linear-gradient(0deg, #303b5a, transparent) #303b5a;
  transition: all 0.5s;
}

.btn-bg:hover, .btn-bg:focus {
  background-color: rgb(78,33,202);
}
```

### Useful resources

- [CSS Gradient](https://cssgradient.io/) - This helped me for making gradient color. I really liked this pattern and will use it going forward.
- [Stack Diary](https://stackdiary.com/gradient-hover-effect-css/) - This is an amazing article which helped me finally understand how to use hover effect with gradient colors. I'd recommend it to anyone still learning this concept.

## Author

- Github - [Aung Ye Tun](https://github.com/AgYeTun)
- Frontend Mentor - [@AgYeTun](https://www.frontendmentor.io/profile/AgYeTun)
