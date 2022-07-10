# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*
- The “classic” way to perform validation is when the user submits his data via the “submit”-button. The validation is executed and if any errors are found, feedback is returned and displayed to the user. With this, I also added another function to check the validity  of the input value ``oninput event``. 
  - Every time  you change the value of the input (oninput event),  If it is valid, then error message will be removed and valid (images) being shown with green border. If the data is not valid, it run nonValid() to show the appropriate error and error messages next to each field.
  
### Screenshot

![](./images/Web%20capture_28-6-2022_192322_127.0.0.1.jpeg)
![](./images/Web%20capture_4-7-2022_93220_127.0.0.1.jpeg)
![](./images/Web%20capture_4-7-2022_93128_127.0.0.1.jpeg)


### Links

- Solution URL: [solution here ](https://github.com/PhoenixDev22/intro-component-sign-up-form)
- Live Site URL: [live site here](https://stirring-pastelito-644489.netlify.app/)

## My process
 I wanted to add real-time-validation alerts users while they are filling in the form .At the beginning, I have used ``onblur event`` on each input to check the validity of the input, then I was sugeested to use oninput to improve the user experience.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Client side validation using Javascript.
- Responsive Web Design



### What I learned

I saw different methods and techniques that you can use to implement validation in your forms. Although there are many possibilities, you should carefully plan validation for each project. Not all techniques provide a solution for everything.


### Continued development

Improving the Client side validation , using:
- Clearly mark required fields.
- Adding dynamic tips.
- Inform users when the form was completed successfully. It is as important as a good validation feedback.


### Useful resources
- To check a password between 7 to 15 characters which contain at least one numeric digit and a special character:
[w3resource](https://w3resource.com/javascript/form/password-validation.php#:~:text=%20Password%20validation%20%201%20Check%20a%20password,numeric%20digit%20and%20a%20special%20character.%20More%20)

- [MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - This helped me to learn about the Client side form validation with different types.



## Author

- Frontend Mentor - [@PhoenixDev22](https://www.frontendmentor.io/profile/PhoenixDev22)


