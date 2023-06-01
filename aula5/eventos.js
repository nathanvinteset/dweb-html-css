var resultado_soma = document.getElementById("resultado-soma")
var resultado_sub = document.getElementById("resultado-sub")

function somar(){
    var n1 = Number.parseInt(document.getElementById("n1").value)
    var n2 = Number.parseInt(document.getElementById("n2").value)
    resultado_soma.innerHTML = `a soma entre ${n1} é ${n2} e igual a: ${n1+n2}`
}

function subtrair(){
    var sub1 = Number.parseInt (document.getElementById("sub1").value)
    var sub2 = Number.parseInt (document.getElementById("sub2").value)
    resultado_sub.innerHTML = `a subtraçao entre ${sub1} é ${sub2} e igual a: ${sub1-sub2}`


}





