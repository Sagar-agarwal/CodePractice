const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "taskMon";

mongoClient.connect(
    connectionURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error, client) => {
        if (error) {
            return console.log("unable to connect to db");
        }

        const db = client.db(databaseName);
        // console.log(db);

        db.collection("users").findOne({ name: "Sag" }, (error, user) => {
            if (error) {
                return console.log("Unable to find user");
            }

            console.log(user);
        });

        // db.collection("users").insertOne(
        //     {
        //         name: "Sagar",
        //         fullName: "Sagar Agarwal"
        //     },
        //     (error, result) => {
        //         if (error) {
        //             return console.log("unable to insert doc");
        //         }

        //         console.log(result.ops);
        //     }
        // );
    }
);
