var posts=["2024/12/18/QuickSort-0/","2024/12/19/lzh/","2024/12/18/my-first-blog/","2024/12/18/quickSort/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };