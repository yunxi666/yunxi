// 新增诗歌


const https = require('https')
const {mysql} = require('../qcloud')
module.exports = async (ctx) => {
  const {code} = ctx.request.body
  if(code=="200"){
    const judge = await mysql('poe').select()


    let url = 'https://api.apiopen.top/recommendPoetry'
    const bookinfo = await getJSON(url)
    console.log(bookinfo)
    const {title,content,author} = bookinfo
   

    try{
        await mysql('poe').insert({
            title,content,anthor
        })
        ctx.state.data = {
            title:`书名：${title}`,
            msg: '添加成功'
        }
    }
    catch(e){
      ctx.state = {
        code: -1,
        data: {
            msg: '新增失败'
        }
      }
   
    }
    console.log({rate,title, image, alt, publisher, summary,price,tags,author})
  }
}



function getJSON(url){
 
    return new Promise((resolve,reject)=>{
        https.get(url, res=>{
          let bookData = ''
          res.on('data',data=>{
              bookData += data
          })
          res.on('end',data=>{
              const bookinfo = JSON.parse(bookData)
              if(bookinfo.title) {
                  resolve(bookinfo)
              } else {
                  reject(bookinfo)
              }
            //   urlData += data
          })
        })
    })
}