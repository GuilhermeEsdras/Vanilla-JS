const os = require('os')

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        s = s.split("").reverse().join("")
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log(s);
    }
}

reverseString("Guilherme")
reverseString(1234)
// process.stdout.write('String: ')
// process.stdin.on('data', data => {
//     let dado = data.toString().replace(`${os.EOL}`, '')

//     process.stdout.write(reverseString(dado))
//     process.exit()
// })