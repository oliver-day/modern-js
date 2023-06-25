/**
 * Problem: Create a data structure that implements the requirements of a Least Recently Used (LRU) cache with O(1) average time complexity.
 * * Initialize an object with a maximum capacity of elements.
 * * `getItem` - Return the value of the key. Update cache with the most recently used key.
 * * `putItem` - Create or update a key value pair in the cache. Evict the least recently used key if the size of keys exceeds the max capacity.
 */

export const CACHE_CAPACITY = 5;

export class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  getItem(key) {
    const item = this.cache.get(key);

    // Map keeps track of insertion order,
    // this will move the key to the end of the Map with the LRU key at the front.
    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }

    return item;
  }

  putItem(key, value) {
    // delete key if it already exists and refresh the insertion order
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // if the cache is at capacity, delete the oldest item
    else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.oldestItem);
    }

    this.cache.set(key, value);
  }

  // The 'get' keyword allows us to use the method like a property.
  // this.oldestItem vs this.oldestItem()
  get oldestItem() {
    return this.cache.keys().next().value; // returns the first key in the Map
  }
}
