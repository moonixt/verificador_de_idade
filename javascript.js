function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked)  {
            genero = 'Homem'
            if (idade >= 0 && idade <10) {
                //Bebe
                img.setAttribute('src','./imagens/bebe0.jpg')
            } else if (idade >=10 && idade < 21) {
                //Jovem
                img.setAttribute('src','./imagens/jovem0.jpg')

            } else if (idade >= 21 && idade <60){
                //Adulto
                img.setAttribute('src','./imagens/adulto0.jpg')

            } else if (idade >=60){
                //Idoso
                img.setAttribute('src','./imagens/idoso0.jpg')

            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //Bebe
                img.setAttribute('src','./imagens/bebe1.jpg')
            } else if (idade >=10 && idade < 21) {
                //Jovem
                img.setAttribute('src','./imagens/jovem1.jpg')

            } else if (idade >= 21 && idade <60){
                //Adulto
                img.setAttribute('src','./imagens/adulto1.jpg')

            } else if (idade >=60){
                //Idoso
                img.setAttribute('src','./imagens/idoso1.jpg')

            }
        }
        res.style.textAlign = 'center '
        res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
