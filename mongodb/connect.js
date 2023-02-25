import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
        .then(() => console.log('Mongo connected'))
        .catch((error) => {
            console.log("Failed to connect to the mongoDb");
            console.log(error);
        });
}

export default connectDB