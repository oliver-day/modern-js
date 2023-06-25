import { expect, test } from 'vitest';

import { LRUCache, CACHE_CAPACITY } from './lruCache';

test('can create a new LRUCache with specified capacity', () => {
  const cache = new LRUCache(CACHE_CAPACITY);
  expect(cache.capacity).toBe(CACHE_CAPACITY);
});

test('can put items into the cache', () => {
  const cache = new LRUCache(CACHE_CAPACITY);
  cache.putItem('key1', 'value1');
  expect(cache.getItem('key1')).toBe('value1');
});

test('can retrieve items from the cache', () => {
  const cache = new LRUCache(CACHE_CAPACITY);
  cache.putItem('key1', 'value1');
  const value = cache.getItem('key1');
  expect(value).toBe('value1');
});

test('deletes the least recently used item when cache reaches capacity', () => {
  const cache = new LRUCache(CACHE_CAPACITY);
  for(let i=0; i<CACHE_CAPACITY; i++) {
    cache.putItem(`key${i}`, `value${i}`);
  }

  // Force the cache to evict the least recently used item
  cache.putItem(`key${CACHE_CAPACITY}`, `value${CACHE_CAPACITY}`);

  // Ensure that the first key was deleted
  expect(cache.getItem('key0')).toBe(undefined);
});

test('refreshes the least recently used item on access', () => {
  const cache = new LRUCache(CACHE_CAPACITY);
  for(let i=0; i<CACHE_CAPACITY; i++) {
    cache.putItem(`key${i}`, `value${i}`);
  }

  // Access the first item, making it the most recently used
  cache.getItem('key0');

  // Add a new item to force an eviction
  cache.putItem(`key${CACHE_CAPACITY}`, `value${CACHE_CAPACITY}`);

  // 'key0' should still exist, 'key1' should be deleted
  expect(cache.getItem('key0')).toBe('value0');
  expect(cache.getItem('key1')).toBe(undefined);
});
