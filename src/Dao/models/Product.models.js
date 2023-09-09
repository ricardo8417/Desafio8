import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productsCollection = "products";

const productsschema = new mongoose.Schema({
  title: String,
  descripcion: String,
  price: Number,
  thumbnail: String,
  code: String,
  stock: Number,
  status: Boolean,
});

productsschema.plugin(mongoosePaginate);
const productModel = mongoose.model(productsCollection, productsschema);

export default productModel;
