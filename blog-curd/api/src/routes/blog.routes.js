import express from 'express';
import { getBlogs, createBlog, deleteBlog, updateBlog } from '../controllers/blog.controller.js';

const router = express.Router();

/* Get Request */
router.get('/', getBlogs);
/* Insert New Record */
router.post('/', createBlog);
/* Delete Request */
router.delete('/:id', deleteBlog);
/* Update Request */
router.patch('/:id', updateBlog);

export default router;