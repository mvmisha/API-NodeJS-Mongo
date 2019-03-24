var express = require("express"),
    app = express(),
    router = express.Router(),
    MongoClient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectID,
    url = "mongodb://localhost:27017/";

router.get('/apifintonic/insert', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("fintonic");
        var query = {
            token: req.query.token
        };
        dbo.collection("tokens").find(query).toArray(function (err, result) {
            if (err) throw err;
            if (result[0]) {
                if (req.query.nombre != null && req.query.nombre != "" && req.query.nombre != " ") {
                    MongoClient.connect(url, function (err, db) {
                        if (err) throw err;
                        var dbo = db.db("fintonic");
                        var myobj = {
                            nombre: req.query.nombre,
                            descripcion: req.query.descripcion
                        };
                        dbo.collection("productos").insertOne(myobj, function (err, result) {
                            if (err) throw err;
                            res.send("1 producto se ha insertado");
                            db.close();
                        });
                    });
                } else {
                    res.send("Poner el nombre es obligatorio")
                }
            } else {
                res.send("Autentificate para insertar!")
            }
            db.close();
        });
    });
});
router.get('/apifintonic/delete', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("fintonic");
        var query = {
            token: req.query.token
        };
        dbo.collection("tokens").find(query).toArray(function (err, result) {
            if (err) throw err;
            if (result[0]) {
                if (req.query.idproducto != null && req.query.idproducto != "" && req.query.idproducto != " ") {
                    MongoClient.connect(url, function (err, db) {
                        if (err) throw err;
                        var dbo = db.db("fintonic");
                        var myquery = {
                            "_id": ObjectId(req.query.idproducto)
                        };
                        dbo.collection("productos").deleteOne(myquery, function (err, obj) {
                            if (err) throw err;
                            if (obj.result.n == 1) {
                                res.send("1 producto se ha eliminado");
                            } else {
                                res.send("No se ha eliminado nada");
                            }

                            db.close();
                        });
                    });
                } else {
                    res.send("Indica el id de un producto para eliminarlo")
                }
            } else {
                res.send("Autentificate para eliminar!")
            }
            db.close();
        });
    });
});
router.get('/apifintonic', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("fintonic");
        dbo.collection("productos").find({}).toArray(function (err, result) {
            if (err) throw err;
            res.send(result)
            db.close();
        });
    });
});

app.use(router);

app.listen(3001, function () {
    console.log("funcionando en el http://localhost:3001");
});

