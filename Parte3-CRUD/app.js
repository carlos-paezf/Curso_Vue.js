//! Variables globales
const formularioUI = document.querySelector('#formulario');
const listActivitiesUI = document.getElementById('listActivities');
let arrayActivities = [];


//! Funciones
const CreateItem = (activity) => {
    let item = {
        activity: activity,
        state: false
    }
    arrayActivities.push(item);
    return item;
}

const SaveDB = () => {
    localStorage.setItem('routine', JSON.stringify(arrayActivities));
    ListDB();
}

const ListDB = () => {
    listActivitiesUI.innerHTML = '';
    arrayActivities = JSON.parse(localStorage.getItem('routine'));
    if (arrayActivities === null) {
        arrayActivities = [];
    } else {
        arrayActivities.forEach(element => {
            listActivitiesUI.innerHTML += `
            <div class="alert ${element.state ? 'alert-dark' : 'alert-danger'}" role="alert">
                <span class="material-icons float-left mr-2">accessibility_new</span>
                <b>${element.activity}</b> - ${element.state} 
                <span class="float-right">
                    <i class="material-icons">done</i>
                    <i class="material-icons">delete</i>
                </span>
            </div>`
        });
    }
}

const DeleteDB = (activity) => {
    let indexArray;
    arrayActivities.forEach((element, index) => {
        if (element.activity === activity) {
            indexArray = index;
        }
    });
    arrayActivities.splice(indexArray, 1);
    SaveDB();
}

const EditDB = (activity) => {
    let indexArray = arrayActivities.findIndex((element) => element.activity === activity);
    arrayActivities[indexArray].state = true;
    SaveDB();
}


//! EventListener
formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let activityUI = document.querySelector('#activity').value;
    CreateItem(activityUI);
    SaveDB();
    formularioUI.reset();
});

document.addEventListener('DOMContentLoaded', ListDB);

listActivitiesUI.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.innerHTML === 'done' || e.target.innerHTML === 'delete') {
        let texto = e.path[2].childNodes[3].innerHTML;
        if (e.target.innerHTML === 'delete') {
            DeleteDB(texto);
        }
        if (e.target.innerHTML === 'done') {
            EditDB(texto);
        }
    }
});