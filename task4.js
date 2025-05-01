const jsonString = `
[
  { "id": 1, "name": "Alice", "age": 25, "email": "alice@example.com" },
  { "id": 2, "name": "Bob", "age": 30, "email": "bob@example.com" },
  { "id": 3, "name": "Charlie", "age": 35, "email": "charlie@example.com" }
]
`;

// TODO: JSON을 객체로 변환하고, 구조 분해 할당을 사용해 { id, name, age } 만 포함한 새로운 배열을 만드세요.

const deserializedJson = JSON.parse(jsonString);

const newJson = deserializedJson.map((element) => {
    const { id, name, age, _ } = element;

    return { id, name, age };
});

console.log(newJson);
