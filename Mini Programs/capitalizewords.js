function titleCase(str) {
    for (let c in str)
        if (c == 0 || str[c-1] == ' ') {
            let code = str.charCodeAt(c);
            str[c] = String.fromCharCode(code - 32);
        }
    return str;
  }
  
console.log(titleCase("i'm a little tea pot"));