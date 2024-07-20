window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    let temperatureSection = document.querySelector('.temperature')
    const temperatureSpan = document.querySelector('.temperature span')

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long  = position.coords.longitude;
            lat = position.coords.latitude;
            
            // cost
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c415a57becfbd47e861f400ccfc6bff7`

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                const {temp} = data.main;
                const timezone = data.name;
                const [weather] = data.weather;
                const {description, icon} = weather;

                // set Dom elements from API

                temperatureDegree.textContent = temp;
                locationTimezone.textContent = timezone;
                temperatureDescription.textContent = description;
                
                // FORMULA FOR CELCIUS
                let celcius = (temp - 32) * (5 /9);


                // set Icon
                setIcons(icon, document.querySelector('.icon'));

                // change temp to celcius/Farenheit
                temperatureSection.addEventListener('click', () =>{
                    if (temperatureSpan.textContent === 'F'){
                        temperatureSpan.textContent = 'C';
                        temperatureDegree.textContent = Math.floor(celcius);

                    }else{
                        temperatureSpan.textContent ='F';
                        temperatureDegree.textContent = temp;
                    }
                })

            });
        });
       
    }

     function setIcons(icon ,iconID){
        const skycons = new Skycons({color: 'white'});
        const currentIcon = icon;

        skycons.play();

        return skycons.set(iconID, skycons[currentIcon])
     }

});

