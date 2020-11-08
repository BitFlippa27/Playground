import { create as createBlogPost } from "./blogpost.js";

var scopesAndClosures = createBlogPost(
    "Scopes and Closures",
    "Kyle Simpson",
    "October 27, 2014",
    "https://www.jdkjsy.com"
);

scopesAndClosures.print();