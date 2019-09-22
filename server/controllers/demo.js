const https = require('https')
const {mysql} = require('../qcloud')

module.exports = async (ctx)=>{
    ctx.state.data = {
        msg : 'hello',
        code : '200',
        title : '盗墓笔记续',
        content : '盗墓笔记之寻龙图,盗墓笔记12终极解密,盗墓笔记之迷途',
        author : 'yunxi'
    }

    
}