var posts=["2024/12/30/CSS/","2024/12/22/HeapSort/","2024/12/28/HTML基础标签/","2024/12/25/Git/","2025/01/06/JS的事件/","2025/01/06/JS的变量与运算符/","2025/01/06/JS的判断、循环语句/","2025/01/06/JS的对象、数组、函数/","2025/01/06/JS的调用方式和执行循序/","2025/01/12/JS的常用库/","2025/01/06/JS的输入与输出/","2025/01/06/JS的类/","2024/12/22/MergeSort/","2024/12/25/Linux常用文件命令/","2024/12/18/QuickSort-0/","2025/01/15/Redux/","2024/12/22/ShellSort/","2024/12/26/SSH和SCP/","2024/12/26/Thrift/","2024/12/26/Thrift-1/","2024/12/26/shell语法/","2024/12/26/vim和tmux/","2025/01/22/vue-基本概念/","2025/01/22/vue-配置环境/","2025/01/22/vue-API/","2024/12/27/操作系统/","2024/12/23/嵌入式原理/","2025/01/15/组合Components/","2024/12/25/管道、环境变量及其常用命令/","2025/01/13/拳皇（下）/","2025/01/15/路由/","2025/01/15/配置环境、ES6语法/","2025/01/13/拳皇（上）/","2024/12/23/设计模式/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };