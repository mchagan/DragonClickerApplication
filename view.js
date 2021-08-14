const mainView = {
  main: document.querySelector("main"),
  init: function () {
    this.main.innerHTML = "";
  },
  render() {
    this.init();
    this.main.innerHTML = this.template(controller.getDragons());
  },
  template(dragons) {
    return dragons.reduce(
      (acc, dragon) =>
        (acc += `
          <div class="card" data-id="${dragon.id}">
            <h2>${dragon.type} Dragon</h2>
            <div onclick='controller.increment(${dragon.id})'>
            <img
              id="imgArena"
              class="arenaDragon"
              src='${controller.dragonImage(dragon.type)}'
              width='${controller.dragonSize(dragon.id)}'
              height='${controller.dragonSize(dragon.id)}'
            />
          Level: ${dragon.level}  Clicks: ${dragon.clicks}</div>
          </div>
        `),
      ""
    );
  },
};

const listView = {
  list: document.getElementById("listDiv"),
  init() {
    this.list.innerHTML = "";
  },
  template(arr) {
    return arr.reduce(
      (acc, cur) =>
        (acc += `  
         <button class="btn" onclick='controller.dispatch("${cur.type}",event)'>
         <img 
            alt="${cur.type}" 
            src='${controller.dragonImage(cur.type)}'
              width="50"
              height="50"
         />
         ${cur.type}
       </button>
        `),
      ""
    );
  },
  render() {
    this.init();
    this.list.innerHTML = this.template(controller.getList());
  },
};
