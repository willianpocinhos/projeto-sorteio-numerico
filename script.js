const result = document.querySelector('.result')

function sortear() {
    document.querySelector('.circle').style.visibility = 'visible'
    document.querySelector('.circle').style.transition = 'width: 3s'

    const min = Math.ceil(document.querySelector('.min').value)
    const max = Math.floor(document.querySelector('.max').value)
    
    result.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min
}