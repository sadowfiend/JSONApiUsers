function createUsers(name, login, email) {
    const usersList = document.createElement('div');
    usersList.classList.add('users__list');

    const usersName = document.createElement('div');
    usersName.classList.add('users__name');
    usersName.textContent = name;
    usersList.appendChild(usersName);

    const usersLogin = document.createElement('div');
    usersLogin.classList.add('users__login');
    usersLogin.textContent = login;
    usersList.appendChild(usersLogin);

    const usersEmail = document.createElement('div');
    usersEmail.classList.add('users__email');
    usersEmail.textContent = email;
    usersList.appendChild(usersEmail);

    return usersList
}