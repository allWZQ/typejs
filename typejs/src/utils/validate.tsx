//过滤特殊字符
export function stripscript(s: string) {
  var pattern = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{ }【】‘；：”“'。，、？]"
  );
  var rs = "";
  for (var i = 0; i < s.length; i++) {
    rs = rs + s.substr(i, 1).replace(pattern, "");
  }
  return rs;
}
//验证密码
export function validatepass(value: string) {
  let reg = /^[a-zA-Z]\w{5,15}$/;
  return reg.test(value) ? false : true;
}
//验证验证码
export function validateVcode(value: string) {
  let reg = /^[a-z0-9]{6}$/;
  return reg.test(value) ? false : true;
}
//验证手机号
export function validatephone(value: string) {
  let reg = /^1(3|4|5|7|8)\d{9}$/;
  return reg.test(value) ? false : true;
}
