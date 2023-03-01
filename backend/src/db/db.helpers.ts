import mongoose from "mongoose";
import "dotenv/config"
const url = process.env.URL;

function connectToDataBase() {
  return mongoose
    .connect(url)
    .then(() => console.log("Banco de dados conectado com sucesso!"))
    .catch((error) =>
      console.log("Erro na conexão com banco de dados!", error)
    );
}


export default {
  connectToDataBase,


}

