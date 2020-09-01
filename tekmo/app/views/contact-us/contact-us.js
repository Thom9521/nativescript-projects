// var dialogsModule = require("ui/dialogs");
// function onSubmit(args) {
//  console.log("submit button tapped");

//  dialogsModule.alert("Your message has been sent.");
// }
// exports.onSubmit = onSubmit;
var dialogs = require("tns-core-modules/ui/dialogs");
function onSubmit() {
    dialogs
        .alert({
            title: "Thank you",
            message: "Your message has been sent",
            okButtonText: "Ok",
        })
        .then(function () {
            console.log("Dialog closed!");
        });
}
exports.onSubmit = onSubmit;
