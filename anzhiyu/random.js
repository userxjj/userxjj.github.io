var posts=["2024/12/19/article-name/","2024/12/18/my-first-blog/","2024/12/18/quickSort/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };