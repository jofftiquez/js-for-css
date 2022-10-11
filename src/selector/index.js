import { builder } from "../builder";

function extractProps() {
  var props = ``;
  this.selector.props.forEach((prop) => {
    for (let key in prop) {
      props += `${key}: ${prop[key]}; `;
    }
  });
  return props;
}
export class Selector {
  constructor(fileName) {
    this.fileName = "styles";
    this.selector = {
      type: "",
      name: "",
      props: [],
    };
  }

  create(type, name) {
    if (!type) {
      console.error(
        `js-for-css error: A selector requires a selector type. 'type' is ${typeof type}. create(type, name)`
      );
      return;
    }

    if (!name) {
      console.error(
        `js-for-css error: A selector requires a selector name. 'name' is ${typeof name}. create(type, name)`
      );
      return;
    }

    this.selector = {
      type: type,
      name: name.split(",").join("").split(" "),
      props: [],
    };

    return this;
  }

  addProps(name, value) {
    if (typeof name === "object" && !value) {
      // object
    }

    let prop = {};
    prop[name] = value;
    this.selector.props.push(prop);
    return this;
  }

  buildSelectorString(type, name, suffix) {
    const isNotGrouping = name.length === 1;

    switch (type) {
      case "tag":
        if (isNotGrouping) {
          const [slctr] = name;
          return suffix ? `${slctr}${suffix}` : slctr;
        }

        return name
          .map((slctr) => (suffix ? `${slctr}${suffix}` : `${slctr}`))
          .join(",");

      case "class":
        if (isNotGrouping) {
          const [slctr] = name;
          return suffix ? `.${slctr}${suffix}` : `.${slctr}`;
        }

        return name
          .map((slctr) => (suffix ? `.${slctr}${suffix}` : `.${slctr}`))
          .join(",");

      case "id":
        if (isNotGrouping) {
          const [slctr] = name;
          return suffix ? `#${slctr}${suffix}` : `#${slctr}`;
        }

        return name
          .map((slctr) => (suffix ? `#${slctr}${suffix}` : `#${slctr}`))
          .join(",");

      default:
        break;
    }
  }

  build(options) {
    let selector = "";
    const { type, name, props } = this.selector;

    switch (type) {
      case "class":
        selector = this.buildSelectorString("class", name);
        break;
      case "class:active":
        selector = this.buildSelectorString("class", name, ":active");
        break;
      case "class:focus":
        selector = this.buildSelectorString("class", name, ":focus");
        break;
      case "class:hover":
        selector = this.buildSelectorString("class", name, ":hover");
        break;
      case "class::before":
        selector = this.buildSelectorString("class", name, "::before");
        break;
      case "class::after":
        selector = this.buildSelectorString("class", name, "::after");
        break;
      case "tag":
        selector = this.buildSelectorString("tag", name);
        break;
      case "tag:active":
        selector = this.buildSelectorString("tag", name, ":active");
        break;
      case "tag:focus":
        selector = this.buildSelectorString("tag", name, ":focus");
        break;
      case "tag:hover":
        selector = this.buildSelectorString("tag", name, ":hover");
        break;
      case "tag::before":
        selector = this.buildSelectorString("tag", name, "::before");
        break;
      case "tag::after":
        selector = this.buildSelectorString("tag", name, "::after");
        break;
      case "id":
        selector = this.buildSelectorString("id", name);
        break;
      case "id:active":
        selector = this.buildSelectorString("id", name, ":active");
        break;
      case "id:focus":
        selector = this.buildSelectorString("id", name, ":focus");
        break;
      case "id:hover":
        selector = this.buildSelectorString("id", name, ":hover");
        break;
      case "id::before":
        selector = this.buildSelectorString("id", name, "::before");
        break;
      case "id::after":
        selector = this.buildSelectorString("id", name, "::after");
        break;
      default:
        break;
    }
    builder(`${selector} { ${extractProps.bind(this)()} }`, this.fileName);
  }
}
