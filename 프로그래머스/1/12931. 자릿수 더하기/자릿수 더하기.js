function solution(n)
{
    var answer = 0;
    let numlen = `${n}`.length - 1;
    let inputn = n;
    let numlen_10;
    while(true){
        numlen_10 = 10**numlen;
        answer += (inputn - (inputn % (numlen_10)))/(numlen_10);
        inputn -= (inputn - (inputn % (numlen_10)));
        numlen--;
        if(numlen < 0){
            break;
        }
    }
    return answer;
}