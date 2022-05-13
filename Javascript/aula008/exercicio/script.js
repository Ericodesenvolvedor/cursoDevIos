const contador = () => {
    let c = 1
    let multiplicador = 2

    while (c <= 10){
        console.log(`${multiplicador} x ${c} =  ${multiplicador * c}`)
        c++
    }

}
contador()