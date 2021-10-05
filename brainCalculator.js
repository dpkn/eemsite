function doBraintest(){
    let brainSize = 0;
    let age = prompt('What is your age?');
    let a1 = prompt('What is 30 times 50?');

    if(age <= 12){
        brainSize += 10;
    }else if(age <= 18){
        brainSize += 20;
    }else if (age <= 65){
        brainSize += 50;
    }else {
        brainSize += 5;
    }

    if(a1 == 1500){
        brainSize += 1000;
    }else {
        brainSize -= 69;
    }

    let result = 'Your brain size is ' + brainSize + '!';

    if(brainSize > 1000){
        result += '<3';
    }
    

    document.getElementById('result').innerHTML = result;
}

function moodAnalysis(){
    let answer = prompt('What is your mood at the moment? \n\nA. You are feeling overwhelmed. \nB. You are feeling frustrated/irritated. \nC. You are feeling misunderstood. \nD. You are feeling CHONKY. \nE. You are feeling sad.\n');
    let solution = '';

    if(answer == 'a' || answer == 'A'){
        solution = 'Ask your partner for some space.';
    }else if(answer == 'b' || answer == 'B'){
        solution = 'Dance it out if it has already been talked about.';
    }else if(answer == 'c' || answer == 'B'){
        solution = 'Ask your partner if they have time and space to talk about the issue.';
    }else if(answer == 'd' || answer == 'D'){
        solution = 'You tell your partner that you are feeling CHONKY and hope they feel CHONKY too.';
    }else if(answer == 'e' || answer == 'E'){
        solution = 'Tell your partner what is making you feel sad and see if there is anything that can be done about it.';
    }else{
        solution = 'Please type in a valid answer and try again!';
        moodAnalysis();
        return;
    }

    document.getElementById('result').innerHTML = solution;
}


function checkBirthday(){
    let answer = prompt('To prove it is your birthday, please enter the ');

    if(answer == 'a' || answer == 'A'){
       window.location.href = 'http://emilie.vip/birthday'
    }else{
        checkBirthday();
    }
}
