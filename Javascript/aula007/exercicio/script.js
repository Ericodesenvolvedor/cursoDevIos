// 1- Criar um array de colaboradores 
// 2- Pelo menos 5 pessoas
// 3- informando Nome, Salário e vínculo (CLT/PJ)
// 4- Cálculo do valor de INSS

const colaboradores = [

    {
        nome: 'Eric',
        salario: 1300,
        vinculo: 'CLT',
        valorInss: 
    } ,

    {
        nome: 'Renata',
        salario: 3500,
        vinculo: 'PJ'
    } ,

    {
        nome: 'Felipe',
        salario: 2000,
        vinculo: 'PJ'
    } ,

    {
        nome: 'Samantha',
        salario: 5600,
        vinculo: 'CLT'
    } ,

    {
        nome: 'Yuri',
        salario: 1800,
        vinculo: 'CLT'
    } ,

]

const salarioEric = colaboradores[0].salario
const salarioRenata = colaboradores[1].salario
const salarioFelipe = colaboradores[2].salario
const salarioSamantha = colaboradores[3].salario
const salarioYuri = colaboradores[4].salario

function calcularInss(salario, aliquota, valorFixo) {

}