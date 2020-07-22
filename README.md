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

## Props

### Custom Children

```
<Component>
  <ChildComponent />
</Component>
```

Display `ChildComponent` with `props.children`

## Components
A class or function that produces HTML and handles feedback from the user

### Class-Based Components

```
class App extends React.Component {
  /* constructor is optional */
  constructor(props) {
    super(props);
    this.state = { num: 0 };
  }
  
  // initialize state without constructor
  state = { num: 0 };
  
  render() {
    return (
      <div>{this.state.num}</div>
    );
  }
}
```

Use `this.setState({ num: 9 })` to change state

#### Lifecycle Methods:
- `componentDidMount`
  - good place to do data loading
- `componentDidUpdate`
  - make request when state is changed
- `componentWillUnmount`
  - cleanup
  
## Event Handlers

### Input

```
class CustomComponent extends React.Component {
  state = { term: '' };
  
  render() {
    return (
      <input
        type="text"
        value={this.state.term}
        onChange={e => this.setState({ term: e.target.value })}
      />
    );
  }
}
```

### Form Submission

```
class CustomComponent extends React.Component {

  onFormSubmit(event) {
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
      </form>
    );
  }
}
```
