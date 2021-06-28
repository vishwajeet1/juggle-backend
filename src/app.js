import express from 'express';
import bodyParser from 'body-parser';
import userRouters from './apiRoutes/userRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'I am using babel in NodeJS',
    status: 'success',
  });
});

app.use('/user/v1/', userRouters);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('server up and running');
});
