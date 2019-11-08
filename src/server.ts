import 'dotenv/config';
import App from './app';
import PostsController from './controllers/posts.contollers';
import validEnv from './utils/validateEnv';

validEnv.validateEnv();

const app = new App(
    [
      new PostsController(),
    ],
    5000,
  );
   
  app.listen();