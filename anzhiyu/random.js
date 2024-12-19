var posts=["2024/12/19/article-name/","2024/12/18/quickSort/","2024/12/18/my-first-blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };