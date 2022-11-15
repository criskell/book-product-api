export default class ProductController {
  constructor (Product) {
    this.Product = Product;
  }

  async get (req, res) {
    try {
      const products = await this.Product.find({});
      console.log(products);
      res.send(products);
    } catch (err) {
      res.status(400).send(err.message);
    }
  } 
}