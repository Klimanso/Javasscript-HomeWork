/*
    * StringHelper JavaScript Library v 1.0
    *
    * Library for working with Russian Text and words
    *
    * Created by Geray Suinov
    *
    * Date: 2014-01-10
 */
var StringHelper = (function(){
    'use strict';

    // Russian alphabet letters divided into consonants and vowels
    var vowels = 'ауоыияюёеАУОЫИЯЮЁЕ',
        consonants = 'бвгджзйклмнпрстфхцчшщБВГДЖЗЙКЛМНПРСТФХЦЧШЩ',

        prefixes = ["без", "бес", "в", "во", "воз", "вос", "возо", "вз", "вс", "вы", "до",
            "за", "из", "ис", "изо", "на", "наи", "недо", "над", "надо", "не", "низ", "нис",
            "низо", "о", "об", "обо","интер", "инфра", "квази", "кило", "контр", "макро",
            "микро", "мега", "мета", "мульти", "орто", "пан", "пара", "пост", "прото", "ре",
            "суб", "супер", "транс", "ультра", "экстра", "экс", "обез", "обес", "от", "ото", "па",
            "пра", "по", "под", "подо", "пере", "пре", "пред", "предо", "при", "про", "раз", "рас",
            "разо", "с", "со", "су", "через", "черес", "чрез", "а", "ана", "анти", "архи", "гипер",
            "гипо", "де", "дис", "ин"],

        // Methods for determining the classification of letters
        isVowels = function(letter){
            if(!letter)return false;
            return vowels.indexOf(letter) != -1;
        },
        isConsonants = function (letter){
            if(!letter)return false;
            return consonants.indexOf(letter) != -1;
        },
        isRussianLetter = function(letter){
            if(!letter)return false;
            return (isVowels(letter) || isConsonants(letter))
        },
        getWords = function(text){
            if(!text) return [];
            return text.replace(/[!?;:.,+-='"]/g,' ')
                .replace(/\s+/g,' ')
                .replace(/^\s+|\s+$/g,'')
                .split(' ');
        },
        atBeginning = function(word,prefix){
            return word.indexOf(prefix) === 0;
        };

    return{
        getConstants: function(text){
            if(!text)return '';
            var answer = [];
            text.replace(/[бвгджзйклмнпрстфхцчшщ]/g,function(letter){
                if(answer.indexOf(letter) === -1)
                    answer.push(letter);
            });
            return answer.join(',');
        },
        getVowels: function(text){
            if(!text)return '';
            var answer = [];
            text.replace(/[ауоыияюёе]/g,function(letter){
                if(answer.indexOf(letter) === -1)
                    answer.push(letter);
            });
            return answer.join(',');
        },
        syllabification: function(text){
            if(!text)return '';
            var answer = [];
            getWords(text).forEach(function(word){
                var currentLetter = '',
                    currentWord = [];

                for(var i = 0; i < word.length; i++){
                    currentLetter+=word[i];
                    if(isVowels(word[i])){
                        currentWord.push(currentLetter);
                        currentLetter = '';
                    }
                    if(currentWord.length-1>=0)
                        currentWord[currentWord.length-1] = i == word.length-1 ? currentWord[currentWord.length-1] + currentLetter : currentWord[currentWord.length-1];
                }
                answer.push(currentWord.join('-'));
            });
            return answer;
        },
        getWordsAmount: function(text){
            if(!text)return 0;
            return getWords(text).length;
        },
        getPrefixes: function(text){
            if(!text)return '';
            var prefixesInText = [];
            prefixes.forEach(function(prefix){
                getWords(text).forEach(function(word){
                    if(word.indexOf(prefix) != -1 && atBeginning(word,prefix))
                        prefixesInText.push(prefix);
                });
            })
            return prefixesInText.join(',');
        }
    }
})();