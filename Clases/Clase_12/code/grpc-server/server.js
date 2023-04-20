const Conn = require("./conn");
var PROTO_PATH = "./proto/covi.proto";

var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
var covi_proto = grpc.loadPackageDefinition(packageDefinition).covi;

function AddCaso(call, callback) {
  // req = call
  // res = callback
  const query = `INSERT INTO Caso(name,location,age,infected_type,state) VALUES ('${call.request.name}','${call.request.location}','${call.request.age}','${call.request.infected_type}','${call.request.state}')`;
  Conn.query(query, function (err, rows, fields) {
    if (err) throw err;
    callback(null, { message: "Caso insertado en la base de datos" });
  });
}

function ListarCasos(call) {
  const query = "SELECT name,location,age,infected_type,state FROM Caso;";
  Conn.query(query, function (err, rows, fields) {
    if (err) throw err;
    for (const data of rows) {
      call.write(data);
    }
    call.end();
  });
}

function main() {
  var server = new grpc.Server();
  server.addService(covi_proto.Casos.service, {
    AddCaso: AddCaso,
    ListarCasos: ListarCasos,
  });
  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
      console.log("gRPC server on port 50051");
    }
  );
}

main();
