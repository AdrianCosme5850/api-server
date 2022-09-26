'use strict';

const clothesSchema = (sequelize, DataTypes) => sequelize.define (
    'Clothes',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

module.exports = clothesSchema;