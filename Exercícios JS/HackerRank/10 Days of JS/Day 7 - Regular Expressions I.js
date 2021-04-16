function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    var re = /^([aeiou]).*\1$/
    
    
    /*
     * Do not remove the return statement
     */
    return re;
}


/* .:: Meus testes ::. */
const strings = ['abcde', 'abcda', 'aabcdaa', 'aeqwae', 'ouqweru']

strings.forEach((e)=>{
  const result = regexVar().test(e)
  console.log(e, result)
})