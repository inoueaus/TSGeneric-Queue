class TaskQueue<T> {
  #queue: Map<number, T>;
  #head: number = 0;
  #tail: number = 0;

  constructor(initialValues: T[] = [], params: { capacity: number } = { capacity: 1000 }) {
    this.#queue = new Map();
  }

  get size(): number {
    return this.#queue.size;
  }

  add(value: T): number {
    this.#tail++;
    this.#queue.set(this.#tail, value);
    return this.#tail;
  }

  remove(key: number): void {
    const hasItem = this.#queue.get(key);
    if (!hasItem) throw TypeError("Item not in queue.");
    this.#queue.delete(key);
  }

  pop(): T {
    let poppedItem: T | null = null;
    while (!poppedItem) {
      if (this.#head === this.#tail) throw Error("End of Queue.");
      const hasItem = this.#queue.get(this.#head);
      if (hasItem) {
        poppedItem = hasItem;
        break;
      }
      this.#head++;
    }
    this.#queue.delete(this.#head);
    this.#head++;
    return poppedItem;
  }

  peek(): T | undefined {
    return this.#queue.get(this.#head);
  }
}
