"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var PostsController = /** @class */ (function () {
    function PostsController() {
        var _this = this;
        this.path = '/posts';
        this.router = express_1.default.Router();
        this.posts = [
            {
                author: "Leonardo",
                content: "dasjdagsd",
                title: "sadjasgd",
            }
        ];
        this.getAllPosts = function (request, response) {
            response.send(_this.posts);
        };
        this.createAPost = function (request, response) {
            var post = request.body;
            _this.posts.push(post);
            response.send(post);
        };
        this.intializeRoutes();
    }
    PostsController.prototype.intializeRoutes = function () {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createAPost);
    };
    return PostsController;
}());
exports.default = PostsController;
