const user = {
    id: 101,
    name: "Eve",
    email: "eve@example.com",
    role: "admin",
};

function getUserData(obj, key) {
    // usage of .
    if (key == "id") {
        return obj.id;
    }

    // usage of []
    if (key in obj) {
        return obj[key];
    } else {
        return "키 없음";
    }
}

// 예제 실행
console.log(getUserData(user, "id")); // "Eve"
console.log(getUserData(user, "name")); // "Eve"
console.log(getUserData(user, "email")); // "eve@example.com"
console.log(getUserData(user, "age")); // "키 없음"
