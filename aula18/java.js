function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoUsuario = Number(document.getElementById('input_ano').value)
    var resultado = document.getElementById('resultado')
    var idade = anoAtual - anoUsuario

    resultado.innerHTML = `<p>Voce esta com ${idade}  anos.</p>`

    var input_radio = document.getElementsByName('radsex')
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id', 'foto') 

    console.log(input_radio)

    if(input_radio[0].checked){
        genero = ('Homem')
        if(idade >= 0 && idade < 12){
            img.setAttribute('src', 'img/homem (4).png')
            img.setAttribute('height', '150')
        }
        else if(idade < 21){
            img.setAttribute('src', 'img/homem (3).png')
            img.setAttribute('height', '150')
        }
        else if(idade < 50){
            img.setAttribute('src', 'img/homem (2).png')
            img.setAttribute('height', '150')
        }
        else{
            img.setAttribute('src', 'img/homem (1).png')
            img.setAttribute('height', '150')
        }
    }
    else{
        genero = ('Mulher')
        if(idade >= 0 && idade < 12){
            img.setAttribute('src', 'img/mulher (3).png')
            img.setAttribute('height', '150')
        }
        else if(idade < 21){
            img.setAttribute('src', 'img/mulher (4).png')
            img.setAttribute('height', '150')
        }
        else if(idade < 50){
            img.setAttribute('src', 'img/mulher (1).png')
            img.setAttribute('height', '150')
        }
        else{
            img.setAttribute('src', 'img/mulher (2).png')
            img.setAttribute('height', '150')
        }
    }  

    resultado.appendChild(img)
    
}


