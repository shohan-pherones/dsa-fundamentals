// A hash table is a data structure that is used to implement an associative array, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

const createHashTable = (size) => {
  const storage = new Array(size);
  const numBuckets = storage.length;

  const hash = (key) => {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % numBuckets;
  };

  const insert = (key, value) => {
    const index = hash(key);
    if (!storage[index]) {
      storage[index] = [];
    }
    storage[index].push({ [key]: value });
  };

  const get = (key) => {
    const index = hash(key);
    if (!storage[index]) return null;
    for (let i = 0; i < storage[index].length; i++) {
      if (storage[index][i][key]) {
        return storage[index][i][key];
      }
    }
    return null;
  };

  const remove = (key) => {
    const index = hash(key);
    if (!storage[index]) return null;
    for (let i = 0; i < storage[index].length; i++) {
      if (storage[index][i][key]) {
        storage[index].splice(i, 1);
        return key;
      }
    }
    return null;
  };

  return {
    insert,
    get,
    remove,
  };
};

const myHashTable = createHashTable(30);

// Insert key-value pairs
myHashTable.insert("name", "John Doe");
myHashTable.insert("age", 30);
myHashTable.insert("gender", "male");

// Retrieve values by key
console.log(myHashTable.get("name")); // Output: 'John Doe'
console.log(myHashTable.get("age")); // Output: 30
console.log(myHashTable.get("gender")); // Output: male
console.log(myHashTable.remove("name")); // Output: 'name'
console.log(myHashTable.get("name"));
