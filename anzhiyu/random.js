var posts=["2024/12/22/MergeSort/","2024/12/18/QuickSort-0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };