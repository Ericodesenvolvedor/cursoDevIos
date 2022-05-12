// 1- Criar um array de colaboradores 
// 2- Pelo menos 5 pessoas
// 3- informando Nome, Salário e vínculo (CLT/PJ)
// 4- Cálculo do valor de INSS

const colaboradores = [

    {
        nome: 'Eric',
        salario: 1200,
        vinculo: 'CLT',
        inss: ''
    } ,

    {
        nome: 'Renata',
        salario: 3500,
        vinculo: 'PJ',
        inss: ''
    } ,

    {
        nome: 'Felipe',
        salario: 2000,
        vinculo: 'PJ',
        inss: ''
    } ,

    {
        nome: 'Samantha',
        salario: 5600,
        vinculo: 'CLT',
        inss: ''
    } ,

    {
        nome: 'Yuri',
        salario: 1800,
        vinculo: 'CLT',
        inss: ''
    } ,

]

for (var index = 0;index < colaboradores.length; index++) {

    let salarioColaborador = colaboradores[index].salario;
    let aliquota;

    // FUNÇÃO PARA CALCULAR O SALÁRIO COM INSS
    const calcularInss = (salario, porcentagem) => {
        let inssValor = salario * (porcentagem / 100) + salario
         
        // FUNÇÃO PARA DISTRIBUIR VALORES AOS DEVIDOS VINCULOS
        const checarVinculo = () => {
            if (colaboradores[index].vinculo == 'PJ') {
                colaboradores[index].inss = 0
            } 

            else {
                colaboradores[index].inss = inssValor
            }
        }

        checarVinculo()
    }

    // CHECANDO SALARIO E CHAMANDO FUNÇÃO.
    if (salarioColaborador <= 1212) {
        aliquota = 7.5;
        calcularInss(salarioColaborador, aliquota)
    }

    else if (salarioColaborador <= 242735) {
        aliquota = 9;
        calcularInss(salarioColaborador, aliquota)
    }

    else if (salarioColaborador <= 364103) {
        aliquota = 12;
        calcularInss(salarioColaborador, aliquota)
    }

    else if (salarioColaborador <= 708722 || salarioColaborador > 708722) {
        aliquota = 14;
        calcularInss(salarioColaborador, aliquota)
    }
    
    // FORMATA O VALOR NUMBER PARA MOEDA(R$)
    const transformarMoeda = () => {
        let inss = Number(colaboradores[index].inss).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        return inss
    }

    // EXIBINDO NO CONSOLE
    if (colaboradores[index].inss != 0) {
        console.log(`Colaborador(a) ${colaboradores[index].nome} do vinculo ${colaboradores[index].vinculo} vai receber ${transformarMoeda()} por suas contribuições`)

    } else {
        console.log(`Colaborador(a) ${colaboradores[index].nome} do vinculo ${colaboradores[index].vinculo} não vai receber inss, ou seja contribuições == ${transformarMoeda()}.`)
    }
}