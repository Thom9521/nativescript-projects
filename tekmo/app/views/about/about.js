let frameModule = require("tns-core-modules/ui/frame");

function goBack() {
    frameModule.topmost().goBack();
}
function goHome(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("views/home/home");
}

exports.goBack = goBack;
exports.goHome = goHome;
