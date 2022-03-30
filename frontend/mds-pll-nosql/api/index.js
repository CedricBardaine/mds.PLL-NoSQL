// import mongo from "./mongo.js";

// export default (req, res, next) => {

//     console.log("in truc");
//     if (req.url == "/message-all") {

//         console.log("in message route ");

//         // mongo.connect().then()

//         res.setHeader('Conten-Type', "application/json");
//         // res.end(
//         //     JSON.stringify({
//         //         name: 'Mr.',
//         //         content: 'Faux message.',
//         //         color: 'green'
//         //     })
//         // );


//         res.end({
//             name: 'Mr.',
//             content: 'Faux message.',
//             color: 'green'
//         });

//         // res.end({
//         //     name: 'Mr.',
//         //     content: 'Faux message.',
//         //     color: 'green'
//         // });
//         return;
//     }


//     if (req.url === "/date") {
//         res.setHeader('Content-Type', 'application/json');
//         res.end(JSON.stringify({ date: new Date() }));
//         return;
//     }


//     next();
// }


export default function (req, res, next) {
    if (req.url === "/date") {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ date: new Date() }));
        return;
    }

    if (req.url === "/all-messages") {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            name: "Mr.",
            content: "Faux message.",
            color: 'green'
        }));
        return;
    }

    next()
}