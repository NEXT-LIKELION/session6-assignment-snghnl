const person = {
    name: "David",
    city: "London",
    age: 30, // 숫자 속성은 변경하지 마세요.
};

for (const key in person) {
    if (typeof person[key] == "string") {
        person[key] += "(확인됨)";
    }
}

console.log(person);

const words = ["apple", "banana", "cherry", "fig", "grape", "melon"];

// TODO: for...of를 사용하여 길이가 5 이상인 단어만 필터링하여 새로운 배열을 만드세요.

const overFiveLenWords = [];

for (const word of words) {
    if (word.length >= 5) {
        overFiveLenWords.push(word);
    }
}
console.log(overFiveLenWords);
