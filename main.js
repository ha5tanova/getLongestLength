/* Реализуйте функцию getLongestLength(), 
принимающую на вход строку и возвращающую длину максимальной последовательности из неповторяющихся символов.
 Подстрока может состоять из одного символа. 
Например в строке qweqrty, можно выделить следующие подстроки: qwe, weqrty. Самой длинной будет weqrty. */

function getLongestLength(str) {


    let longestLength = 0;
    let currentSubstring = '';

    for (let item of str) {


        let itemIndex = currentSubstring.indexOf(item);

        if (itemIndex === -1) {


            currentSubstring += item;
            longestLength = Math.max(longestLength, currentSubstring.length);
        }
        
        else {
            currentSubstring = currentSubstring.slice(itemIndex + 1) + item;
        }
    }

    return longestLength;
}

console.log(getLongestLength('qweqwerty'));
console.log(getLongestLength('abdfehueily'));
console.log(getLongestLength('')); 