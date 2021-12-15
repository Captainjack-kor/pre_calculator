const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  if(operator==='+'){
    result=Number(n1)+Number(n2);
  }
  if(operator==='-'){
    result=Number(n1)-Number(n2);
  }
  if(operator==='*'){
    result=Number(n1)*Number(n2);
  }
  if(operator==='/'){
    result=Number(n1)/Number(n2);
  }
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 '텍스트 정보'를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      console.log('숫자 ' + buttonContent + ' 버튼');
      // buttoContent = 저희가 누른 숫자;
      // second의 텍스트컨텐트에 버튼컨텐트를 넣어준다.
      // 위에먼저 연산 끝내고 외에 다음 값은 세컨드로 넣어준다.
      
      // firstoperend가 조건이 0이아니다.
      // secondoperend에 buttonContent

      // 첫번째에 0이있으면 -> 아무것도 입력이 안된 상태
      // -> 첫번째값을 받는다.

      // 이때, 두번째값을 받아라.
      // 첫 번째 숫자가 기본값인 0이 아니라면, 
      // 무언가 입력이 된 상태로 볼 수 있다!
      // 이때, 두번째값을 받아라.
      
      if(firstOperend.textContent === '0'){
        firstOperend.textContent  = buttonContent; 
      }

      else if(firstOperend.textContent !== '0'){
        secondOperend.textContent = buttonContent;
      }

      // 첫번째 숫자에 0이 들어갔을때 부터 비교를해야 된다.
      //secondOperend.textContent = buttonContent;
      
    }

    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      operator.textContent = buttonContent;
    }

    if (action === 'decimal') {
      // console.log('소수점 버튼');
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      firstOperend.textContent='0';
      secondOperend.textContent='0';
      operator.textContent='+';
      calculatedResult.textContent='0';
    }

    if (action === 'calculate') {
      console.log('계산 버튼');
      //if() 4가지 조건, 연산자에 따라 4가지.
      calculatedResult.textContent=calculate(firstOperend.textContent,operator.textContent,secondOperend.textContent);
    }
  }
});


// ! intermediate, advanced test를 위한 코드입니다. 도전하신다면 주석을 해제하세요.
const display = document.querySelector('.calculator__display--intermediate'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, intermediateOperator, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 intermetiate & advanced 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      // 0을 버튼 누른 값으로 바꾸기...
      // operator.textContent === '#'
      // display.textContent=buttonContent;
      // 1. 나누기 곱하기.
      // 2. 두번쨰값 지우기
      if(display.textContent==='0' || intermediateOperator){
        display.textContent=buttonContent;
      }
      /*
      else if(display.textContent!=='0' && operator.textContent === '*'){
        display.textContent=buttonContent;
      }
      */
      else if(display.textContent!=='0'){
        display.textContent=display.textContent+buttonContent;
      }
      
      /*
      if(firstNum !=='0'){
        display.textContent=buttonContent;
      }*/
      
      // display.textContent='';

      // 다음값을 이어붙이기
      // 기존값은 저장하고, 다음 클릭시 기존값에 + 그 클릭한 버튼값    
      
    }
    if (action === 'operator') {
      firstNum=display.textContent;
      intermediateOperator=buttonContent;
    }
    if (action === 'decimal') {

    }
    if (action === 'clear') {
      display.textContent='0';
      //firstNum=undefined;
      intermediateOperator=undefined;
    }
    if (action === 'calculate') {
      display.textContent=calculate(firstNum,intermediateOperator,display.textContent);
    }
  }

});
