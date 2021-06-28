import { UserData } from '../models/index';

const getUserInfo = (id) => UserData.findOne({
  raw: true,
  where: {
    id,
  },
});

const getUserInfoByField = (data) => UserData.findOne({
  raw: true,
  where: {
    ...data,
  },
});

const createUserInfo = (userData) => UserData.build(userData).save();

const UserServices = {
  getUserInfo,
  createUserInfo,
  getUserInfoByField,
};
export default UserServices;
