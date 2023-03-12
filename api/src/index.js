const config = require('./config')
const server = require('./app');
const db = require('./integrations/mongodb')

async function main() {
  db.connect()
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
    server.listen(config.PORT, () => console.log(`Server listening at http://localhost:${config.PORT}`));
  })
  .catch((error) => console.error(error));
}
main();

