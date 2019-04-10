let clienturl;

if(process.env.NODE_ENV == 'development'){
  clienturl = 'iclient/'
}else{
  clienturl = 'https://api.iclient.ifeng.com/'
}

export {
  clienturl
}
