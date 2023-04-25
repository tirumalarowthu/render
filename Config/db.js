const mongoose = require("mongoose")
const connectDb = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://veera123:veera123@cluster0.d2xilje.mongodb.net/?retryWrites=true&w=majority")
        if (conn) {
            console.log("Db connected successfully")
        } 
    } catch (err) {
        console.log(err.message)
    }
}
module.exports = connectDb