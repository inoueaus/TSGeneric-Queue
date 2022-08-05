import TaskQueue from "./task-queue";

const queue = new TaskQueue<{ name: string; age: number; }>()
queue.enqueue({ name: "austin", age: 27 });
queue.peek();
