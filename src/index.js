let nameChar = "Mouse Punk"
let xp = 1000
let lvl

if (xp <= 1000) {
    lvl = "Ferro"
}
else if (xp >= 1001 && xp <= 2000) {
    lvl = "Bronze"
}
else if (xp >= 2001 && xp <= 5000) {
    lvl = "Prata"
}
else if (xp >= 5001 && xp <= 7000) {
    lvl = "Ouro"
}
else if (xp >= 7001 && xp <= 8000) {
    lvl = "Platina"
}
else if (xp >= 8001 && xp <= 9000) {
    lvl = "Ascendente"
}
else if (xp >= 9001 && xp <= 10000) {
    lvl = "Imortal"
}
else if (xp >= 10001) {
    lvl = "Radiante"
}

console.log(`O Herói de nome ${nameChar} está no nível de ${lvl} com exatos ${xp} de XP's`)

