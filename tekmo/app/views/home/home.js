function goAbout(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("views/about/about");
}
function goContactUs(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("views/contact-us/contact-us");
}

exports.goAbout = goAbout;
exports.goContactUs = goContactUs;
