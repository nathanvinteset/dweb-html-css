function fotos(){
    var galeria = document.getElementById('galeria')

    galeria.innerHTML = '<p> Isso aqui voces ja sabem fazer.</p>'
    galeria.innerHTML = '<img id = "imgem" height="350" src="pexels-gustavo-peres-7144269.jpg"</img>'

    var img = document.createElement('img')
    img.setAttribute('src', 'pexels-gustavo-peres-7144269.jpg')
    img.setAttribute('alt', 'imgem de chocolate')
    img.setAttribute('height', '150')

    galeria.appendChild(img)


}