const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
];

// TODO: map을 사용하여 age에 따라 "성인" 또는 "미성년자"를 추가한 새로운 배열을 만드세요.

const updated_users = users.map((user) => {
    const { name, age } = user;
    const status = age >= 19 ? "성인" : "미성년자";
    return { name, age, status };
});

console.log(updated_users);
