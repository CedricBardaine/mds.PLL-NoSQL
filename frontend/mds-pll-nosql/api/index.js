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

async function saveMessage(document) {
    // return await mongo.db('test')
    //     .collection('messages')
    //     .find()
    //     .toArray();

    mongo.db('test').collection('messages').insertOne(document)

    return;

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

    if (req.url === "/save-message") {

        // TODO: retrieve message from body :( 
        // console.log(req.body);



        console.log()
        console.log()
        console.log()
        console.log()
        // console.log(Object.keys(req));
        console.log(req);
        console.log()
        console.log()
        console.log()
        console.log()
        // console.log(Object.keys(res));
        console.log(res);
        console.log()
        console.log()
        console.log()
        console.log()
        console.log(req.body);
        console.log(res.text);
        console.log(res.json);
        console.log(req.dataa);
    }


    next()
}