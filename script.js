function calculateVolume() {
  // Get the radius input value
  var radius = document.getElementById("radius").value;

  // Calculate the volume of the sphere
  var volume = (4/3) * Math.PI * Math.pow(radius, 3);

  // Display the resul
  document.getElementById("result").innerHTML = "The volume of the sphere is: " + volume.toFixed(6);
}

window.onload = document.getElementById('MyForm').onsubmit = calculateVolume();
