"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var posts_contollers_1 = __importDefault(require("posts/posts.contollers"));
var app = new app_1.default([
    new posts_contollers_1.default(),
], 5000);
app.listen();
