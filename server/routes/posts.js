import express from 'express';

import { getPosts, createPost} from '../controller/posts.js';
const router= express.Router();

//if its a get its router.get if it a post router.post
router.get('/',getPosts);
router.post('/',createPost);

export default router;

