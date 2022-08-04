import TaskQueue from "./task-queue";

const queue = new TaskQueue<{ name: string; age: number; }>()
queue.add({ name: "austin", age: 27 });
queue.peek();
