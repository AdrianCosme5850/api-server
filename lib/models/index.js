'use strict';

const { Sequelize, DataTypes } = require('sequelize')
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:'
const foodSchema = require('./food');
const clothesSchema = require('./clothes');
const Collection = require('./collection-class')

let herokuOptions = {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }

  let sequelize = new Sequelize(DATABASE_URL, process.env === 'production' ? herokuOptions : {})

  let foodModel = foodSchema(sequelize, DataTypes);
  let clothesModel = clothesSchema(sequelize, DataTypes);

module.exports = {
    Food: new Collection(foodModel),
    Clothes: new Collection(clothesModel),
    db: sequelize,
}

