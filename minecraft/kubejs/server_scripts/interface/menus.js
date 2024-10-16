/////////////////////////
// Menu Implementation //
/////////////////////////

let MenuState = function(type, player) {
  this.player = player;
  this.type = type;
  this.page = 0;
  player.openChestGUI(type.title, 6, (gui) => this.gui = gui);
  this.showPage();
};

MenuState.prototype.showPage = function() {
  for (let slot of this.type.pages[this.page]) {
    let btn = this.gui.getSlot(slot.x, slot.y);
    btn.setItem(Item.of(slot.item).withName(slot.label).withLore(slot.tooltip));
    for (let event of ['LeftClicked', 'RightClicked', 'MiddleClicked', 'Swapped', 'Thrown', 'ShiftLeftClicked', 'ShiftRightClicked', 'DoubleClicked']) {
      let handler = slot['on' + event];
      handler && btn['set' + event](() => handler(this.player));
    }
  }
  let disabledItem = "minecraft:barrier";
  let enabledItem = "minecraft:slime_ball";
  let enabled = this.page > 0;
  this.gui.button(0, 5, enabled ? enabledItem : disabledItem, "Previous Page", () => this.prevPage());
  enabled = this.page < this.type.pages.length - 1;
  this.gui.button(8, 5, enabled ? enabledItem : disabledItem, "Next Page", () => this.nextPage());
  let pageNum = this.page + 1;
  this.gui.button(4, 5, Item.of("gtceu:programmed_circuit", 1, {Configuration: pageNum}), "Page #" + pageNum, () => {});
};

MenuState.prototype.clearPage = function() {
  for (let slot of this.type.pages[this.page]) {
    let btn = this.gui.getSlot(slot.x, slot.y);
    btn.setItem("minecraft:air");
    btn.resetClickHandlers();
  }
};

MenuState.prototype.prevPage = function() {
  if (this.page <= 0) return;
  this.clearPage();
  --this.page;
  this.showPage();
};

MenuState.prototype.nextPage = function() {
  if (this.page >= this.type.pages.length - 1) return;
  this.clearPage();
  ++this.page;
  this.showPage();
};

let MenuType = function(title) {
  this.title = title;
  this.pages = [];
};

MenuType.prototype.getPage = function(i) {
  if (this.pages[i] === undefined)
    this.pages[i] = [];
  return this.pages[i];
};

MenuType.prototype.addSlot = function(slot) {
  if(slot.tooltip === undefined) slot.tooltip = "";
  this.getPage(slot.page).push(slot);
};

MenuType.prototype.show = function(player) {
  new MenuState(this, player);
};

///////////////
// Menu Data //
///////////////

let lvMenu = new MenuType(Text.blue("LV Menu"));
  lvMenu.addSlot({page: 0, x: 0, y: 1, label: "The Eye", item: "minecraft:ender_eye",
    onLeftClicked: (player) => player.sendSystemMessage("Eye Left Clicked"),
    onRightClicked: (player) => player.sendSystemMessage("Eye Right Clicked"),
    onSwapped: (player) => player.sendSystemMessage("swapped"),
    onThrown: (player) => player.sendSystemMessage("drop"),
    onMiddleClicked: (player) => player.sendSystemMessage("middle click"),
    onDoubleClicked: (player) => player.sendSystemMessage("double click")
  });
  lvMenu.addSlot({page: 1, x: 6, y: 2, label: "The Dirt", item: "minecraft:dirt",
    onThrown: (player) => player.sendSystemMessage("Dirt Thrown")
  });
  lvMenu.addSlot({page:2, x: 4, y: 2, label: "Explode", item: "minecraft:tnt",
    onLeftClicked: (player) => player.getLevel().createExplosion(player.x, player.y, player.z).explode()
  });

let researchMenu = new MenuType(Text.blue("Research Menu"));

ItemEvents.rightClicked((event) => {
  switch (event.item.id) {
    case 'gtceu:lv_field_generator': lvMenu.show(event.player); break;
    case 'gtceu:computer_monitor_cover': researchMenu.show(event.player); break;
  }
});
