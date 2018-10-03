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
      name2: '',
      props: []
    };
  }

  create(type, name , name2=null) {
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
      name2: name2,
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
    const { type, name, name2, props } = this.selector;

    switch(type) {
      case 'class': 
        selector = `.${ name }`; break;
      case 'class:active':
        selector = `.${ name }:active`; break;
      case 'class:focus':
        selector = `.${ name }:focus`; break;
      case 'class:hover':
        selector = `.${ name }:hover`; break;
      case 'class:link':
        selector = `.${ name }:link`; break;
      case 'class:default':
        selector = `.${ name }:default`; break;
      case 'class:disabled':
        selector = `.${ name }:disabled`; break;
      case 'class:enabled':
        selector = `.${ name }:enabled`; break;
      case 'class:empty':
        selector = `.${ name }:empty`; break;
      case 'class:in-range':
        selector = `.${ name }:in-range`; break;
      case 'class:indeterminate':
        selector = `.${ name }:indeterminate`; break;
      case 'class:invalid':
        selector = `.${ name }:invalid`; break;
      case 'tag': 
        selector = `${ name }`; break;
      case 'tag:active':
        selector = `${ name }:active`; break;
      case 'tag:focus':
        selector = `${ name }:focus`; break;
      case 'tag:hover':
        selector = `${ name }:hover`; break;
      case 'tag:link':
        selector = `${ name }:link`; break;
      case 'tag:default':
        selector = `${ name }:default`; break;
      case 'tag:disabled':
        selector = `${ name }:disabled`; break;
      case 'tag:enabled':
        selector = `${ name }:enabled`; break;
      case 'tag:empty':
        selector = `${ name }:empty`; break;
      case 'tag:in-range':
        selector = `${ name }:in-range`; break;
      case 'tag:indeterminate':
        selector = `${ name }:indeterminate`; break;
      case 'tag:invalid':
        selector = `${ name }:invalid`; break;  
      case 'tag1,tag2':
        selector = `${ name },${ name2 }`; break;
      case 'tag1 tag2':
        selector = `${ name } ${ name2 }`; break;
      case 'tag1>tag2':
        selector = `${ name }>${ name2 }`; break;
      case 'tag1+tag2':
        selector = `${ name }+${ name2 }`; break;
      case 'tag1~tag2':
        selector = `${ name }~${ name2 }`; break;
      case 'id': 
        selector = `#${ name }`; break;
      case 'id:active':
        selector = `#${ name }:active`; break;
      case 'id:focus':
        selector = `#${ name }:focus`; break;
      case 'id:hover':
        selector = `#${ name }:hover`; break;
      case 'id:link':
        selector = `#${ name }:link`; break;
      case 'id:default':
        selector = `#${ name }:default`; break;
      case 'id:disabled':
        selector = `#${ name }:disabled`; break;
      case 'id:enabled':
        selector = `#${ name }:enabled`; break;
      case 'id:empty':
        selector = `#${ name }:empty`; break;
      case 'id:in-range':
        selector = `#${ name }:in-range`; break;
      case 'id:indeterminate':
        selector = `#${ name }:indeterminate`; break;
      case 'id:invalid':
        selector = `#${ name }:invalid`; break;
      default:;break;
    }
    builder(`${ selector } { ${ extractProps.bind(this)() } }`, this.fileName);
  }
}