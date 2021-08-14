var ctrl = false;

const controller = {
  init() {
    listView.render();
    mainView.render();
    setTimeout(() => alert("Click Dragons to display"), 200);
  },
  getDragons(callback = () => true) {
    return model.dragons.filter((d) => callback(d));
  },
  getList(callback = () => true) {
    return model.list.filter((d) => callback(d));
  },
  increment(id) {
    let cur = model.dragons.filter((d) => d.id == id)[0];
    cur.clicks += 1;
    cur.level = Math.floor(Math.log2(cur.clicks));
    mainView.render();
  },
  dispatch(type, event) {
    event.preventDefault();
    ctrl = event.getModifierState("Control");
    FORM_STATUS.textContent = "";
    if (ctrl === false) {
      let dragon = {
        id: model.dragons.length,
        type: type,
        level: 0,
        clicks: 0,
      };
      model.addDragon(dragon);
      mainView.render();
    } else {
        document.getElementById("dragonName").value = type;
        DIALOG.showModal();
    }
    ctrl = false;
  },
  sumClicks(callback) {
    let sum = model.dragons.reduce((a, c) => (a += c.clicks), 0);
    sumView.render(sum);
  },
  dragonImage(type) {
    return model.getDragonImage(type);
  },
  dragonSize(id) {
    let cur = model.dragons.filter((d) => d.id == id)[0];
    return 100 + cur.level * 20;
  },
};

controller.init();
