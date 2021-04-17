const os = require('os')

function getGrade(score) {
    let grade;
    // Write your code here
    const filtra = (sc, min, max) => sc > min && sc <= max

    if (filtra(score, 25, 30)) grade = 'A'
    else if (filtra(score, 20, 25)) grade = 'B'
    else if (filtra(score, 15, 20)) grade = 'C'
    else if (filtra(score, 10, 15)) grade = 'D'
    else if (filtra(score, 5, 10)) grade = 'E'
    else grade = 'F'
    
    return grade;
}

process.stdout.write('Score: ')
process.stdin.on('data', data => {
    let dado = data.toString().replace(`${os.EOL}`, '')
    dado = Number(dado)

    process.stdout.write(getGrade(dado))
    process.exit()
})