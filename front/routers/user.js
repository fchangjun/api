const Router = require("koa-router");
const user = require('../../db/model/userModel')
const {secret} = require("../config/config")
const jsonWebToken = require("jsonwebtoken")
const axios = require('axios')
// const authToken = require("../middlewera/autoToken")
// const authPermission = require("../middlewera/authPermissions.js")
const router = new Router({prefix:'/user'})
const {reg,login} = require('../controllers/userCtr.js')
router.post('/reg',reg)
router.post('/login',login)
router.post('/wxlogin',async (ctx)=>{
  // 从body获取用户发送的参数
  let {code} = ctx.request.body 
  // 请求微信的服务器 用code 换取opendid  用户在微信的主键id 
  let url ='https://api.weixin.qq.com/sns/jscode2session'
  // 携带的参数
  let params={
    appid:'wx5e6344cedcbf76a9',
    secret:'6259cadba107f92719c8c3f36d77cade',
    js_code:code,
    grant_type:'authorization_code'
  }
  let result = await axios.get(url,{params:{...params}})
  let {openid,session_key} = result.data
  //  将wx的openid 和 自己自己的用户系统进行关联 将opendid 和session_key 存入数据库 
  console.log(openid)
  // 根据opendid 获取 用户数据
  let  existRecord = await user.findOne({openid})
  console.log(existRecord)
  const { phone } = existRecord || {}
  if(phone){ 
    // 手机号存在是老用户
    let {address,phone,balance,_id,userName, avatarUrl, nickName} = existRecord
    let token = jsonWebToken.sign( {address,phone,balance,_id,userName},secret,{expiresIn:"1d"})
    ctx.body ={code:0,msg:'登录成功',token,uid:_id, avatarUrl, nickName, isNew: false}
  }else{
    ctx.body ={code:0,msg:'用户不存在',isNew:true, openid}
  }
})
router.post('/wxGetPhone',async (ctx)=>{
  const appid = 'wx5e6344cedcbf76a9';
  const secret = '6259cadba107f92719c8c3f36d77cade';
  // 从body获取用户发送的参数
  let {code} = ctx.request.body 
  // 获取access_token 
  const  tokenurl = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`
  const  tokenResult = await axios.get(tokenurl)
  const  {access_token} = tokenResult.data
  // 根据token 和 code 解密手机号返回给前端
  const phoneUrl = `https://api.weixin.qq.com/wxa/business/getuserphonenumber?access_token=${access_token}`
  const result = await axios.post(phoneUrl,{ code })
  ctx.body ={code:0,msg:'登录成功',data: result.data.phone_info}
 
})

router.post("/wxBindPhone",async (ctx) => {
  const { nickName, avatarUrl , openid, code } = ctx.request.body

  const appid = 'wx5e6344cedcbf76a9';
  const secret = '6259cadba107f92719c8c3f36d77cade';
  // 获取access_token 
  const  tokenurl = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`
  const  tokenResult = await axios.get(tokenurl)
  const  {access_token} = tokenResult.data
  // 根据token 和 code 解密手机号返回给前端
  const phoneUrl = `https://api.weixin.qq.com/wxa/business/getuserphonenumber?access_token=${access_token}`
  const { data } = await axios.post(phoneUrl,{ code })
  console.log(data)
  let  phoneNumber = ""
  if(data.errcode) {
    ctx.body = data
    return false
  } else {
      phoneNumber = data.phone_info.phoneNumber 
  }
  console.log(ctx.request.body)
  let  isExist = await user.findOne({phone: phoneNumber})
  if(isExist){
    // 手机号已存在
    ctx.body ={ code:-1,msg:'手机号已绑定' }
  }else{
    let  insertR = await user.insertMany({openid,nickName, avatarUrl, phone: phoneNumber})
    let userInfo = await user.findOne({openid, phone:phoneNumber })
    let {address,phone,balance,_id,userName} = userInfo
    let token = jsonWebToken.sign( {address,phone,balance,_id,userName},secret,{expiresIn:"1d"})
    ctx.body ={code:0,msg:'登录成功',userInfo, token}
  }
  console.log("xxxxx")
})
// router.post('/wxlogin',async (ctx)=>{
//   // 从body获取用户发送的参数
//   let {code} = ctx.request.body 
//   console.log(code)
//   // 请求微信的服务器 用code 换取opendid  用户在微信的主键id 
//   let url ='https://api.weixin.qq.com/sns/jscode2session'
//   // 携带的参数
//   let params={
//     appid:'wx5e6344cedcbf76a9',
//     secret:'6259cadba107f92719c8c3f36d77cade',
//     js_code:code,
//     grant_type:'authorization_code'
//   }
//   let result = await axios.get(url,{params:{...params}})
  // let {openid,session_key} = result.data
  // //  将wx的openid 和 自己自己的用户系统进行关联 将opendid 和session_key 存入数据库 
  // console.log(openid)
  // let  isExist = await user.findOne({openid})
  // if(isExist){
  //   // 微信id 已经存在
  //   let {address,phone,balance,_id,userName} = isExist
  //   let token = jsonWebToken.sign( {address,phone,balance,_id,userName},secret,{expiresIn:"1d"})
  //   ctx.body ={code:0,msg:'登录成功',token,uid:_id}
  // }else{
  //   let  insertR = await user.insertMany({openid,session_key})
  //   let userInfo = await user.findOne({openid,session_key})
  //   let {address,phone,balance,_id,userName} = userInfo
  //   let token = jsonWebToken.sign( {address,phone,balance,_id,userName},secret,{expiresIn:"1d"})
  //   ctx.body ={code:0,msg:'登录成功',token,uid:_id}
  // }
 
// })
module.exports = router

