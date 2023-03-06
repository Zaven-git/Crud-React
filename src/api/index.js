import ImageRepository from "./ImageRepository";

class Api {
  static image(method, data) {
    return new ImageRepository()[method](data);
  }
}

export default Api;
