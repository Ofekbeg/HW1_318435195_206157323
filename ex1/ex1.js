class Counter {
  constructor(count) {
    this.count = count;
  }
  Initialize = (value) => {
    this.count = value;
  };

  Increment = () => {
    this.count++;
  };

  Go = () => {
    let i = 0;
    let res = "";
    while (i <= this.count) {
      res += i + " ";
      i++;
    }
    return res;
  };
}
