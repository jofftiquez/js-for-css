const { Selector } = require('./dist');

const selector = new Selector('output', 'styles');

selector
  .create('tag', 'h1')
  .addProps('color', 'green')
  .addProps('font-weight', 'bold')
  .build();

selector
  .create('class', 'container')
  .addProps('padding', '20px')
  .addProps('background', 'lightgrey')
  .build();

selector
  .create('class', 'btn')
  .addProps('width', '100px')
  .addProps('height', '40px')
  .build();

selector
  .create('class:hover', 'btn')
  .addProps('cursor', 'pointer')
  .build();

selector
  .create('class', 'btn-primary')
  .addProps('color', 'white')
  .addProps('background', 'blue')
  .build();

selector
  .create('class:hover', 'btn-primary')
  .addProps('width', '110px')
  .addProps('height', '45px')
  .build();

selector
  .create('class', 'btn-secondary')
  .addProps('color', 'white')
  .addProps('background', 'green')
  .build();

selector
  .create('class', 'btn-accent')
  .addProps('color', 'black')
  .addProps('background', 'rgba(245, 253, 233, 0.5)')
  .build();