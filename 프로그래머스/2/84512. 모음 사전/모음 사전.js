function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const multipliers = [781, 156, 31, 6, 1];

    let index = 0;
    for (let i = 0; i < word.length; i++) {
        const position = vowels.indexOf(word[i]);
        index += position * multipliers[i] + 1;
    }

    return index;
}