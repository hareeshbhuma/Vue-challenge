const add = x => { return x +273.15 }
const adder = new Vue({
    el: '#adder',
    data: {
      guest: 'Bhuma',
      degC: 0
      
    },
    computed: {
        result: function () {
          const i = parseInt(this.degC)
          return `${this.guest}, temparature in K is ${(i+273.15)}.`
        }
    }
  })