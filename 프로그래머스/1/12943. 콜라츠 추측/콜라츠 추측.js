function solution(num) {
    var answer = 0;
    let count = 0;
    let newnum = num;
    while(true){
        if(newnum === 1){
            answer = count;
            break;
        } else if (count > 500){ 
            answer = -1;
            break;
        } else{
            count++;
        }
    
        if(newnum % 2 === 0){
            newnum /= 2;
        } else {
            newnum = newnum * 3 + 1;
        }

    }
    return answer;
}