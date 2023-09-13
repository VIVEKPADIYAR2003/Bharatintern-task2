document.getElementById('convert').onclick =tempConvertor;
document.getElementById('clear').onclick = clearForm;

function tempConvertor() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;
    var kelvin = document.getElementById("kelvin").value;

    if(fahrenheit != ''){
        celsius = (parseFloat(fahrenheit)- 32) / (9/5);
        kelvin= (parseFloat(fahrenheit)-32) * (5/9) + (273.15); 
    }

    else if(celsius != ''){
        fahrenheit =(parseFloat(celsius) * (9/5) + 32);
        kelvin = (parseFloat(celsius) + 273.15);
    }

    else{
        fahrenheit = (parseFloat(kelvin)-273.15) * (9/5) + 32;
        celsius = (parseFloat(kelvin) - 273.15);
    }

    document.getElementById('fahrenheit').value =parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celsius').value =parseFloat(celsius).toFixed(1);
    document.getElementById('kelvin').value =parseFloat(kelvin).toFixed(1);
}

function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
    document.getElementById('kelvin').value = '';
}
