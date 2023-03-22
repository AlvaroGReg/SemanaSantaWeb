chargeCofradias();

function chargeCofradias() {

    let listCofradias = document.getElementById("listcofradias");

    cofradiasList.forEach(element => {
        

        let newCofradiaDiv = document.createElement('div');
        let newCofradiaName = document.createElement('p');
        let newCofradiaLogo = document.createElement('img');

        newCofradiaDiv.setAttribute('onclick', "changeCofradia('" + element.name + "')")
        
        newCofradiaDiv.className = 'cofradiadiv';
        newCofradiaDiv.style.cursor = 'pointer';
        newCofradiaName.innerHTML = element.name;
        newCofradiaName.className = "cofradianametxt";

        newCofradiaLogo.src = element.logo;
        newCofradiaLogo.className = "cofradialogo";

        listCofradias.appendChild(newCofradiaDiv);
        newCofradiaDiv.appendChild(newCofradiaName);
        newCofradiaDiv.appendChild(newCofradiaLogo);
    });

}

// function to select the day to see, eventlistener to the day and cofradia buttons

const buttons = document.querySelectorAll(".btnday");

buttons.forEach(button =>

    button.addEventListener('click', () => changeday(button.getAttribute('title'))));

function changeday(dayId) {

    const indexById = (element) => element.id == dayId;

    let day = daysList[daysList.findIndex(indexById)];

    if (day.id == "previos") {
        document.getElementById("daytitle").innerHTML = "Procesiones de días " + day.id + ":";
    } else {
        document.getElementById("daytitle").innerHTML = "Procesiones del " + day.id + ":";
    }

    let procesionesString = day.procesiones[0] + "."

    document.getElementById("dayliprocesiones").innerHTML = procesionesString;

    day.cofradias.forEach(cofradia => {

        let newBtn = document.createElement('button');
        let cofradiaName = cofradiasList[cofradia - 1].name;
        newBtn.innerHTML = cofradiaName;
        newBtn.setAttribute('class', 'button btncofradia')
        let new_li = document.createElement('li');

        new_li.setAttribute("id", "newli");

        buttons_frame.appendChild(new_li);

        document.getElementById("newli").appendChild(newBtn);

        newBtn.addEventListener('click', () => changeCofradia(cofradiaName))

    });
}

//Full data about selected cofradia

function changeCofradia(name) {
    
    const txt_name = document.getElementById("cofradianame");
    const txt_fundation = document.getElementById("cofradiafundation");
    const txt_president = document.getElementById("cofradiapresident");
    const txt_brothers = document.getElementById("cofradiabrothers");
    const txt_steps = document.getElementById("cofradiasteps");
    const txt_url = document.getElementById("cofradiaurl");
    //const iframe = document.getElementById("iframevideo");

    const indexById = (cofradiatosearch) => cofradiatosearch.name == name;

    let cofradiatouse = cofradiasList[cofradiasList.findIndex(indexById)];

    txt_name.innerHTML = cofradiatouse.name;
    txt_fundation.innerHTML = "Fundación: " + cofradiatouse.fundation;
    txt_president.innerHTML = "Alcalde: " + cofradiatouse.president;
    txt_brothers.innerHTML = "Miembros: " + cofradiatouse.brothers;
    txt_steps.innerHTML = "Pasos: " + cofradiatouse.steps;
    txt_url.setAttribute('href', cofradiatouse.url);
    txt_url.innerHTML = "Página web";
    //iframe.src = cofradiatouse.youtube;

}