import userServices from '../services/userServices';

const userInfo = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = await userServices.getUserInfo(userId);
    if (userData) {
      return res.status(200).send(userData);
    }
    return res.status(400).send('user not found');
  } catch (err) {
    return res.status(400).send(err);
  }
};

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    if (await userServices.getUserInfoByField({ phoneNo: req.body.phoneNo })) {
      return res.status(400).send('User already exist');
    }
    const createdUserData = await userServices.createUserInfo(userData);
    return res.status(200).send(createdUserData);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

const UserController = {
  userInfo,
  createUser,
};

export default UserController;
