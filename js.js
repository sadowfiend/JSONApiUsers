const root = document.getElementById('root');
const users = document.createElement('div');
users.classList.add('users');
root.appendChild(users);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            const user = createUsers(
                data[i].name,
                data[i].username,
                data[i].email
            );
            users.appendChild(user)
        }
})
