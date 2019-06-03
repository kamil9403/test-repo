fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(json => json.forEach(user => createDiv(user)))

function createDiv(user) {
    
    const parent = document.querySelector('#root')
    const newElement = document.createElement("DIV");
    const deleteButton = document.createElement("BUTTON")
    const userData = document.createElement("P")

    userData.innerText = JSON.stringify(user)  
    
    newElement.setAttribute('id', `user${user.id}`)
    newElement.setAttribute('class', 'user')
    newElement.appendChild(userData)
    newElement.appendChild(deleteButton)

    deleteButton.innerText = 'Usuń'
    deleteButton.addEventListener('click', () => newElement.remove());
    
    parent.appendChild(newElement) 
}

function removeAll(){
    const users = document.querySelectorAll('.user')
    users.forEach(user => user.parentNode.removeChild(user))
}

function createUser() {
    const user = document.querySelector('form');
    const formData = new FormData(user)
    const newUser = {}
    
    formData.forEach((value,key) => newUser[key]=value )

    createDiv(newUser)
}

document.querySelector('#submit').addEventListener('click',createUser)
document.querySelector('#deleteAll').addEventListener('click', removeAll)


