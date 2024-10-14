import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database.js';

export const Roteiro = sequelize.define('Roteiro', {
  nomeCliente: { type: DataTypes.STRING, allowNull: false },
  emailCliente: { type: DataTypes.STRING, allowNull: false },
  telefoneCliente: { type: DataTypes.STRING, allowNull: false },
  conteudo: { type: DataTypes.TEXT, allowNull: false },
  status: {
    type: DataTypes.ENUM('AGUARDANDO_ANALISE', 'EM_ANALISE', 'AGUARDANDO_REVISAO', 'EM_REVISAO', 'AGUARDANDO_APROVACAO', 'APROVADO', 'RECUSADO'),
    defaultValue: 'AGUARDANDO_ANALISE'
  }
});
