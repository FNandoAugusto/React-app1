const solucao = () => {
    let tarifaMin = 0
    let tarifaKm = 0

    let min = 15  // 50 centavos por minuto

    let km = 25  //  70 centavos por quilometro

    if (min > 20) {
        tarifaMin = 50 * min + (min - 20) * 30


    } else {
        tarifaMin = 50 * min
    }
    if (km > 15) {
        tarifaKm = 70 * km + (km - 10) * 50
    } else {
        tarifaKm = 70 * km
    }

    let progressaoTarifa = tarifaMin + tarifaKm

    let gorjeta = false

    let valorgorjeta = 0
    if (progressaoTarifa <= 75) {
        gorjeta = true
    } if (gorjeta = true) {
        if (min > km) {
            valorgorjeta = km * 1.1
        } else if (km > min) {
            valorgorjeta = min * 1.1
        }
    } else {
        valorgorjeta = 0
    }
    //
    console.log(progressaoTarifa + valorgorjeta)
    console.log(tarifaKm, tarifaMin)
}
solucao()
