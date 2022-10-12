let answerNumber  
let answerText
let orderNumber 
let gameRun 
let minValue
let maxValue



function numbaToText() {

    let valIn; // вводимое число
let units = ''; // переменная для единиц
let dozens = ''; // -||- для десятков
let hundreds = ''; // -||- для сотен
let symbol = ''; // переменная для знака

valIn = answerNumber;
let valOut = Math.abs(valIn);

if (valIn < 0) {
    symbol = 'минус';
}

if (!(valOut > 10 && valOut < 20) && !(valOut % 100 > 10 && valOut % 100 < 20) && valOut % 10 == 1) {
    units = 'один';
} else if (!(valOut > 10 && valOut < 20) && !(valOut % 100 > 10 && valOut % 100 < 20) && valOut % 10 == 2){
    units = 'два';
} else if (!(valOut > 10 && valOut < 20) && !(valOut % 100 > 10 && valOut % 100 < 20) && valOut % 10 == 3){
    units = 'три';
} else if (!(valOut > 10 && valOut < 20) && !(valOut % 100 > 10 && valOut % 100 < 20) && valOut % 10 == 4) {
    units = 'четыре';
} else if (!(valOut > 10 && valOut < 20) && !(valOut % 100 > 10 && valOut % 100 < 20) && valOut % 10 == 5) {
    units = 'пять';
} else if (!(valOut > 10 && valOut < 20) && !(valOut % 100 > 10 && valOut % 100 < 20) && valOut % 10 == 6) {
    units = 'шесть';
} else if (!(valOut > 10 && valOut < 20) && !(valOut % 100 > 10 && valOut % 100 < 20) && valOut % 10 == 7) {
    units = 'семь';
} else if (!(valOut > 10 && valOut < 20) && !(valOut % 100 > 10 && valOut % 100 < 20) && valOut % 10 == 8) {
    units = 'восемь';
} else if (!(valOut > 10 && valOut < 20) && !(valOut % 100 > 10 && valOut % 100 < 20) && valOut % 10 == 9) {
    units = 'девять';
}
// десятки

if (valOut == 0) {
    units = 'ноль';
}

if (Math.trunc (valOut % 100 / 10) == 2) {
    dozens = 'двадцать';
} else if (Math.trunc (valOut % 100 / 10) == 3) {
dozens = 'тридцать';
} else if (Math.trunc (valOut % 100 / 10) == 4) {
dozens = 'сорок';
} else if (Math.trunc (valOut % 100 / 10) == 5) {
    dozens = 'пятьдесят';
} else if (Math.trunc (valOut % 100 / 10) == 6) {
    dozens = 'шестьдесят';
} else if (Math.trunc (valOut % 100 / 10) == 7) {
    dozens = 'семьдесят';
} else if (Math.trunc (valOut % 100 / 10) == 8) {
    dozens = 'восемьдесят';
} else if (Math.trunc (valOut % 100 / 10) == 9) {
    dozens = 'девяносто';
} else if ((valOut % 100) == 10){
    dozens = 'десять';
} else if ((valOut % 100) == 11) {
    dozens = 'одиннадцать';
} else if ((valOut % 100) == 12) {
    dozens = 'двенадцать';
} else if ((valOut % 100) == 13) {
    dozens = 'тринадцать';
} else if ((valOut % 100) == 14) {
    dozens = 'четырнадцать';
} else if ((valOut % 100) == 15) {
    dozens = 'пятнадцать';
} else if ((valOut % 100) == 16) {
    dozens = 'шестнадцать';
} else if ((valOut % 100) == 17) {
    dozens = 'семнадцать';
} else if ((valOut % 100) == 18) {
    dozens = 'восемнадцать';
} else if ((valOut % 100) == 19) {
    dozens = 'девятнадцать'; 
}
// погнали сотни 

if (Math.trunc(valOut / 100 == 1)) {
    hundreds = 'сто';
} else if (Math.trunc(valOut / 100) == 2) {
    hundreds = 'двести';
} else if (Math.trunc(valOut / 100) == 3) {
    hundreds = 'триста';
} else if (Math.trunc(valOut / 100) == 4) {
    hundreds = 'четыреста';
} else if (Math.trunc(valOut / 100) == 5) {
    hundreds = 'пятьсот';
} else if (Math.trunc(valOut / 100) == 6) {
    hundreds = 'шестьсот';
} else if (Math.trunc(valOut / 100) == 7) {
    hundreds = 'семьсот';
} else if (Math.trunc(valOut / 100) == 8) {
    hundreds = 'восемьсот';
} else if (Math.trunc(valOut / 100) == 9) {
    hundreds = 'девятьсот'
}
valOut = `${symbol} ${hundreds} ${dozens} ${units}`;
console.log(valOut)

return valOut;
}

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

gameStart ();

function gameStart () {
    alert(`Загадайте любое целое число от -999 до 999, а я его угадаю`);
    minValue = parseInt(prompt('Минимальное значение числа для игры не менее -999','0'))||0;
    minValue = (minValue < -999 || minValue > 998) ? -999 : minValue;
    
    maxValue = parseInt(prompt('Максимальное значение числа для игры не более 999','100'))||100;
    maxValue = (maxValue > 999 || maxValue < -998) ? 999 : maxValue;

    alert (`Вы загадали число от ${minValue} до ${maxValue}. Погнали!`);
    
   
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    const phraseRandom = Math.round(Math.random()*2);
            const answerRight = (phraseRandom === 1) ?
            `Попытка - не пытка: ` : ((phraseRandom === 2) ? 
            `Ну-ка, начнём: `: 
            `Поехали: `);
            answerField.innerText = answerRight + `Вы загадали число ${numbaToText()}?`;
    
}

document.getElementById('btnRetry').addEventListener('click', function () {
  gameStart ();
   
})

document.getElementById('btnOver').addEventListener('click', function() {
    if (gameRun){
        if (minValue === maxValue) {
            let answerPhraseOver
            const phraseRandom = Math.round(Math.random()*3 );
            console.log(phraseRandom);
            
                if (phraseRandom === 1) {
                    answerPhraseOver = "Вы чего-то попутали. И это по-нАтуре!\n\u{1F914}";
                } else if (phraseRandom === 2) {
                    answerPhraseOver = "Тут что-то не складывается, зуб даю! \n\u{1F914}";
                } else {
                    answerPhraseOver = "Сдаваться мы не умеем. А вы перепроверьте-ка себя.\n\u{1F914}";
                } 
                answerField.innerText = answerPhraseOver;
                gameRun = false;
                    
                
            
        } else {
            
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random()*2);
            const answerRight = (phraseRandom === 1) ?
            `Элементарно, друг! ` : ((phraseRandom === 2) ? 
            `Как тебе такое, Илон Маск? `: 
            `Проще ж некуда: `);
            
            answerField.innerText = answerRight + `Вы загадали число ${numbaToText()}?`;
            
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function() {
    if (gameRun){
        
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random()*3);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы чего-то попутали. И это по-нАтуре!\n\u{1F914}` : ((phraseRandom === 2) ?
                `Тут что-то не складывается, зуб даю! \n\u{1F914}`: 
                `Сдаваться мы не умеем. А вы перепроверьте-ка себя \n\u{1F914}.`);      

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            
            maxValue = answerNumber - 1;
            answerNumber = Math.ceil((minValue + maxValue) / 2);
            console.log (answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random()*2);
            const answerRight = (phraseRandom === 1) ?
            `Элементарно, друг: ` : ((phraseRandom === 2) ? 
            `Как тебе такое, Илон Маск? `: 
            `Проще ж некуда! `);
            answerField.innerText = answerRight + `Вы загадали число ${numbaToText()}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю, же есть!\n\u{1F60E}`
        gameRun = false;
    }
})


