const quizData = [
  {
    question: "1) Identify the output of the following program.",
    code: 'public class Test{ \n public static void main(String[] args){ \nString str1 = "one"; \nString str2 = "two";\nSystem.out.println(str1.concat(str2));\n} \n}',
    a: "one",
    b: "two",
    c: "onetwo",
    d: "twoone",
    correct: "c",
  },
  {
    question:
      "2) Where does the system stores parameters and local variables whenever a method is invoked?",
    code: "",
    a: "Heap",
    b: "Stack",
    c: "Array",
    d: "Tree",
    correct: "b",
  },
  {
    question: "3) Identify the modifier which cannot be used for constructor.",
    code: "",
    a: "public",
    b: "protected",
    c: "private",
    d: "static",
    correct: "d",
  },
  {
    question: "4) Identify the output of the following program.",
    code: "public class Solution { \npublic static void main(String args[]) { \nint i; \nfor (i = 1; i < 6; i++) { \n} \nSystem.out.println(i); \n} \n}",
    a: "3",
    b: "4",
    c: "5",
    d: "6",
    correct: "d",
  },
  {
    question: "5) What is the use of the final keyword in Java?",
    code: "",
    a: "When a class is made final, a subclass of it can not be created.",
    b: "When a method is final, it can not be overridden.",
    c: "When  a variable is final, it can be assigned value only once.",
    d: "All of above",
    correct: "d",
  },
  {
    question: "6)  Predict the output?",
    code: "package main; \nclass T { \nint t = 20; \n} \nclass Main { \npublic static void main(String args[]) { \nT t1 = new T(); \nSystem.out.println(t1.t); \n} \n}",
    a: "20",
    b: "0",
    c: "Compiler Error",
    d: "t1.t",
    correct: "a",
  },
  {
    question: "7) Predict the output?",
    code: "package main; \nclass T { \nint t = 20; \n T(){ \n t = 40; \n} \n} \nclass Main { \npublic static void main(String args[]) { \nT t1 = new T(); \nSystem.out.println(t1.t); \n} \n}",
    a: "20",
    b: "40",
    c: "Compiler Error",
    d: "0",
    correct: "b",
  },
  {
    question: "8) Predict the output?",
    code: "class main { \n public static void main(String[] args) { \n int t; \n System.out.println(t); \n} \n}",
    a: "0",
    b: "Garbage Value",
    c: "Compiler Error",
    d: "Runtime Error",
    correct: "c",
  },
  {
    question:
      "9) Predict the output of following Java program  \n// Note static keyword after import.",
    code: 'import static java.lang.System.*; \nclass StaticImportDemo{ \npublic static void main(String args[]){ \nout.println("GeeksforGeeks"); \n} \n}',
    a: "GeeksforGeeks",
    b: "Compiler Error",
    c: "Runtime Error",
    d: "none of the above",
    correct: "a",
  },
  {
    question: "10) What is the output of the following JAVA program ?",
    code: 'public class Test { \npublic static void main(String[] args) { \nTest obj = new Test(); \nobj.start(); \n} \nvoid start() { \nString stra = "do"; \nString strb = method(stra); \nSystem.out.print(" : "+ strb); \n} \nString method(String stra){ \nstra = stra + "good"; \nSystem.out.print(stra); \nreturn stra; \n} \n}',
    a: "dogood : dogoodgood",
    b: "dogood : gooddogood",
    c: "dogood : dodogood",
    d: "dogood : dogood",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const codeEl = document.getElementById("code");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  codeEl.innerText = currentQuizData.code;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           
           `;
    }
  }
});
