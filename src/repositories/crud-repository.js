const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create( data );
      return response;
    } catch (error) {
      Logger.error("Something Went Wrong in CRUD:create");
      console.log(error.message);
      throw error;
    }
  }

  async delete(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something Went Wrong in CRUD:delete");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Something Went Wrong in CRUD:getAll");
      throw error;
    }
  }

  async get() {
    try {
      const response = await this.model.findByPk();
      return response;
    } catch (error) {
      Logger.error("Something Went Wrong in CRUD:get");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: { id: id },
      });
      return response;
    } catch (error) {
      Logger.error("Something Went Wrong in CRUD:update");
      throw error;
    }
  }
}

module.exports = CrudRepository;
