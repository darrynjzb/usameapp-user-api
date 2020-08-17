class BaseService {
  constructor(model) {
    this.model = model;
  }

  async baseCreate(payload) {
    try {
      const res = await this.model.create(payload);
      return res;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = BaseService;
