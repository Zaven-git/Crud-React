import data from '../data.json';

class ImageRepository {
  getImages(credentials) {
    return new Promise((resolve, reject) => {
      resolve({data: data.data, perPage:data.perPage})
    });
  };

  getFilters() {
    return new Promise((resolve, reject) => {
      resolve({success: true, data: Array.from(new Set(data.data.map(e => e.category)))})
    });
  };

  getFeatured() {
    return new Promise((resolve, reject) => {
      resolve(data.data.filter(e => e.featured))
    });
  };
}

export default ImageRepository;
