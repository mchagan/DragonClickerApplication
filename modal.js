var SHOW_FORM_BUTTON = document.querySelector("#fill-form-button"),
  DIALOG = document.querySelector("#form-dialog"),
  FORM_SUBMIT_BUTTON = document.querySelector("#submit-button"),
  FORM_CANCEL_BUTTON = document.querySelector("#close-button"),
  FORM_STATUS = document.querySelector("#form-status");

// show dialog
SHOW_FORM_BUTTON.addEventListener("click", function () {
  DIALOG.showModal();
});

// form submission is cancelled
FORM_CANCEL_BUTTON.addEventListener("click", function () {
  DIALOG.close("CANCELLED");
});

// when form is submitted
FORM_SUBMIT_BUTTON.addEventListener("click", function () {
  let dragonNewName = document.getElementById("dragonName").value;
  let dragonImgSrcFilePath = document.getElementById("dragonImgSrc").value;
  let dragonImgSrcFile =
    "./images/" + dragonImgSrcFilePath.split("/").pop().split("\\").pop();
  let dg = model.list.find((obj) => obj.type === dragonNewName);
  if (dg === undefined) {
    var newDragon = {};
    newDragon.type = dragonNewName;
    newDragon.imgSrc = dragonImgSrcFile;
    model.addToList(newDragon);
  } else {
    dg.imgSrc = dragonImgSrcFile;
  }
  DIALOG.close("SUBMITTED");
  listView.render();
  mainView.render();
});

// fired when dialog is closed
DIALOG.addEventListener("close", function () {
  if (DIALOG.returnValue === "SUBMITTED")
    FORM_STATUS.textContent = "Dragon Modified";
  else if (DIALOG.returnValue === "CANCELLED")
    FORM_STATUS.textContent = "Dragon Modification Canceled";
});

// cancel effect of ESC key
DIALOG.addEventListener("cancel", function (e) {
  e.preventDefault();
});
