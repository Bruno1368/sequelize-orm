'use strict';
const {
  Model, ForeignKeyConstraintError
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id'
      })
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id'
      })
    }
  }1
  Pessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
    paranoid: true
  });
  return Pessoas;
};