function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    if (hora >=5 && hora <12){
        msg.innerHTML = `Bom Dia! <br> agora são ${hora}:${minuto}`
        img.src = 'pexels-reynaldo-brigworkz-brigantty-771883.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
    }
    else if (hora >=12 && hora <18){
        msg.innerHTML = `Boa Tarde! <br> agora são ${hora}:${minuto}`
        img.src = 'pexels-mateusz-sałaciak-4275885.jpg'
        document.body.style.backgroundColor = '#b9846e  '
    }
    else {
        msg.innerHTML = `Boa Noite! <br> agora são ${hora}:${minuto}`
        img.src = 'pexels-kristina-paukshtite-139922.jpg'
        document.body.style.backgroundColor = '#515154'
    }
}