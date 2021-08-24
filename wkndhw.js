addLocation();
addSubmitButton();
createWeatherTable();

//make the input field for weather
const APIKEY = 'e71395d8de75cddf95ca37ff562604b2';

function addLocation(){
    input = document.createElement("input");
    input.placeholder = "Enter Your Zipcode";
    input.name = "zipcode";
    input.classList.add("form-control");
    document.body.appendChild(input);
    input = document.createElement("input");
    input.placeholder = "Enter Your Country Code";
    input.name = "country_code";
    input.classList.add("form-control");
    document.body.appendChild(input);
};

function handleSubmit(event){
    zipcode = document.getElementsByName("zipcode")[0].value;
    console.log(zipcode);
    countryCode = document.getElementsByName("country_code")[0].value;
    console.log(countryCode);
    //Send an API call to Weather Map
    doAPICall(zipcode, countryCode);
}

//function for submit button
function addSubmitButton(){
    button=document.createElement("button");
    document.body.appendChild(button);
    button.innerText="Search";
    button.classList.add('btn', 'btn-primary' )
    button.addEventListener("click",handleSubmit)

}

function createWeatherTable(){
    table = document.createElement("table");
    table.classList.add("table",);
    document.body.appendChild(table); 

    thead= document.createElement("thead");
    table.appendChild(thead);

    tr = document.createElement("tr")
    thead.appendChild(tr)

    th = document.createElement("th")
    th.innerText = "Name";
    th.scope = "col";
    tr.appendChild(th);

    th = document.createElement("th")
    th.innerText = "Highs";
    th.scope = "col";
    tr.appendChild(th);

    th = document.createElement("th")
    th.innerText = "Lows";
    th.scope = "col";
    tr.appendChild(th);

    th = document.createElement("th")
    th.innerText = "Forecast";
    th.scope = "col";
    tr.appendChild(th);

    th = document.createElement("th")
    th.innerText = "Humidity";
    th.scope = "col";
    tr.appendChild(th);

    tbody = document.createElement("tbody")
    table.appendChild(tbody);


}

async function doAPICall(zipcode,countryCode){
    let request = new Request(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${countryCode}&units=imperial&appid=${APIKEY}`, {
        method:'GET'
    });

    let result = await fetch(request);
    let response = await result.json()
    console.log(response)
    console.log (result.json)
    console.log(response.name)

    tbody = document.getElementsByTagName("tbody")[0]

    tr = document.createElement("tr");
    tbody.appendChild(tr);

    th = document.createElement("th");
    th.scope = "row";
    th.innerHTML = response.name;
    tr.appendChild(th)
    
    td = document.createElement("td");
    td.innerText = response.main.temp_max;
    tr.appendChild(td)

    td = document.createElement("td");
    td.innerText = response.main.temp_min;
    tr.appendChild(td)

    td = document.createElement("td");
    td.innerText = response.weather[0].description;
    tr.appendChild(td)

    td = document.createElement("td");
    td.innerText = response.main.humidity;
    tr.appendChild(td)


}