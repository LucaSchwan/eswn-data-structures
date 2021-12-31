export interface Node<T> {
  element: T | null;
  next: Node<T> | null;
}