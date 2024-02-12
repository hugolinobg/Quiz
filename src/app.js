const questions = [
  {
    question: "Qual é o nome do protagonista da série Harry Potter?",
    alternatives: [
      "Hermione Granger",
      "Ron Weasley",
      "Draco Malfoy",
      "Harry Potter",
    ],
    correct: 3,
  },
  {
    question:
      "Qual é a casa em que Harry é selecionado em sua chegada a Hogwarts?",
    alternatives: ["Sonserina", "Lufa-Lufa", "Grifinória", "Corvinal"],
    correct: 2,
  },
  {
    question: "Qual é o animal de estimação de Harry Potter?",
    alternatives: ["Sapo", "Coruja", "Gato", "Rato"],
    correct: 1,
  },
  {
    question: "Qual é a posição de quadribol que Harry joga em Hogwarts?",
    alternatives: ["Batedor", "Apanhador", "Goleiro", "Auror"],
    correct: 1,
  },
  {
    question: "Qual é o nome do vilão principal em Harry Potter?",
    alternatives: [
      "Voldemort",
      "Lucius Malfoy",
      "Bellatrix Lestrange",
      "Dolores Umbridge",
    ],
    correct: 0,
  },
  {
    question: "Qual é o feitiço usado para conjurar a Patrono?",
    alternatives: ["Expelliarmus", "Expecto Patronum", "Alohomora", "Lumos"],
    correct: 1,
  },
  {
    question:
      "Quem é o diretor da Escola de Magia e Bruxaria de Hogwarts no início da série?",
    alternatives: [
      "Alastor Moody",
      "Severo Snape",
      "Minerva McGonagall",
      "Alvo Dumbledore",
    ],
    correct: 3,
  },
  {
    question: "O que a varinha de Harry Potter tem em seu núcleo?",
    alternatives: [
      "Pena de Fênix",
      "Pelo de Unicórnio",
      "Cabelo de Veela",
      "Escama de Dragão",
    ],
    correct: 0,
  },
  {
    question: "Qual é a posição de quadribol de Ron Weasley em Hogwarts?",
    alternatives: ["Batedor", "Apanhador", "Goleiro", "Auror"],
    correct: 2,
  },
  {
    question: "Qual é o nome do banco dos bruxos no mundo de Harry Potter?",
    alternatives: [
      "Gringotts",
      "Diagon Alley",
      "Borgin and Burkes",
      "Ollivanders",
    ],
    correct: 0,
  },
]

const quiz = document.getElementById("quiz")
const template = document.querySelector("template")
const showTotal = document.querySelector("#hits span")

const corrects = new Set()
const totalOfQuestions = questions.length
showTotal.textContent = corrects.size + " de " + totalOfQuestions

for (const item of questions) {
  //pegando todo o nó template no html
  const quizItem = template.content.cloneNode(true)
  //pegando o h3 e adiciona as pergutas
  quizItem.querySelector("h3").textContent = item.question

  for (let answer of item.alternatives) {
    //pegando o nó dt no html
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    //pegando o spna e adiciona as alternativas
    dt.querySelector("span").textContent = answer
    dt.querySelector("input").setAttribute(
      "name",
      `question-${questions.indexOf(item)}`
    )
    dt.querySelector("input").value = item.alternatives.indexOf(answer)
    //coloca as alternativas na tela

    dt.querySelector("input").onchange = (event) => {
      const itCorrect = event.target.value == item.correct

      corrects.delete(item)

      if (itCorrect) {
        corrects.add(item)
      }

      showTotal.textContent = corrects.size + " de " + totalOfQuestions
    }

    quizItem.querySelector("dl").appendChild(dt)
  }
  //remove a alternativa "resposta A" na tela
  quizItem.querySelector("dl dt").remove()
  //coloca as perguntas na tela
  quiz.appendChild(quizItem)
}
