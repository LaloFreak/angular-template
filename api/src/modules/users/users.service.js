const UsersModel = require('./users.model')

module.exports = {
  setup(router){
    this.router = router;
  },

  //Method: *
  async find(params){
    let q = params && params.query;
    let findParams = {
      enable: true
    };
    let queryParams = {}
    // LÓGICA PARA PETICIONES CON QUERIES
    // if(){

    // }
    return UsersModel.find().lean().exec();
  },

  //Method: GET
  async get(id, params){
    return UsersModel.findById(id).lean().exec();
  },

  //Method: POST
  async create(data, params){
    return UsersModel.create(data);
  },

  //Method: PUT
  async update(id, data, params){
    return UsersModel.findByIdAndUpdate(id, data, {new: true, safe: true}).lean().exec();
  },

  //Method: DELETE
  async remove(id, params){
    return UsersModel.findByIdAndRemove(id).lean().exec();
  }
}