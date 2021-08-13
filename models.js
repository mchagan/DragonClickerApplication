const model = {
  list: [
    {
      type: "Fire",
      imgSrc: "./images/vippng.com-red-fire-png-531056.png",
    },
    {
      type: "Ice",
      imgSrc: "./images/Ice-Dragon-Transparent.png",
    },
    {
      type: "Forest",
      imgSrc: "./images/d1jax8v-6023bf11-e489-48b5-8406-5f044ab13acf.png",
    },
    {
      type: "Water",
      imgSrc: "./images/dragon_PNG84559.png",
    },
    {
      type: "Earth",
      imgSrc: "./images/d7b6j1m-ce81c81d-283a-4d99-8477-eab710f88531.png",
    },
  ],
  dragons: [],
  addDragon(dragon) {
    this.dragons.unshift(dragon);
  },
  addToList(name) {
    this.list.push(name);
  },
  getDragonImage(name) {
      let imageSource = this.list.find(obj => obj.type === name).imgSrc;
      return imageSource;
  }
};
