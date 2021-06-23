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
