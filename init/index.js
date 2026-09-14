const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongo_Url = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("connected to db");
}).catch(err => {
    console.log(err)
});

async function main() {
    await mongoose.connect(mongo_Url)
}

const initDB = async () => {
    await Listing.deleteMany({});
   initData.data = initData.data.map((obj) => ({...obj, owner: "6a9856d663f9c11ca469957b"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();