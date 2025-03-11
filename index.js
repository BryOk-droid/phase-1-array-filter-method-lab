// Function: findMatching
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

// Function: fuzzyMatch
function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) => driver.startsWith(letters));
}

// Function: matchName
function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}
