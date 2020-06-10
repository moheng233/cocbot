const robot = require("./sdk/robot.js");
const messageChain = require("./sdk/messageChain");

async function main() {
    
    let ROBOT = new robot({
        authKey: "INITKEYGolefBtB",
        qq: "3453563382",
        host: "127.0.0.1",
        port: "8888"
    });

    console.log(await ROBOT.init());

    console.log(await ROBOT.sendGroupMessage("790172839","",new messageChain().add_plain("233").getobj()));

    console.log(await ROBOT.release_session());
}

main();