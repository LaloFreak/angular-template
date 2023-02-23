const port = process.env.PORT || 8080
const server = require('./app');

async function main() {
    try {
      server.listen(port, ()=> console.log(`server listening on port ${port}`))//MODO PRUEBAS
    } catch (error) {
      console.error("Unable to connect to database");
    }
}
main();

