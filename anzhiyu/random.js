var posts=["2024/12/25/Git/","2024/12/25/Linux常用文件命令/","2024/12/22/HeapSort/","2024/12/22/MergeSort/","2024/12/26/shell语法/","2024/12/18/QuickSort-0/","2024/12/22/ShellSort/","2024/12/26/vim和tmux/","2024/12/23/嵌入式原理/","2024/12/25/管道、环境变量及其常用命令/","2024/12/23/设计模式/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };