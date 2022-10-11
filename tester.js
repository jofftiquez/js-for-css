const { Selector } = require("./dist");

const selector = new Selector("styles");

selector
  .create("tag", "h1")
  .addProps("color", "green")
  .addProps("font-weight", "bold")
  .build();

selector
  .create("class", "container")
  .addProps("padding", "20px")
  .addProps("background", "lightgrey")
  .build();

selector
  .create("class", "btn")
  .addProps("width", "100px")
  .addProps("height", "40px")
  .build();

selector.create("class:hover", "btn").addProps("cursor", "pointer").build();

selector
  .create("class", "btn-primary")
  .addProps("color", "white")
  .addProps("background", "blue")
  .build();

selector
  .create("class:hover", "btn-primary")
  .addProps("width", "110px")
  .addProps("height", "45px")
  .build();

selector
  .create("class", "btn-secondary")
  .addProps("color", "white")
  .addProps("background", "green")
  .build();

selector
  .create("class", "btn-accent")
  .addProps("color", "black")
  .addProps("background", "rgba(245, 253, 233, 0.5)")
  .build();

// id

selector
  .create("id", "foo")
  .addProps("color", "green")
  .addProps("font-weight", "bold")
  .build();

selector.create("id:hover", "foo").build();

selector.create("id:focus", "foo").build();

selector.create("id:active", "foo").build();

// css groupings

selector
  .create("tag", "h2, h3, h4")
  .addProps("position", "relative")
  .addProps("color", "green")
  .addProps("font-weight", "bold")
  .build();

selector
  .create("tag::after", "h2, h3, h4")
  .addProps("content", "''")
  .addProps("position", "absolute")
  .addProps("top", 0)
  .addProps("right", 0)
  .addProps("width", "40px")
  .addProps("aspect-ratio", "1")
  .addProps("background-color", "black")
  .build();

selector.create("class", "class1, class2, class3").build();

selector.create("class:hover", "class1, class2, class3").build();

selector.create("id", "id1, id2, id3").build();

selector.create("id::before", "id1, id2, id3").build();
