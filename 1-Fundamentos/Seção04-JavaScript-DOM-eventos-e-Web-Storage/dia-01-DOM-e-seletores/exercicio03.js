const header = document.getElementById("header-container");
const emergencyImportant = document.querySelectorAll('.emergency-tasks h3');
const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
const noEmergency = document.querySelectorAll('.no-emergency-tasks h3');
const noEmer = document.getElementsByClassName('no-emergency-tasks')[0];
const footer = document.getElementById('footer-container');


const changeColor = (tag, color) => {
    tag.style.backgroundColor = color
}

changeColor(header, "rgb(8, 180, 108)")
changeColor(footer, 'red')
changeColor(emergencyTasks, '#fc9c84')
changeColor(noEmergency, 'black') //

for (let index = 0; index < emergencyImportant.length; index += 1) {
    emergencyImportant[index].style.backgroundColor = 'rgb(165, 0, 243)'
}

for (let index = 0; index < noEmergency.length; index += 1) {
    noEmergency[index].style.backgroundColor = 'rgb(35, 37, 37)'
}