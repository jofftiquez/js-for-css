import { builder } from '../builder';

function extractProps () {
  var props = ``;
  this.selector.props.forEach(prop => {
    for (let key in prop) {
      props += `${ key }: ${ prop[key] }; `;
    }
  });
  return props;
}

export class Selector {
  constructor(fileName) {
    this.fileName = 'styles';
    this.selector = {
      type: '',
      name: '',
      props: []
    };
  }

  create(type, name) {
    this.selector = {
      type: type,
      name: name,
      props: []
    };
    return this;
  }

  addProps(name, value) {
    if(typeof name === 'object' && !value) {
      // object
    }

    let prop = {};
    prop[name] = value;
    this.selector.props.push(prop);
    return this;
  }

  build(options) {
    let selector = '';
    const { type, name, props } = this.selector;

    switch(type) {
      case 'class': 
        selector = `.${ name }`; break;
      case 'class:active':
        selector = `.${ name }:active`; break;
      case 'class:focus':
        selector = `.${ name }:focus`; break;
      case 'class:hover':
        selector = `.${ name }:hover`; break;
      case 'tag':
        selector = name;
    }
    builder(`${ selector } { ${ extractProps.bind(this)() } }`, this.fileName);
  }
}