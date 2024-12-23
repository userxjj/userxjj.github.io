var posts=["2024/12/22/HeapSort/","2024/12/22/ShellSort/","2024/12/22/MergeSort/","2024/12/18/QuickSort-0/","2024/12/23/嵌入式原理/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };