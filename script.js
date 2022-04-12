for (let i = 1; i <= 100; i++) {
   const box = document.createElement('div')
   box.classList.add('box')
   document.querySelector('.container').appendChild(box)
}

const btn = document.querySelector('.btn')
const randomColorBlock = document.querySelectorAll('.box')

const randomHex = () => {
   const chars = '0123456789abcdef'
   const colorLength = 6
   let color = ''

   for (let i = 1; i <= colorLength; i++) {
      const randomColorSign = Math.floor(Math.random() * chars.length)
      color += chars.substring(randomColorSign, randomColorSign + 1)
   }
   return '#' + color
}

function addColor () {
   let colorArray = []
   let newColor
   for (let i = 1; i <= randomColorBlock.length; i++) {
      newColor = randomHex()
      colorArray.push(newColor)
   }
   colorArray.sort()
   randomColorBlock.forEach((el, i) => {
      el.style.backgroundColor = colorArray[i]
      el.innerHTML = colorArray[i]
   })
}