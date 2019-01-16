<template>

  <div class="hello">
    <hr>

    <div class="row">
      <label class="title" @click="saoyisao()">扫一扫</label>
      <label class="title" @click="share()">分享</label>
    </div>

    <div class="row">
      <input placeholder="key" v-model="storeKey">
      <label class="title" @click="storeValueForKey()">存</label>
    </div>

    <div class="row">
      <input placeholder="key" v-model="getKey">
      <label class="title" @click="getValueForKey()">取</label>
      <input placeholder="value" v-model="getValue" disabled>
    </div>

    <ul>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" > awesome-vue </a>
      </li>
    </ul>

  </div>

</template>

<script>
  import * as Send from '../jsAppInteractive/index1.js'
  
  export default {
    name: 'HelloWorld',
    created() {
      window.getValueFromApp = this.getValueFromApp
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        storeKey: '',
        storeValue: 'test',
        getKey: '',
        getValue: ''
      }
    },
    methods: {
      saoyisao() {
        Send.saoYiSao('saoyisao')
      },
      share() {
        Send.share('share')
      },
      storeValueForKey() {
        let params = {
          [this.storeKey] : this.storeValue
        }
        Send.storeValueForKey( params )
      },
      getValueForKey() {
        Send.getValueForKey(this.getKey)
      },
      getValueFromApp(value) {
        console.log(value)
        this.getValue = value
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  background-color: #f1f1f1
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.row{
  margin-top: 15px;
  display: flex;
  background-color: #00d46845;
}
.row label,.row input{
  min-width: 40px;
  line-height: 30px;
  margin-left: 10px;
  background-color: #a3ffaf;
}
</style>
