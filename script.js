'use strict';


function guessNumber(myNum) {
    
    let userNum = +prompt('Угадай число от 1 до 100');
    
    return function userNumber() {
        
        if (isNaN(parseFloat(userNum) && isFinite(userNum))) {
            alert ('Введи число!');
            userNum = +prompt('Введите новое число');
        }  else if (userNum > myNum) {
            alert ('Загаданное число меньше');
          userNum = +prompt('Введите новое число');
                      
        } else if (userNum < myNum) {
            alert ('Загаданное число больше');
            userNum = +prompt('Введите новое число');
          
        } else if (userNum === myNum) {
            alert ('Поздравляю, Вы угадали!');   
            
        } else if (userNum === null) {
            return confirm('Игра закончена');
        
    }  

    userNumber()
    }
         
}                   

        guessNumber(10);