const HashTable = require('./hashTable');
const ht = new HashTable();
ht.set("Fauzi");
ht.set("Fahri");
ht.set("Gandhi");
ht.set("Budi");
console.log(ht.get("F"));
ht.display();