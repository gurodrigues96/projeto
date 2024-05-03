function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar tag img

    const img = document.querySelector("#profile img")

    // substituir a imagem

    if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', 'assets/avatar-light.png')
    } else {
    
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', 'assets/avatar.png')
    }

    if(html.classList.contains('light')) {
        img.setAttribute('alt', 'Foto de Gustavo Rodrigues diferente')
    } else {
        img.setAttribute('alt', 'Foto diferente de Gustavo Rodrigues')
    }

}