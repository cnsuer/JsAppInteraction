<template>

  <div class="hello">
    <hr>

    <div class="row" style="display: flex;justify-content: center;">
      <label class="titile"> {{msg}}</label>
    </div>

    <div class="row">
      <label class="title" @click="saoyisao()">扫一扫</label>
    </div>

    <div class="row">
      <label class="title" @click="sendString()">发送字符串</label>
    </div>  
    
    <div class="row">
      <label class="title" @click="sendDic()">发送js对象（即iOS的字典，Android的Map)</label>
    </div>

    <div class="row">
      <label class="title" @click="sendArray()">发送数组，发送的值为: [1, 2, 3, 4]</label>
    </div>

    <div class="row">
      <input placeholder="key" v-model="getKey">
      <label class="title" @click="getValue()">取</label>
    </div>

    <div class="row">
      <label class="title" @click="scanIdCard()">获取身份证</label>
      <label class="title" @click="faceVerfiy()">人脸核实</label>
    </div>

    <ul>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" > awesome-vue </a>
      </li>
    </ul>

  </div>

</template>

<script>
  import SendMessageToApp from '../jsAppInteractive/index3.js'
  
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        store: 'test',
        getKey: '',
      }
    },
    methods: {
      sendString() {
        SendMessageToApp('sendString', '0365ae5d87d2f15b68db1191dd4e1778fef2ad4cb92f071522ce68ff936c20b0')
      },
      saoyisao() {
        SendMessageToApp('saoyisao')

      },
      sendDic() {
        SendMessageToApp('sendDic', {"name": "你大爷", "age": 150})
      },
      sendArray() {
        SendMessageToApp('sendArray', [1, 2, 3, 4])
      },
      getValue() {
        SendMessageToApp('getValue', this.getKey, this.getvalueFromApp)
      },
      scanIdCard() {
        SendMessageToApp('faceIdCard', '243423423', this.faceIdCardResult)
      },
      faceVerfiy() {
        let pa = {'token': `234243242`}
        this.$http.post('http://baidu.com/api/user/user_auth/kSVideoAuth', pa).then( (res) => {
          let data = res.data
          if (data.code == 1) {
            let biz_token = data.data.biz_token
            let params = {
              biz_token: biz_token,
              token: 'f94f7904c465bb80484ba93a7594642af94f7904c465bb80484ba93a7594642a'
            }
            let res = JSON.stringify(params)
            SendMessageToApp('faceRecognize', res, this.faceRecognizeResult)
          }else{
            console.log(data)
            confirm(data.msg)
          }

        })
      },
      getvalueFromApp(value) {
        console.log(value)
        this.msg = value
      },
      faceIdCardResult(res) {
        console.log(res)
        this.msg = res
      },
      faceRecognizeResult(status, res) {
        console.log(res)
        console.log(status)
        this.msg = res
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
