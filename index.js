function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  const lastTwoDrivers = returnLastTwoDrivers(drivers);
  function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
function createFareMultiplier (multiplier) {
    return function(fare) {
        return fare * multiplier;
      };
}
const doublefare = createFareMultiplier(2);

function fareDoubler (fare) {
    return fare * 2;
}
function fareTripler (fare) {
    return fare * 3
}
function selectDifferentDrivers(arrayOfDrivers, driverFunction) {
    const selectedDrivers = driverFunction(arrayOfDrivers);
    return selectedDrivers.slice(0, 2);
  }