//封装一个函数根据date 时间获取是上午还是下午或者晚上
export  const getTime = () => {
  //定义接收消息
  let message = "";
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12) {
     message
  } else if (hours == 12) {
    message = "中午好";
  }
  else if (hours < 18) {
    message ="下午好";
  } else {
    message = "晚上好";
  }
  
  return message;
}