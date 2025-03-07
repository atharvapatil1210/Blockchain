const { create } = require("ipfs-http-client");
require("dotenv").config();

const ipfs = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: "Basic " + Buffer.from(process.env.INFURA_PROJECT_ID + ":" + process.env.INFURA_PROJECT_SECRET).toString("base64")
    }
});

async function uploadFile(filePath) {
    const fs = require("fs");
    const file = fs.readFileSync(filePath);
    const result = await ipfs.add(file);
    return result.path;  // Returns IPFS CID
}

module.exports = { uploadFile };
