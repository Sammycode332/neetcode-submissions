class MyHashMap:

    def __init__(self):
        self.buckets = [[] for i in range(1000)]

    def _hash(self,key):
        return key %1000;
    def put(self, key: int, value: int) -> None:
        bucket = self._hash(key)
        for item in self.buckets[bucket]:
            if item[0] == key:
                item[1] = value
                return
        self.buckets[bucket].append([key,value])
    def get(self, key: int) -> int:
        bucket = self._hash(key)
        for item in self.buckets[bucket]: 
            if item[0] == key:
                return item[1]
        return -1

    def remove(self, key: int) -> None:
        bucket = self._hash(key)
        for item in self.buckets[bucket]:
            if item[0]== key:
                self.buckets[bucket].remove(item)
                break

# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)