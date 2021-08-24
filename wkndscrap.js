// //Weather API Key
// const APIKEY = 'e71395d8de75cddf95ca37ff562604b2'

// //Functions
// addLocation();
// addSubmitButton();
// createWeatherTable();

// //Functions from up top
// function addLocation(){
//     input=document.createElement("input");
//     input.placeholder="Enter Your Zipcode";
//     input.name = "zipcode";
//     input.classList.add("form-control");
//     document.body.appendChild(input);
//     input=document.createElement("input");
//     input.placeholder="Enter Country Code";
//     input.name = "country_code";
//     input.classList.add("form-control");
//     document.body.appendChild(input);
// }

// function handleSubmit(event){
//     ergast=document.getElementsByName("zipcode"&&"country_code").value;
//     console.log(event);
//     //Send an API Call to ergast
//     //doAPICall(ergast)
// }

// // Make a Submit Button --
// function addSubmitButton(){
//     button = document.createElement("button");
//     document.body.appendChild(button);
//     button.innerText="Submit"
//     button.classList.add('btn', 'btn-primary')
//     button.addEventListener("click", handleSubmit);

//     const _getToken = async () => {
//         const result = await fetch('https://home.openweathermap.org/api_keys',{
//             method: 'POST',
//             headers:{
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 'Authorization': 'Basic ' + btoa(APIKEY) 
//             },
//             body: 'grant_type=client_credentials'
//         }); 
    
//         const data = await result.json();
//         return data.access_token
//     }
    
//     //Get token --
//     let token = await _getToken();
//     console.log(token)
    
//     let headers = new Headers(
//         [
//             ['Content-Type', 'application/json'],
//             ['Accept', 'application/json'],
//             ['Authorization', `Bearer${token}`]
//         ]
//     );
    
//     let request = new Request(`api.openweathermap.org/data/2.5/weather?zip=${zip code},${country_code}&appid=${API key}`, {
//         method:'GET',
//         headers: headers 
//     })