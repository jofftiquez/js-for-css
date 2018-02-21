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
  constructor(type, name) {
    this.selector = {
      type: type,
      name: name,
      props: []
    };
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

  build() {
    let selector = `.${ this.selector.name } { ${ extractProps.bind(this)() } }`;
    builder(selector, 'test');
  }
}