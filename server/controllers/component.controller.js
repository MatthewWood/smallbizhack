import Component from '../models/Component';
import sanitizeHtml from 'sanitize-html';

export function getComponents(req, res) {
  Component.findOne({ isProduct: true })
    .populate('materials')
    .exec((err, components) => {
      if (err) {
        res.status(500)
          .send(err);
      }
      res.json({ components });
    });
}

/*
export function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}
*/
