//   


const obj = {
  name: 'Object',

  regularMethod: function () {
    console.log('Regular:', this.name); // this = obj
  },

  arrowMethod: () => {
    console.log('Arrow:', this.name); // this = global (undefined in strict mode)
  },
};

obj.regularMethod(); // "Regular: Object"
obj.arrowMethod(); // "Arrow: undefined"

