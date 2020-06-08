const auth = require("./sdk/auth.js");

async function main() {
    console.log(await auth.about());
}

main();