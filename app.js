const quiz = [
    {
        question: 'JavaScript is a ___ -side programming language.',
        a: 'Client',
        b: 'Server',
        c: 'Both',
        d: 'None',
        ans: 'third'
    },

    {
        question: 'What is the capital of India ?',
        a: 'Delhi',
        b: 'Mumbai',
        c: 'Kolkata',
        d: 'None',
        ans: 'first'
    },
    {
        question: 'What is the national animal of India ?',
        a: 'Cheetah',
        b: 'Lion',
        c: 'Tiger',
        d: 'None',
        ans: 'third'
    },
    {
        question: 'What is the capital of Odisha ?',
        a: 'Berhampur',
        b: 'Bhuvaneswar',
        c: 'Cuttack',
        d: 'None',
        ans: 'second'
    },
    {
        question: 'What is 9+2?',
        a: '10',
        b: '11',
        c: '12',
        d: 'None',
        ans: 'second'
    },
]

const question = document.querySelector('.question');
const opt1 = document.getElementById("opt1")
const opt2 = document.getElementById("opt2")
const opt3 = document.getElementById("opt3")
const opt4 = document.getElementById("opt4")
const submit = document.getElementById('submit');
const answers = document.querySelectorAll('.options');
const showScore = document.getElementById('showScore')
const main = document.querySelector('.main');
const next = document.getElementById('next')
const prev = document.getElementById('prev');
const user = document.querySelector('.user')

let index = 0;
let score = 0;

const loadQuestion = () => {
    question.textContent = quiz[index].question;
    opt1.textContent = quiz[index].a;
    opt2.textContent = quiz[index].b;
    opt3.textContent = quiz[index].c;
    opt4.textContent = quiz[index].d;
}
loadQuestion();

const getCheckAns = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    })
    return answer;
}
const deselectAll = () => {
    answers.forEach((currElem) => {
        currElem.checked = false;
    })
}

submit.addEventListener('click', () => {
    const checkedAns = getCheckAns();
    console.log(checkedAns);

    if (checkedAns == quiz[index].ans) {
        score++;
        main.style.backgroundColor = 'green'
        if (index == 0) {
            document.getElementById('1').style.backgroundColor = 'green'
        } else if (index == 1) {
            document.getElementById('2').style.backgroundColor = 'green'
        } else if (index == 2) {
            document.getElementById('3').style.backgroundColor = 'green'
        } else if (index == 3) {
            document.getElementById('4').style.backgroundColor = 'green'
        } else if (index == 4) {
            document.getElementById('5').style.backgroundColor = 'green'
        }

    } else {
        main.style.backgroundColor = 'red'
        if (index == 0) {
            document.getElementById('1').style.backgroundColor = 'red'
        } else if (index == 1) {
            document.getElementById('2').style.backgroundColor = 'red'
        } else if (index == 2) {
            document.getElementById('3').style.backgroundColor = 'red'
        } else if (index == 3) {
            document.getElementById('4').style.backgroundColor = 'red'
        } else if (index == 4) {
            document.getElementById('5').style.backgroundColor = 'red'
        }
    }
    console.log(score)



})
function nextCall (){
    index++;

    deselectAll();
    main.style.backgroundColor = '#c7eceea9'


    if (index < quiz.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
            <h3>${getname}  Your Score is</h3>
            <h4>${score}/${quiz.length}</h4>
            <button class = 'btn' onclick= 'location.reload()' >Restart</button>
        `
        showScore.classList.remove('showArea');
        clearInterval(a);
    }
}
next.addEventListener('click', () => {
   nextCall();
   time=30;
})

let time = 30;
let a= setInterval(() => {
    if (time > 0) {
        time--;
        document.getElementById('time').innerHTML = time;
    }else{
        time=30;
        nextCall();
    } 
}, 1000);

let getname = sessionStorage.getItem('name')
user.textContent = getname;