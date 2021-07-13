class HashTable {
    constructor() {
      this.size = 7;
      this.count = 0;
      this.table = new Array(this.size);
    }

    _hash(key) {
      let hash = 0;
      for(let i =0; i < key.length;i++){
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
    }
  
    set(value) {
        const key = value.slice(0, 1);
        const index = this._hash(value);
        if (this.table[index]) {
          for (let i = this.count+1; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
              this.table[index][i][1] = value;
              this.count += 1;
              return;
            }
          }
          this.table[index].push([key, value]);
        } else {
          this.table[index] = [];
          this.table[index].push([key, value]);
        }
      }
  
      get(key) {
        const target = this._hash(key);
        if (this.table[target]) {
          for (let i = 0; i < this.table.length; i++) {
            if (this.table[target][i][0] === key) {
              return this.table[target][i][1];
            }
          }
        }
        return undefined;
      }
    display() {
        this.table.forEach((values, index) => {
          const chainedValues = values.map(
            ([key, value]) => `[ ${key}: ${value} ]`
          );
          console.log(`${index}: ${chainedValues}`);
        });
    }
  }

  module.exports = HashTable

  