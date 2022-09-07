# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). 

Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot Desktop

![](./screenshots/screenshot-desktop.png)

### Screenshot Mobile

![](./screenshots/screenshot-mobile.png)


### Links

- Solution URL: [https://github.com/satzch/faq-accordion-front-end-mentor-challenge](https://github.com/satzch/faq-accordion-front-end-mentor-challenge)
- Live Site URL: [https://satzch.github.io/faq-accordion-front-end-mentor-challenge](https://satzch.github.io/faq-accordion-front-end-mentor-challenge)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned


```js
function toggleAnswer(e){
    const parent = e.currentTarget.parentElement

    for( let element of questions){
        let parentDiv = element.parentElement
        if(element === e.currentTarget) continue
        parentDiv.children[0].classList.remove("bold")
        parentDiv.children[1].classList.add("hidden")
        parentDiv.children[0].children[1].classList.remove("invert")
    }

    parent.children[0].classList.toggle("bold")
    parent.children[1].classList.toggle("hidden")
    parent.children[0].children[1].classList.toggle("invert")
}
```


## Author

- Frontend Mentor - [@satzch](https://www.frontendmentor.io/profile/satzch)