// Code your solution here

function findMatching(drivers, name) {
   const matchingNames = drivers.filter (driverName => driverName.toLowerCase() === name.toLowerCase())
   return matchingNames
    }
  

    function fuzzyMatch(drivers, name){
        let length = name.length
        return drivers.filter(driverName => driverName.slice(0, length) === name)
      }

      function matchName(drivers, name){
        return drivers.filter(function(driver){
          return driver.name === name
        })
      }