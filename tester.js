const { Selector } = require('./dist');

console.log(Selector)

const btn = new Selector('class', 'btn');
const btnPrimary = new Selector('class', 'btn-primary');

btn
  .addProps('width', '100px')
  .addProps('height', '40px')
  .build();

btnPrimary
  .addProps('color', 'white')
  .addProps('background', 'blue')
  .build();