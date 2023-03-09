const port = process.env.PORT || 8080
const server = require('./app');
const mongoose = require('mongoose');

const uri = 'mongodb+srv://lalofreakdev:-TrdMyG!iU-4XGR@maritodb.1bfprwm.mongodb.net/?retryWrites=true&w=majority';

async function main() {
  mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
    server.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));
  })
  .catch((error) => console.error(error));
}
main();

