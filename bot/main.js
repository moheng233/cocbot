const robot = require("mirai-nodesdk/robot");
const messageChain = require("mirai-nodesdk/messageChain");

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