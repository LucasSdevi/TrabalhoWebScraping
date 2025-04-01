function Alterando () {

    let mudando = document.getElementsByClassName("mw-page-title-main")
    for(let i = 0; i < mudando.length; i++){

        mudando[i].innerHTML = "Alterado!"
        
    }        
}
Alterando()
