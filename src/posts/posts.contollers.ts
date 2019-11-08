import express from 'express';
import Controller from '../interfaces/controller.interface';
import Post from '../interfaces/post.interface';
import postModel from '../models/post.model';

const router = express.Router();

class PostsController implements Controller {
    public path = '/posts';
    public router = express.Router();
    private post = postModel;

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

    // getAllPosts = (_request: express.Request, response: express.Response) => {
    //     response.send(this.posts);
    // }

    // createAPost = (request: express.Request, response: express.Response) => {
    //    const post : Post = request.body;
    //    this.posts.push(post);
    //    response.send(post);
    // }

    
   private createPost = (request: express.Request, response: express.Response) => {
      const postData: Post = request.body;
      const createdPost = new postModel(postData);
      createdPost.save()
        .then(savedPost => {
          response.send(savedPost);
        })
    }

   private getAllPosts = (request: express.Request, response: express.Response) => {
        this.post.find()
          .then(posts => {
            response.send(posts);
          })
      }

   private getPostById = (request: express.Request, response: express.Response) => {
        const id = request.params.id;
        this.post.findById(id)
          .then(post => {
            response.send(post);
          })
      }

}

export default PostsController;