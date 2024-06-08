const searchInput= document.querySelector('#location');
const searchbtn = document.querySelector('#search');









async function getweather(city){
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d78cd58b577fba1734af35d6a8a6b2c&units=metric `)
    let data = await res.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name 
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "&degC"
    document.querySelector(".humid").innerHTML = Math.round(data.main.humidity) + "%" + " humidity"
    document.querySelector(".speed").innerHTML = Math.floor(data.wind.speed) + " km/h" + " wind speed"
    
}
searchbtn.addEventListener('click', ()=>{
getweather(searchInput.value)
})
