var cliques = 0

function contar(){
    cliques++
    resultado.innerHTML = `<p>o contador esta com <mark>${cliques}</mark> cliques.</p>`
}
function zerar(){
    cliques = 0
    resultado.innerHTML = `<p>o contador esta com <mark>${cliques}</mark> cliques.</p>`
}