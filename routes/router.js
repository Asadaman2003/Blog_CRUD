const app = require('../controller/app')
const express = require("express")
const router = express.Router();

router.post('/upload-blog',app.createblog);
router.get('/get-all-blog',app.get_allblogs);
router.get('/get-blog-by-id/:id',app.get_blogby_id);
router.get('/get-blog-by-author/:author',app.get_blogby_author);
router.patch('/update_blog/:id',app.update_blog);
router.delete('/delete_blog/:id',app.delete_blog);
router.delete('/delete-all-blogs',app.delete_all_blog);

router.post('/create-comment',app.createcomment);
router.get('/get-comments-by-blogid/:id',app.get_comments_blogid);
router.patch('/update_comment/:id',app.update_comment);
router.delete('/delete_comment/:id',app.delete_comment);

module.exports = router;