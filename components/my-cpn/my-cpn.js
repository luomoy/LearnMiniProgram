// components/my-cpn/my-cpn.js
Component({
  properties: {
    // title: String,
    title: {
      type: String,
      value: '我是标题',
      observer: function(newVal,oldVal){
        console.log(newVal, oldVal)
      }
    }
  },
  externalClasses: ['titleclass'],
  methods: {
    handleIncrement(){
      this.triggerEvent('increment',{name: 'luomoy',age:15},{})
    }
  }
})