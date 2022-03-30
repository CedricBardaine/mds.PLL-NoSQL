import { MongoClient } from "mongodb";


// net: { bindIp: '127.0.0.1', port: 27017 },

// const CLIENT = new MongoClient(process.env.MONGODB_URL || "mongodb://localhost:27017/test")
const CLIENT = new MongoClient("mongodb://localhost:27017/test", { useUnifiedTopology: true });


export default CLIENT;