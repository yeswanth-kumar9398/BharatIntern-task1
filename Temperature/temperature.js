function convert()
{
    var temperature = document.getElementById('temperature').value;
    var unit = document.getElementById('unit').value;
    var fahrenheit, kelvin;  
    if (unit === "celsius") 
    {
      fahrenheit = (temperature * 9/5) + 32;
      kelvin = parseFloat(temperature) + 273.15;
      document.getElementById('result').innerHTML = "Fahrenheit: <span>" + parseFloat(fahrenheit).toFixed(2) + " °F</span><br>" +"Kelvin: <span>" + parseFloat(kelvin).toFixed(2) + " K</span>";
    } 
    else if (unit === "fahrenheit") 
    {
      kelvin = (parseFloat(temperature) + 459.67) * 5/9;
      document.getElementById('result').innerHTML = "Celsius: <span>" + parseFloat(kelvin - 273.15).toFixed(2) + " °C</span><br>" +"Kelvin: <span>" + parseFloat(kelvin).toFixed(2) + " K</span>";
    } 
    else if (unit === "kelvin") 
    {
      fahrenheit = (parseFloat(temperature) * 9/5) - 459.67;
      document.getElementById('result').innerHTML = "Celsius: <span>" + parseFloat(temperature - 273.15).toFixed(2) + " °C</span><br>" +"Fahrenheit: <span>" + parseFloat(fahrenheit).toFixed(2) + " °F</span>";
    }
}