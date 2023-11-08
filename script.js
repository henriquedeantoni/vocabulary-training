/* funcao cria array com numeros aleatorios sem repeticao tamanho Nlength*/



function GenerateArrayRandon(Nlength) {
  let arrayN = [];

  while (arrayN.length < Nlength) {
    //enquanto comprimento da array for menor que o tamanho que se deseja alcançar Nlength
    const randomElement = Math.floor(Math.random() * Nlength); // cria um numero aleatorio de 0 ate Nlength
    //console.log( randomElement)
    let keyElement = true; //elemento lógico que determina se deve adicionar um elemento novo a array
    for (i = 0; i < arrayN.length; i++) {
      //percorre todos os elementos da array
      if (randomElement === arrayN[i]) {//se achar um elemento anterior que é igual ao novo aleatorio criado
        keyElement = false;
        break; //para de percorrer e descarta o numero aleatorio
      }
    }
    if (keyElement != false) {
      //se não achou nenhum igual então keyElement=true
      arrayN.push(randomElement); //adiciona o novo numero aleatorio no final da array
    }
  }
  return arrayN;
}


function getRandonName(cardList, number, nameList) {
  let arrayNames = ['']

  let name = cardList[number].name

  let randomIndex = Math.floor(Math.random() * nameList.length)

  if(nameList[randomIndex].name!==name){
    arrayNames[0] = nameList[randomIndex].name
  }

  while(arrayNames.length<4){
    let innerIndex = Math.floor(Math.random() * nameList.length)
    let key=true
    for(i=0; i<arrayNames.length; i++){
      if(nameList[innerIndex].name!==name && nameList[innerIndex].name!==arrayNames[i]){
        key=true
      }else{key=false}
    }
    if(key==true){
      arrayNames.push(nameList[innerIndex].name)
    }
  }


  const arrayRandomAnswers = GenerateArrayRandon(5)
  let newArray=[0,0,0,0,0]
  arrayRandomAnswers.forEach((element, index)=>{
    if(element===4){
      newArray[index]='#answer'
    }else{
      newArray[index]=arrayNames[element]
    }
  })

  return newArray
}


function refreshImage(cardList, number, arrayNames) {
  const imageGameBox = document.querySelector(".picture-image")
  const formInsertion = document.querySelector(".question")

  imageGameBox.src = cardList[number].src  
  imageGameBox.name = cardList[number].name  

    
    let htmlSection = `<p class="tittle-form">Resposta: </p>`

    arrayNames.forEach((item,index) => {


      if (item === '#answer') {
      
          htmlSection += `<label>
        <input type="checkbox" class="radio" value="1" name="${cardList[number].name}"> ${cardList[number].name}
        </label>`
      } else {

        //console.log(index)
          htmlSection += `<label>
        <input type="checkbox" class="radio" value="1" name="${arrayNames[index]}"> ${arrayNames[index]}
        </label>`
        index ++
        
      }
    })

    console.log(htmlSection)

    formInsertion.innerHTML = htmlSection

}


/*
function putAnswer(){
  const getAnswer = document.querySelectorAll(".radio")
  //console.log(getAnswer)

  let findWord 

  getAnswer.forEach(element=>{
    if(element.checked === true ){
      findWord = element.name
    } 
  })
  return findWord
}
*/


function putAnswer(){
  const getAnswer = document.querySelectorAll(".radio")
  //console.log(getAnswer)

  let findWord 

  getAnswer.forEach(element=>{
    if(element.checked === true ){
      findWord = element.name
    } 
  })

  const maxChecks = 1
  let selectedCount = 0
  
  document.querySelector('.question').addEventListener('click', event => {
    if (event.target.type === 'checkbox') {
      selectedCount = event.target.checked
        ? selectedCount + 1
        : selectedCount - 1
    }
  
    if (selectedCount >= maxChecks) {
      [...document.querySelectorAll('input:not(:checked)')].forEach(input => input.disabled = true)
    } else {
      [...document.querySelectorAll('input')].forEach(input => input.disabled = false)
    }
  })

  return findWord
}


function compareAnswer(nameGiven){
  const imageCheck = document.querySelector(".picture-image").name

  if(nameGiven === imageCheck){
    return true
  }else{
    return false
  }
}


function responseAnswer(compareAnswer, indexWord, maxWords){

  if(compareAnswer===true && indexWord<maxWords)
  {
    alert("Resposta Correta")
  }else if (compareAnswer===false && indexWord<maxWords ){
    alert("Resposta Errada")
  }else{
    alert("FIM DE JOGO")
  }

  //console.log(indexWord)
}



/*  Inicia o Jogo  */

const maxWords=29
let indexWord=1



    function waitClick(){
      //refreshImage(cardList, indexWord)  
      return new Promise(resolve =>{
        const nextPlay = document.querySelector(".next-button") 

        nextPlay.addEventListener("click", ()=>{
          resolve()
        })
      })
    }

    let name=getRandonName(cardList, 0, nameList)
    refreshImage(cardList, indexWord, name)

    async function respondeAnswer(indexWord, maxWords, name){

      await waitClick()

      if(indexWord===maxWords){
        return alert("END OF GAME") 
      }
      
      let word = compareAnswer(putAnswer())        
      
      let htmlAudio = ''

      if(word==true && indexWord<maxWords){
        const audioSection = document.querySelector(".audio-box") 

        htmlAudio += `<div class="audio-box"><p id="message">Acertou!!</p><audio id="audioSection" controls autoplay>
        <source src="https://translate.google.com.br/translate_tts?ie=UTF-8&q=${putAnswer()}&tl=en&client=tw-ob">
        </audio></div>`

        audioSection.innerHTML=htmlAudio

      //let named = getedRandonName(cardList, indexWord, nameList)        
        //alert("resposta correta")
        //window.open(`https://translate.google.com.br/translate_tts?ie=UTF-8&q=${putAnswer()}&tl=en&client=tw-ob`, 'newwindow','height=220, width=320, top=700, left=200');
        indexWord++
        let newName = getRandonName(cardList, indexWord, nameList)

        refreshImage(cardList, indexWord, newName)
        respondeAnswer(indexWord, maxWords, newName)
        console.log("ok")
        console.log(indexWord)
      }
      else if (word==false && indexWord<maxWords){

        const audioSection = document.querySelector(".audio-box") 

        htmlAudio += `<div class="audio-box"><p id="message">Errado, tente novamente!!</p></div>`

        audioSection.innerHTML=htmlAudio

        refreshImage(cardList, indexWord, name)
        respondeAnswer(indexWord, maxWords, name)
      }
    }

      respondeAnswer(indexWord, maxWords,name)
 



