const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

// TODO: filter -> map -> reduce를 조합하여 최종 결과를 출력하세요.

// Phase 1: filter
const resultPhase1 = numbers.filter((number) => number % 2 == 0);
console.log(resultPhase1);

// Phase 2: map
const resultPhase2 = resultPhase1.map((number) => number ** 2);
console.log(resultPhase2);

// Phase 3: reduce
const resultPhase3 = resultPhase2.reduce((number, acc) => number + acc, 0);
console.log(resultPhase3);
