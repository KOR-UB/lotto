// // 로또 번호 호출

// // 로또번호를 담을 6자리의 빈배열
// var lotto = new Array(6);

// // 중복여부 검사
// var confirm = true;


// var count = 0;

// while (count < 6) {
//   var number = 0;
//   number = parseInt(Math.random() * 45) + 1

//   for (var i = 0; i <= count; i++) {
//     if (lotto[i] === number) confirm = false;
//   }

//   if (confirm) {
//     lotto[count] = number;
//     count++;
//   }

//   confirm = true;
// }

// const $btn = document.querySelector('.btn');
// const $div = document.createElement('div');
// $div.classList.add('lotto');

// $btn.onclick = (e) => {
//   const $section = document.querySelector('section')
//   $div.textContent = lotto.join(' ')
//   $section.appendChild($div);
//   e.stopPropagation()
// }

// 로또 번호 호출
// 로또번호를 담을 6자리의 빈배열
var lotto = new Array(6);
const getLotto = function () {
  var confirm = true;
  var count = 0;
  while (count < 6) {
    var number = 0;
    number = parseInt(Math.random() * 45) + 1
    for (var i = 0; i <= count; i++) {
      if (lotto[i] === number) confirm = false;
    }
    if (confirm) {
      lotto[count] = number;
      count++;
    }
    confirm = true;
  }
};
const $btn = document.querySelector('.btn');
const $div = document.createElement('div');
$btn.onclick = e => {
  const $section = document.querySelector('section');
  getLotto();
  $div.textContent = lotto.join(' ');
  $section.appendChild($div);
  lotto = [];
  e.stopPropagation()
}