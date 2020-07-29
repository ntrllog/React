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

### Passing Data From Child to Parent
Making a function call in the parent component using values from the child component:

Parent:

```
class App extends React.Component {
  onSearchSubmit = term => {
    // term is the value from the child
  }
  
  render() {
    return (
      <SearchBar onSubmit={this.onSearchSubmit} />
    );
  }
}
```

Child:

```
class SearchBar extends React.Component {
  state = { term: '' };
  
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
}
```

### Custom Children

```
<Component>
  <ChildComponent />
</Component>
```

Display `ChildComponent` with `props.children`

## Components
A class or function that produces HTML and handles feedback from the user

### Functional Components

```
import React, { useState} from 'react';

const App = (props) => {
  const [stateVar, setStateVar] = useState(defaultValue);
  
  return (
    ...
  );
}
```

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

  onFormSubmit = event => {
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

## Accessing the DOM
Refs are a way to get a handle on elements rendered on the DOM

```
class CustomComponent extends React.Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }
  
  render() {
    return (
      <div>
        <img ref={this.componentRef} />
      </div>
    );
  }
}
```

### Getting the Height of an Image

```
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans: spans });
  }
  
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
```

## Axios

```
class App extends React.Component {
  onSearchSubmit = async term => {
    const response = await axios.get(url, {
      params: {},
      headers: {}
    });
  }
}
```
