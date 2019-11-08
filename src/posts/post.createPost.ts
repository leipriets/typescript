import express from 'express';
import postModel from '../models/post.model';
import Post from '../interfaces/post.interface';
 
function createPost(request: express.Request, response: express.Response) {
  const postData: Post = request.body;
  const createdPost = new postModel(postData);
  createdPost.save()
    .then(savedPost => {
      response.send(savedPost);
    })
}