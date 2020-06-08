const fly = require("../api");

module.exports = {
    about: async function(){
        let e = await fly.get("/about");
        return e.data;
    }
}