import busFleet from './buses.json';


function inRange(num, min, max) {
  return num >= min && num <= max;
}

function submit() {
var busNumber = document.getElementById("busNumber").value;
let buses = busFleet.buses
for (let x in buses) {
  let bus = buses[x]
  if (busNumber >= bus.fleetStart && busNumber <= bus.fleetEnd) {
    result.innerHTML = `
    <h1> ${bus.year} ${bus.make} ${bus.model} </h1>
    <ul class="nobullets">
    <li><b>Make:</b> ${bus.make}</li>
    <li><b>Model:</b> ${bus.model}</li>
    <li><b>Year:</b> ${bus.year}</li>
    <li><b>Length:</b> ${bus.lengthF} ft (${bus.lengthM} m)</li>
W    <li><b>Number of Buses:</b> ${bus.totalBuses} (${bus.totalInService} currently in service)</li>
    <li><b>Fuel Type:</b> ${bus.fuelType}</li>
    </ul>
    `
  }
}
console.log("done")

};