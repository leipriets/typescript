import express from 'express';
import Controller from '../interfaces/controller.interface';
import Post from '../interfaces/post.interface';
import postModel from '../models/post.model';

const router = express.Router();

class PostsController implements Controller {
    public path = '/posts';
    public router = express.Router();
    private postmodel = postModel;

    private posts: Post[] = [
        {
            author: "Leonardo",
            content: "dasjdagsd",
            title: "sadjasgd",
        }
    ];

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createPost);
        this.router.get(`${this.path}/:id`, this.getPostById);
    }
    
   private createPost = (request: express.Request, response: express.Response) => {
      const postData: Post = request.body;
      const createdPost = new postModel(postData);
      createdPost.save()
        .then((savedPost: any) => {
          response.send(savedPost);
        })
    }

   private getAllPosts = (request: express.Request, response: express.Response) => {
        this.postmodel.find()
          .then((posts: any) => {
            response.send(posts);
          })
      }

   private getPostById = (request: express.Request, response: express.Response) => {
        const id = request.params.id;
        this.postmodel.findById(id)
          .then(post => {
            response.send(post);
          })
      }

}

export default PostsController;