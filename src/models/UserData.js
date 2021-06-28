import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/dbConfig';
import MatchMaking from './MatchMaking';

const attributes = {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  phoneNo: {
    type: DataTypes.BIGINT,
    allowNull: false,
    uniqueKay: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    uniqueKay: true,
  },
  profileImg: {
    type: DataTypes.STRING,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    default: true,
  },
};
const options = {
  tableName: 'users',
  timestamps: true,
  createdAt: true,
  updatedAt: true,
};

const UserData = sequelize.define('UserData', attributes, options);

export default UserData;
