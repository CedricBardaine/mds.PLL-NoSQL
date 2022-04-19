import mongo from "./mongo.js";

/**
 * 
 * @returns all the messages docs. 
 */
async function getAllMessages() {
    return await mongo.db('test')
        .collection('messages')
        .find()
        .toArray();
}

export default async function (req, res, next) {

    if (req.url === "/date") {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ date: new Date() }));

        return;
    }


    if (req.url === "/all-messages") {

        let allMsgs = await getAllMessages();

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(
            allMsgs
        ));

        return;
    }


    next()
}