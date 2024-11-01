let acordianQuestion = document.querySelector(".acordian-question")
let numQuestion = document.querySelector(".n-uestion")
let show = false
let ajouterQuestion = document.querySelector(".ajouter-question")
let ajouterQuestionForm = document.querySelector(".addQuestion-form")
let cancelAjouterQuestion = document.querySelector('.cancel')
let addBtn = document.querySelector(".add-btn-question-form")
let nouvellQuestion = document.querySelector(".input-question")
let nouvellReponse = document.querySelector(".input-reponse")
let allQuestion = [
  
]

function showAllAnswers(){
  numQuestion.innerHTML = `Nombre de question: ${allQuestion.length}`

  acordianQuestion.innerHTML = ""
  for (let i = 0; i < allQuestion.length; i++) {
   
    acordianQuestion.innerHTML += `
      <div class="question-et-reponse">
              <div type="button" onclick="showAnswer(${i})" class="text-white bg-gradient-to-r mb-1 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left me-2  cursor-pointer">${allQuestion[i].question}</div>
    
              <p style="display: none;" data-attribut="${i}" class="reponse py-3 px-4 bg-slate-500 mt-0 rounded-md">${allQuestion[i].reponse}</p>
            </div>
          </div>
    `
  }
}

showAllAnswers()


let slectedOption = -1

function showAnswer(index){
  
  let allReponse = document.querySelectorAll(".reponse")
  allReponse.forEach((e)=>{
    e.style.display = "none"
    if (e.getAttribute("data-attribut") == index) {
      if (!show) {        
        e.style.display = "block"
      }
      show = !show
      console.log(show);
      
    }
    
  })

}


ajouterQuestion.addEventListener("click" , ()=>{
  ajouterQuestionForm.style.display = "block"
})

cancelAjouterQuestion.addEventListener("click", (e)=>{
  e.preventDefault()
  ajouterQuestionForm.style.display = "none"
})


addBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  if (nouvellQuestion.value != "" && nouvellReponse.value != "") {
    
    let obj = {
      question: nouvellQuestion.value,
      reponse: nouvellReponse.value
    }
  
    allQuestion.push(obj)
  
    nouvellQuestion.value = ""
    nouvellReponse.value = ""
    ajouterQuestionForm.style.display = "none"
  
    showAllAnswers()
  }
})