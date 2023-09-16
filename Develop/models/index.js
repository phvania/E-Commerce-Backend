// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through: {
    model: ProductTag, 
  },
  foreignKey: 'products_id',
  onDelete: 'CASCADE',
}

);
//Traveller.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  //through: {
    //model: Trip,
    //unique: false
  
  // Define an alias for when data is retrieved
  //as: 'planned_trips' 


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
  },
  foreignKey: 'tags_id',
  onDelete: 'CASCADE',
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
