const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const PORT = 8000;

MongoClient.connect(`mongodb+srv://collinmathews:shaDow734@cluster0.658qfd6.mongodb.net/?retryWrites=true&w=majority`)
    .then(client => {
        console.log("connected to database");
        const db = client.db(`Cluster0`);
        const quotesCollection = db.collection("quotes")
        app.set("view engine", "ejs");
        app.use(express.static("public"));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.put("/quotes", (req, res) => {
            quotesCollection
                .findOneAndUpdate(
                    { name: 'Yoda' },
                    {
                        $set: {
                            name: req.body.name,
                            quote: req.body.quote,
                        },
                    },
                    {
                        upsert: true,
                    }
                )
                .then(result => {
                    res.json("success")
                })
                .catch(error => console.error(error));
        });
        app.get("/", (req, res) => {
            db.collection("quotes")
                .find()
                .toArray()
                .then(results => {
                    console.log(results)
                    res.render("index.ejs", { quotes: results })
                })
                .catch(error => console.error(error));
        });
        app.post("/quotes", (req, res) => {
            quotesCollection
                .insertOne(req.body)
                .then(result => {
                    console.log(result)
                    res.redirect("/")
                })
                .catch(error => console.error(error))
        });

        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`)
        });
        app.delete("/quotes", (req, res) => {
            quotesCollection
                .deleteOne({ name: req.body.name })
                .then(result => {
                    if (result.deletedCount === 0) {
                        return res.json('No quote to delete')
                    }
                    res.json(`Deleted Darth Vader's quote`)
                })
                .catch(error => console.error(error))
        })

    })
    .catch(error => console.error(error))

console.log("May Node be with you")