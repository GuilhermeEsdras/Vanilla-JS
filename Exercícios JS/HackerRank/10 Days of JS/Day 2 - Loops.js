function vowelsAndConsonants(s) {
    const vowels = []
    const arr = []
    for (var i = 0; i < s.length; i++)
        if (['a', 'e', 'i', 'o', 'u'].includes(s[i])) vowels.push(s[i])
        else arr.push(s[i])
    vowels.concat(arr).forEach(e => {
        console.log(e)
    })
}
vowelsAndConsonants("javascriptloops")