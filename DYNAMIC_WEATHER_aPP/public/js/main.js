const submitBtn = document.getElementById('submitbtn')
const cityName =document.getElementById("cityName")
const city_name=document.getElementById("city_name")
const temp=document.getElementById("temp_Rel_val");
const temp_status=document.getElementById("temp_status")
const day=document.getElementById("day")
const datahide=document.querySelector(".middle_layer")
const today=document.getElementById

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal=cityName.value

    
    if(cityVal===""){
        city_name.innerText=`Search column can't be Empty`;
        datahide.classList.add('data_hide');
    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6e702b39fba85c701de526252e2832ec`

        //Fetching the JSON data readable
        const response=await fetch(url);

        //Converting JSON to simple Object
        const data=await response.json();

        //Converting the data to array
        const arrData= [data];
        city_name.innerText=`City : ${arrData[0].name} ,  Country  : ${arrData[0].sys.country}`;
        temp.innerText=arrData[0].main.temp;
        

        const tempStatus = arrData[0].weather[0].main;

        if (tempStatus == "Sunny") {
            temp_status.innerHTML = "<i class='fas fa-solid fa-sun' style='color: #eccc68'></i>";
        }
        else if (tempStatus == "Clouds") {

            temp_status.innerHTML = "<i class='fas fa-solid fa-cloud' style='color: #ffff'></i>";
        }
        else if (tempStatus == "Rainy") {
            temp_status.innerHTML = "<i class='fas  fa-solid fa-cloud-rain' style='color: #a4b0be'></i>";
        }
        else if (tempStatus == "Clear") {
            temp_status.innerHTML = "<i class='fas  fa-solid fa-sun' style='color:yellow'></i>";
        }
        else {
            temp_status.innerHTML = "<i class='fas  fa-solid fa-sun' style='color: yellow'></i>";
        }
        datahide.classList.remove('data_hide');
        
        }catch{
            city_name.innerText=`Please Enter the Correct City Name`;
            datahide.classList.add('data_hide');
        }

    }
}

submitBtn.addEventListener("click", getInfo)

