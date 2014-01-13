
var textArea = $('.textArea');
var isOpen = false;
var translations = {'vowels': 'Гласные','cons':'Согласные','slogs':'Слоги','words':'Количество слов','prefix':'Приставки'};

$('.change').click(function(){
    if(!isOpen){
        $('.functions').fadeIn();
        isOpen = true;
    }
    else{
        $('.functions').fadeOut();
        isOpen = false;
    }
});

$('.vowels').click(function(){
    addAnswer('vowels' ,StringHelper.getVowels(textArea.val()));
});

$('.cons').click(function(){
    addAnswer('cons' , StringHelper.getConstants(textArea.val()));
});

$('.slogs').click(function(){
    addAnswer('slogs' , StringHelper.syllabification(textArea.val()));
});

$('.words').click(function(){
    addAnswer('words',StringHelper.getWordsAmount(textArea.val()));
});

$('.prefix').click(function(){
    addAnswer('prefix' , StringHelper.getPrefixes(textArea.val()));
});

textArea.bind('change',function(){
    $('.words').click();
});

textArea.bind('keyup',function(){
    $(this).trigger('change');
});

function addAnswer(key,value){
    if(!$('.' + key + 'Answer').length){
        var $element = $('<div>')
            .addClass(key + 'Answer')
            .css({'text-align': 'center'})
            .text(value);
        var $title = $('<div>')
            .addClass('titleAnswer')
            .css({'font-size': '35px','text-align': 'center','font-family': 'cursive'})
            .text(l(key) + ':');
        $('.answerPanel')
            .append($title)
            .append($element);
    }
    else
        $('.' + key + 'Answer').text(value);
}

function l(letter){
    return translations[letter];
}

