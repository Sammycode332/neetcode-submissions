class MyHashSet:


    def __init__(self):
        self.buckets = [[] for i in range(1000)]

    def _hash(self, key):
        return key % 1000
    def add(self, key: int) -> None:
        bucket = self._hash(key)
        if key not in self.buckets[bucket]:
            self.buckets[bucket].append(key)
    def remove(self, key: int) -> None:
        bucket = self._hash(key)
        if key in self.buckets[bucket]:
            self.buckets[bucket].remove(key)
    def contains(self, key: int) -> bool:
        bucket = self._hash(key)
        if key in self.buckets[bucket]:
            return True
        return False
        


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)