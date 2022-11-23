var agora  = new Date()

var diaSemana = agora.getDay()

/*
0 - DOM
1 - SEG
2 - TER
3 - QUA
4 - QUI
5 - SEX
6 - SAB
*/

console.log(diaSemana)

switch(diaSemana){
    case 0:
        console.log('Dom')
        break
    
    case 1:
        console.log('Seg')
        break

    case 2:
        console.log('Ter')
        break

    case 3:
        console.log('Qua')
        break

    case 4:
        console.log('Qui')
        break

    case 5:
        console.log('Sex')
        break

    case 6:
        console.log('Sab')
        break

    default:
        console.log('Dia inválido')
        break
}