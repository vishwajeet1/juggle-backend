import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';
import { matchMakingStatus } from '../constant/modelsConstant';

const attributes = {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  senderId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  receiverId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  status: {
    type: DataTypes
      .ENUM(matchMakingStatus.ACCEPTED, matchMakingStatus.REJECTED, matchMakingStatus.PENDING),
    allowNull: false,
    default: matchMakingStatus.PENDING,
  },
};

const options = {
  tableName: 'matchMaking',
  timestamps: true,
  createdAt: true,
  updatedAt: true,
};
const MatchMaking = sequelize.define('MatchMaking_model', attributes, options);

export default MatchMaking;
