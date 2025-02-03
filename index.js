

const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const menuList = document.querySelector('#menuList')
const heroBtn = document.querySelector('.hero-btn')
const resetBtn = document.querySelector('.reset-btn')
const box1 = document.querySelector('.box-1')
const box2 = document.querySelector('.box-2')
const box3 = document.querySelector('.box-3')
const box4 = document.querySelector('.box-4')
const firstHexCode = document.querySelector('#first-hex-code')
const secondHexCode = document.querySelector('#second-hex-code')
const thirdHexCode = document.querySelector('#third-hex-code')
const fourthHexCode = document.querySelector('#fourth-hex-code')




const hexaDecimal= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

menuOpen.addEventListener('click', ()=>{
    if(menuList.style.maxHeight == '0px'){
        menuList.style.maxHeight = '360px'

    }

    if (menuOpen){
        menuOpen.style.display= 'none'
        menuClose.style.display = 'inline'
    }
})

menuClose.addEventListener('click', ()=>{

    if (menuOpen){
        menuList.style.maxHeight = '0px'
        menuOpen.style.display= 'inline'
        menuClose.style.display = 'none'
    }
})


function generateRandomNumber(){
  let randomNumber =  Math.floor(Math.random() * hexaDecimal.length)
  return randomNumber
}

heroBtn.addEventListener("click", ()=>{

    //for first color box
    let hexCodeForFirstBox = "#"
    for (i=0; i < 6; i++){
        hexCodeForFirstBox +=  hexaDecimal[generateRandomNumber()]
    }



    box1.style.backgroundColor = hexCodeForFirstBox
    firstHexCode.textContent = hexCodeForFirstBox 

    //for second color box
    let hexCodeForSecondBox = "#"
    for(let x = 0 ; x < 6 ; x++){
        hexCodeForSecondBox +=  hexaDecimal[generateRandomNumber()]

    }

    box2.style.backgroundColor = hexCodeForSecondBox
    secondHexCode.textContent = hexCodeForSecondBox 


     //for third color box
     let hexCodeForThirdBox = "#"
     for(let y = 0 ; y < 6 ; y++){
         hexCodeForThirdBox +=  hexaDecimal[generateRandomNumber()]
 
     }
 
     box3.style.backgroundColor = hexCodeForThirdBox
     thirdHexCode.textContent = hexCodeForThirdBox 


       //for fourth color box
       let hexCodeForFourthBox = "#"
       for(let z = 0 ; z < 6 ; z++){
           hexCodeForFourthBox +=  hexaDecimal[generateRandomNumber()]
   
       }
   
       box4.style.backgroundColor = hexCodeForFourthBox
       fourthHexCode.textContent = hexCodeForFourthBox 

})


resetBtn.addEventListener("click", ()=>{

    //for first color box
    let hexCodeForFirstBox = "#9D9D9D"

    box1.style.backgroundColor = hexCodeForFirstBox
    firstHexCode.textContent = hexCodeForFirstBox 

        //for second color box
        let hexCodeForSecondBox = "#9D9D9D"
    
        box2.style.backgroundColor = hexCodeForSecondBox
        secondHexCode.textContent = hexCodeForSecondBox 
    
    
         //for third color box
         let hexCodeForThirdBox = "#9D9D9D"
     
         box3.style.backgroundColor = hexCodeForThirdBox
         thirdHexCode.textContent = hexCodeForThirdBox 
    
    
           //for fourth color box
           let hexCodeForFourthBox = "#9D9D9D"
          
           box4.style.backgroundColor = hexCodeForFourthBox
           fourthHexCode.textContent = hexCodeForFourthBox 
})
