import robot from "mirai-nodesdk/robot";
import messageChain from "mirai-nodesdk/messageChain";

async function main() {
    
    let ROBOT = new robot({
        authKey: "INITKEYwLwkO8lZ",
        qq: "3453563382",
        passwd: "momeng1055",
        host: "127.0.0.1",
        port: "8888"
    });

    console.log(await ROBOT.init());

    let message = await ROBOT.sendGroupMessage("790172839","",new messageChain().add_at("1523433122").add_plain("你妈的，为什么！").getobj());
    // await ROBOT.recallMessage(message.messageId);

    console.log(await ROBOT.release_session());
}

main().then(e => {
    console.log(e);
}).catch(e => {
    console.log(e);
});