'use strict'
const redis = require('redis')
// 接続情報
const config = {
    host: '127.0.0.1',
    port: 6379
};
// 接続
const client = redis.createClient(config)

var http = require('http');

http.createServer(function(req, res) {

  request.on("data", chunk => {
      logger(() => `received data[${chunk}]`);
        //if(req.method === 'POST') {
          const data = JSON.parse(chunk);
          const responseSender = d => response.end(JSON.stringify(d));
          const key = data["key"];
          const value = data["value"];

          client.set(key, value)
          // データの取得と表示
          client.get(key, (err, reply) => {
            console.log(reply)
          })
          // 切断
          client.quit()
        //}
  }).listen(3000);
})
