// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  // foreignKey: "driver_id",
});
// Categories have many Products
Category.hasMany(Product, {
  // foreignKey: "driver_id",
  // onDelete: "CASCADE",
});
// Products belongToMany Tags (through ProductTag)
Product.hasMany(Tag, {
  // foreignKey: "driver_id",
  // onDelete: "CASCADE",
});
// Tags belongToMany Products (through ProductTag)
Tag.hasMany(Product, {
  // foreignKey: "driver_id",
  // onDelete: "CASCADE",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
