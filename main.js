const listPersona = fetch("https://reqres.in/api/users?page=1")
const listPerson = () => {

    listPersona.then(data => data.json()).then(data => {
        let html = '';
        let people = data.data;
        console.log(people);
        people.forEach(person => {
            html += `<tr>
                        <th class="col">${person.id}</th>
                        <td class="col">${person.email}</td>
                        <td class="col">${person.first_name}</td>
                        <td class="col">${person.last_name}</td>
                        <td class="col"><img src="${person.avatar}"></td>
                        <td class="col"><btn class="btn btn-warning" onclick=updatePerson(${person.id})>Editar</btn>
                        <btn class="btn btn-danger" onclick=deletePerson(${person.id})>Eliminar</btn>
                        </td>
                    </tr>`;
        });
        document.getElementById("fillTable").innerHTML = html;
    })
}

listPerson()


const addPerson = () => {
    const nombre = document.getElementById("username").value;
    const apellido = document.getElementById("lastname").value;
    const correo = document.getElementById("email").value;
    let data = {
        first_name: nombre,
        last_name: apellido,
        email: correo
    }
    const create = fetch("https://reqres.in/api/users",
        {
            method: "POST",
            body: JSON.stringify(data)
        })
    create.then(data => data.json()).then(data => alert("Registro completado"));
    console.log('Se registró a: ' + data.first_name + ', ' + data.last_name + ', ' + data.email);
}

const updatePerson = (id) => {
    const updateUser = fetch("https://reqres.in/api/users/" + id)
    updateUser.then(data => data.json())
        .then(data => console.log(data.data))
}

const deletePerson = (id) => {
    const deleteUser = fetch("https://reqres.in/api/users/" + id);
    deleteUser.then(data => data.json())
        .then(data => console.log("Se ha eliminado el usuario"))
}
