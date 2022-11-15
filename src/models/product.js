import moongose from "mongoose";

const schema = new moongose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Product = moongose.model("Product", schema);

export default Product;