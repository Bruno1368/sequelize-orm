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
        foreignKey: 'estudante_id',
        scope: { status: 'confirmado' },
        as: 'AulasMatriculadas'
      })
    }
  }1
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidatora: function(dado){
          if(dado.length < 4) throw new Error("O nome deve conter mais de 3 caracteres");
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          asrgs: true,
          msg: 'dado do tipo e-mail inválido'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
    paranoid: true,
    defaultScope: {
      where: { ativo: true },
    },
    scopes: {
      todos: { where: {} }
    }
  });
  return Pessoas;
};