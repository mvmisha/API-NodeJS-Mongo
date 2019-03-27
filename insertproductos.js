
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("dbapi");
  var myobj = [{ nombre: "Agua", descripcion: "Agua del grifo" },
                 { nombre: "Vaso", descripcion: "Un vaso lleno de agua" },
                 { nombre: "Portatil", descripcion: "El buen HP" },
                 { nombre: "Mesa", descripcion: "La mesa de siempre" },
                 { nombre: "iPhone", descripcion: "un movil" },
                 { nombre: "silla", descripcion: "donde uno se sienta" }];
  dbo.collection("productos").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
