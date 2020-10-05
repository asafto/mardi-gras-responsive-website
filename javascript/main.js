window.onload = () => {
  //setting interval for banners - replacing every 10 seconds
  let myBannerOneInterval = setInterval(bannerOneManager, 4000);
  let myBannerTwoInterval = setInterval(bannerTwoManager, 4000);
  let myBannerMobileInterval = setInterval(bannerMobileManager, 4000);

  //Handling picture and video media gallerie - fancybox JQuery
  fancyBoxController();

  // handling Counter
  counterController();
};

window.onscroll = () => {
  //setting sticky class for side banners
  stickyManager();
};

//start of banners javascript logic

//1. handling banners image transitions
let pcBanners = [
  `url("./images/banners/pc/banner1_pc.png")`,
  `url("./images/banners/pc/banner2_pc.png")`,
  `url("./images/banners/pc/banner3_pc.png")`,
  `url("./images/banners/pc/banner4_pc.png")`,
  `url("./images/banners/pc/banner5_pc.png")`,
  `url("./images/banners/pc/banner6_pc.png")`,
];

let mobileBanners = [
  `url("./images/banners/mobile/banner1_mobile.png")`,
  `url("./images/banners/mobile/banner2_mobile.png")`,
  `url("./images/banners/mobile/banner3_mobile.png")`,
  `url("./images/banners/mobile/banner4_mobile.png")`,
  `url("./images/banners/mobile/banner5_mobile.png")`,
  `url("./images/banners/mobile/banner6_mobile.png")`,
];

//Random banner selection from the banners array based on random numbers 0-5
const bannerOneManager = () => {
  let i = Math.floor(Math.random() * 6);
  document.querySelector('#bannerOne').style.backgroundImage = pcBanners[i];
};

const bannerTwoManager = () => {
  let i = Math.floor(Math.random() * 6);
  document.querySelector('#bannerTwo').style.backgroundImage = pcBanners[i];
};

const bannerMobileManager = () => {
  let i = Math.floor(Math.random() * 6);
  document.querySelector('#bannerMobile').style.backgroundImage =
    mobileBanners[i];
};

//2. handling sticky side banners on large screens

const stickyManager = () => {
  let bannerOne = document.querySelector('#bannerOne');
  let bannerTwo = document.querySelector('#bannerTwo');

  if (window.pageYOffset < 465) {
    bannerOne.classList.remove('sticky');
    bannerTwo.classList.remove('sticky');
    bannerOne.classList.remove('sticky2');
    bannerTwo.classList.remove('sticky2');
  } else if (window.pageYOffset > 465 && window.pageYOffset < 927) {
    bannerOne.classList.add('sticky');
    bannerTwo.classList.add('sticky');
    bannerOne.classList.remove('sticky2');
    bannerTwo.classList.remove('sticky2');
  } else {
    bannerOne.classList.add('sticky2');
    bannerTwo.classList.add('sticky2');
    bannerOne.classList.remove('sticky');
    bannerTwo.classList.remove('sticky');
  }
};

//end of banners logic

//3. start of gallery logic - JQuery fancybox

const fancyBoxController = () => {
  if (document.body.classList == 'media-page') {
    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: 'slide',
      trasitionEffect: 'circular',
      loop: true,
      buttons: [
        'zoom',
        'share',
        'slideShow',
        //"fullScreen",
        'download',
        'thumbs',
        'close',
      ],
    });

    $('[data-fancybox="video-gallery"]').fancybox({
      animationEffect: 'slide',
      trasitionEffect: 'circular',
      loop: true,
      buttons: [
        // "zoom",
        'share',
        // "slideShow",
        //"fullScreen",
        // "download",
        'thumbs',
        'close',
      ],
    });
  }
};

//end of gallery logic

//4. start of Trivia Quiz logic

//defining variables
const questions = [
  {
    question: 'This is question 1',
    answers: [
      {
        text: 'This is answer 1',
        correct: true,
      },
      {
        text: 'This is answer 2',
        correct: false,
      },
      {
        text: 'This is answer 3',
        correct: false,
      },
      {
        text: 'This is answer 4',
        correct: false,
      },
    ],
  },
  {
    question: 'This is question 2',
    answers: [
      {
        text: 'This is answer 1',
        correct: true,
      },
      {
        text: 'This is answer 2',
        correct: false,
      },
      {
        text: 'This is answer 3',
        correct: false,
      },
      {
        text: 'This is answer 4',
        correct: false,
      },
    ],
  },
  {
    question: 'This is question 3',
    answers: [
      {
        text: 'This is answer 1',
        correct: true,
      },
      {
        text: 'This is answer 2',
        correct: false,
      },
      {
        text: 'This is answer 3',
        correct: false,
      },
      {
        text: 'This is answer 4',
        correct: false,
      },
    ],
  },
  {
    question: 'This is question 4',
    answers: [
      {
        text: 'This is answer 1',
        correct: true,
      },
      {
        text: 'This is answer 2',
        correct: false,
      },
      {
        text: 'This is answer 3',
        correct: false,
      },
      {
        text: 'This is answer 4',
        correct: false,
      },
    ],
  },
  {
    question: 'This is question 5',
    answers: [
      {
        text: 'This is answer 1',
        correct: true,
      },
      {
        text: 'This is answer 2',
        correct: false,
      },
      {
        text: 'This is answer 3',
        correct: false,
      },
      {
        text: 'This is answer 4',
        correct: false,
      },
    ],
  },
  {
    question: 'This is question 6',
    answers: [
      {
        text: 'This is answer 1',
        correct: true,
      },
      {
        text: 'This is answer 2',
        correct: false,
      },
      {
        text: 'This is answer 3',
        correct: false,
      },
      {
        text: 'This is answer 4',
        correct: false,
      },
    ],
  },
  {
    question: 'This is question 7',
    answers: [
      {
        text: 'This is answer 1',
        correct: true,
      },
      {
        text: 'This is answer 2',
        correct: false,
      },
      {
        text: 'This is answer 3',
        correct: false,
      },
      {
        text: 'This is answer 4',
        correct: false,
      },
    ],
  },
  {
    question: 'This is question 8',
    answers: [
      {
        text: 'This is answer 1',
        correct: true,
      },
      {
        text: 'This is answer 2',
        correct: false,
      },
      {
        text: 'This is answer 3',
        correct: false,
      },
      {
        text: 'This is answer 4',
        correct: false,
      },
    ],
  },
  {
    question: 'This is question 9',
    answers: [
      {
        text: 'This is answer 1',
        correct: true,
      },
      {
        text: 'This is answer 2',
        correct: false,
      },
      {
        text: 'This is answer 3',
        correct: false,
      },
      {
        text: 'This is answer 4',
        correct: false,
      },
    ],
  },
  {
    question: 'This is question 10',
    answers: [
      {
        text: 'This is answer 1',
        correct: true,
      },
      {
        text: 'This is answer 2',
        correct: false,
      },
      {
        text: 'This is answer 3',
        correct: false,
      },
      {
        text: 'This is answer 4',
        correct: false,
      },
    ],
  },
];
let currentQuestionIndex, currentScoreCalc, targetScoreCalc, correctIndicator;

//mapping elements
const startButton = document.querySelector('#startButton');
const nextButton = document.querySelector('#nextButton');
const quizWrapper = document.querySelector('.quizWrapper');
const quizPopup = document.querySelector('.quizPopup');
const closeButton = document.querySelector('.quizPopupClose');
const questionContainer = document.querySelector('#questionContainer');
const questionElement = document.querySelector('#question');
const answersElement = document.querySelector('#answerButtons');
const currentScoreElement = document.querySelector('.score');
const targetScoreElement = document.querySelector('.targetScore');
const gameOverElement = document.querySelector('.gameOver');

//adding listeners
startButton.addEventListener('click', startGame);

closeButton.addEventListener('click', closeGame);

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  targetScoreCalc += 10;
  if (correctIndicator) {
    currentScoreCalc += 10;
    correctIndicator = false;
  }
  currentScoreElement.innerText = currentScoreCalc;
  targetScoreElement.innerText = targetScoreCalc;
  if (currentQuestionIndex <= questions.length - 1) {
    setNextQuestion();
  } else {
    nextButton.classList.add('hide');
    gameOverElement.classList.remove('hide');
    questionContainer.classList.add('hide');
    quizPopup.classList.remove('wrong');
    quizPopup.classList.remove('correct');
  }
});

quizWrapper.addEventListener('click', (e) => {
  if (e.target.className === 'quizWrapper') {
    closeGame();
  }
});

//functions

function startGame() {
  quizWrapper.classList.remove('hide');
  currentQuestionIndex = 0;
  currentScoreCalc = 0;
  targetScoreCalc = 0;
  correctIndicator = false;
  currentScoreElement.innerText = currentScoreCalc;
  targetScoreElement.innerText = targetScoreCalc;
  gameOverElement.classList.add('hide');
  questionContainer.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answersElement.append(button);
  });
}

function resetState() {
  clearStatus(quizPopup);
  nextButton.classList.add('hide');
  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    correctIndicator = true;
  }
  setStatus(quizPopup, correct);
  Array.from(answersElement.children).forEach((button) => {
    setStatus(button, button.dataset.correct);
  });
  if (currentQuestionIndex <= questions.length - 1) {
    nextButton.classList.remove('hide');
  }
}

function setStatus(element, correct) {
  clearStatus(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatus(element) {
  element.classList.remove('wrong');
  element.classList.remove('correct');
}

function closeGame() {
  quizWrapper.classList.add('hide');
}

//End of Trivia Quiz logic

//5. start of bannerPopup Logic

const bannerOne = document.querySelector('#bannerOne');
const bannerTwo = document.querySelector('#bannerTwo');
const bannerMobile = document.querySelector('#bannerMobile');
const bannerPage = document.querySelector('.adWrapper');
const adCloseButton = document.querySelector('.adPopupClose');

bannerOne.addEventListener('click', showBannerPopup);
bannerTwo.addEventListener('click', showBannerPopup);
bannerMobile.addEventListener('click', showBannerPopup);
adCloseButton.addEventListener('click', closeBannerPopup);

function showBannerPopup() {
  bannerPage.classList.remove('hide');
}

function closeBannerPopup() {
  bannerPage.classList.add('hide');
}

//end of bannerPopup Logic

//start of counter logic

const counterController = () => {
  if (document.body.classList == 'home-page') {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    let x = setInterval(() => {
      let countDown = new Date('Feb 16, 2021 00:00:00').getTime();
      let now = new Date().getTime();
      let distance = countDown - now;
      document.querySelector('.days').innerText = Math.floor(distance / day);
      document.querySelector('.hours').innerText = Math.floor(
        (distance % day) / hour
      );
      document.querySelector('.minutes').innerText = Math.floor(
        (distance % hour) / minute
      );
      document.querySelector('.seconds').innerText = Math.floor(
        (distance % minute) / second
      );
      // do something later when date is reached
      if (distance < 0) {
        clearInterval(x);
        document.querySelector(
          '.counterTitle'
        ).innerText = `It's Mardi Gras!!!`;
        document.querySelector('.counter').style.display = 'none';
      }
    }, second);
  }
};

//end of counter logic
