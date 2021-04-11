var numero = 1
{
    var numero = 2 // sobrescreve 1
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// ambos valem 2