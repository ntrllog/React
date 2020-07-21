# React

## Directory Layout
src: source code  
  - components (directory)
  - index.js
    ```
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    
    ReactDOM.render(
      <App />,
      document.querySelector('#root')
    );    
    ```
  - App.js

public: static files (html, images)  
node_modules: project dependencies  
package.json: record of dependencies  
package-lock.json: record of exact versions of dependencies  

## JSX

### Inline Styling
HTML: `<div style="background-color: red; border: 2px solid red"></div>`

JSX: `<div style={{ backgroundColor: 'red', border: '2px solid red' }}></div>`
  - outermost `{}` is for referencing JS variable
  - innermost `{}` is a JS object

### Classes for Styling
Use `className` instead of `class` to avoid collision with `class` keyword

## Components
A class or function that produces HTML and handles feedback from the user
