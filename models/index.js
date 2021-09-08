// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Category.hasOne(Product, {
  foreignKey: "category_id",
});

// Product.belongsTo(Category, {
//   foreignKey: "category_id",
// });
// Categories have many Product models
Category.hasMany(Product, {
  foreignKey: "category_id",
});
// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  foreignKey: "tag_id",
});
// Tags belongToMany Products (through ProductTag)
Products.haveMany(ProductTag, {});
Tag.belongsToMany(Product, {
  foreignKey: "",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
