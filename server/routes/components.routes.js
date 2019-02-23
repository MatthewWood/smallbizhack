import { Router } from 'express';
import * as ComponentController from '../controllers/component.controller';
const router = new Router();

// Get all Posts
router.route('/components').get(ComponentController.getComponents);

// Add a new Post
// router.route('/posts').post(PostController.addPost);

export default router;
