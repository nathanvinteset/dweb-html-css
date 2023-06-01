function cadastro() {
    var nome = prompt('qual o nome do aluno?')
    var nota1 = Number.parseInt(prompt(`qual foi a primeira nora do aluno ${nome}`))
    var nota2 = Number.parseInt(prompt(`qual foi a segunda nota do aluno ${nome}`))

    var media =   (nota1 + nota2) / 2  
    
    


    if (media >= 7) {
    resultado.innerHTML = `<p>calculando a media final do ${nome}</p>`

    resultado.innerHTML += `<p>as notas obtidas forao ${nota1} e ${nota2}</p>` 

    resultado.innerHTML += `<p>a media final sera ${media}</p>`

    resultado.innerHTML += `<p>o aluno esta ${nome} esta aprovado</p>`
    } 
    else if (media < 5.5) {
        resultado.innerHTML = `<p>calculando a media final do ${nome}</p>`

    resultado.innerHTML += `<p>as notas obtidas forao ${nota1} e ${nota2}</p>` 

    resultado.innerHTML += `<p>a media final sera ${media}</p>`

    resultado.innerHTML += `<p>o aluno esta ${nome} esta reprovado</p>`
    }
    else{
        resultado.innerHTML = `<p>calculando a media final do ${nome}</p>`

    resultado.innerHTML += `<p>as notas obtidas forao ${nota1} e ${nota2}</p>` 

    resultado.innerHTML += `<p>a media final sera ${media}</p>`

    resultado.innerHTML += `<p>o aluno esta ${nome} esta de recuperaçao</p>`
    }
}
