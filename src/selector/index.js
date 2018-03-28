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
    if(!type) {
      console.error(`js-for-css error: A selector requires a selector type. 'type' is ${ typeof type }. create(type, name)`);
      return;
    }
    
    if(!name) {
      console.error(`js-for-css error: A selector requires a selector name. 'name' is ${ typeof name }. create(type, name)`);
      return;
    }

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
        selector = `${ name }`; break;
      case 'tag:active':
        selector = `${ name }:active`; break;
      case 'tag:focus':
        selector = `${ name }:focus`; break;
      case 'tag:hover':
        selector = `${ name }:hover`; break;
      case 'id': 
        selector = `#${ name }`; break;
      case 'id:active':
        selector = `#${ name }:active`; break;
      case 'id:focus':
        selector = `#${ name }:focus`; break;
      case 'id:hover':
        selector = `#${ name }:hover`; break;
      default:;break;
    }
    builder(`${ selector } { ${ extractProps.bind(this)() } }`, this.fileName);
  }
}