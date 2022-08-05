class TaskQueue<T> {
  #queue: Map<number, T>;
  #front: number = 1;
  #back: number = 0;
  #maxSize: number;

  constructor(initialValues: T[] = [], params: { capacity?: number } = {}) {
    this.#queue = new Map();
    this.#maxSize = params.capacity ?? Infinity;
    initialValues.forEach((value) => this.enqueue(value));
  }

  get size(): number {
    return this.#queue.size;
  }

  enqueue(value: T): number {
    if (this.size > this.#maxSize) throw Error("Queue is full.");
    this.#back++;
    this.#queue.set(this.#back, value);
    return this.#back;
  }

  remove(key: number): void {
    const hasItem = this.#queue.get(key);
    if (!hasItem) throw TypeError("Item not in queue.");
    this.#queue.delete(key);
  }

  dequeue(): T {
    let poppedItem: T | null = null;
    while (!poppedItem) {
      if (this.#front > this.#back) throw Error("End of Queue.");
      const hasItem = this.#queue.get(this.#front);
      if (hasItem) {
        poppedItem = hasItem;
        break;
      }
      this.#front++;
    }
    this.#queue.delete(this.#front);
    this.#front++;
    return poppedItem;
  }

  peek(): T | undefined {
    let peekedItem: T | undefined = undefined;
    while (!peekedItem) {
      if (this.#front > this.#back) break;
      const hasItem = this.#queue.get(this.#front);
      if (hasItem) {
        peekedItem = hasItem;
        break;
      }
      this.#front++;
    }
    return peekedItem;
  }
}

export default TaskQueue;
