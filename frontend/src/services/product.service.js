import api from './api';

const getAllProducts = () => {
  return api.get('/products');
};

const createProduct = (productData) => {
  return api.post('/products', productData);
};

const updateProduct = (id, productData) => {
  return api.put(`/products/${id}`, productData);
};

const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};

const productService = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};

export default productService;
