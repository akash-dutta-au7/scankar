const express = require('express');
const cloudUpload = require('../utils/multer');
// const authenticateToken = require('../utils/jwt');
const fileUpload = require('../utils/excelMulter');

const {
  getAllProducts,
  createProduct,
  uploadInBulk,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/').get(protect,getAllProducts).post(protect , cloudUpload,createProduct);
router.route('/uploadinbulk').post(protect , fileUpload, uploadInBulk);
router.route('/uploadSome').post(uploadInBulk);
router
  .route('/:id')
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = router;
