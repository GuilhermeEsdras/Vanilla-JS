const os = require('os')

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    try {
        if (a == 0)
            throw new Error("Zero Error")
        else if (a < 0)
            throw new Error("Negative Error")
        else
            return "YES"
    } catch (e) {
        return e.message
        // console.log(msg)
    }
}

console.log(isPositive(0));

// process.stdout.write('Number: ')
// process.stdin.on('data', data => {
//     // let dado = data.toString().replace(`${os.EOL}`, '')
//     // dado = Number(dado)

//     process.stdout.write(isPositive(Number(data)))
//     process.exit()
// })