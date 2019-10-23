const fs = require('fs');

class File {
  constructor(n) { this.n = n; }

  foo(i) {
   return this.data[i]; 
  }

  loadData(cb) { 
    fs.readFile(this.n, (err, d) => {
      this.data = d.split('\n');
      cb();
    });
  }
}

const f = new File('names.txt')

