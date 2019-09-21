// Rover Object Goes Here
// ======================

// ======================
var directionArray= ["North", "East", "West", "South"];
var arrayIndex=0;
var x=0;
var y=0;
var travelLog = [];

var rover = {
  direction: directionArray[ArrayIndex],
  rows:x,
  columns:y
}


function turnLeft(currentRover){
  console.log("turnLeft was called!");
  switch (currentRover.direction) {
    case "North":
      arrayIndex=2;
      rover.direction=directionArray[arrayIndex]
      console.log("Direction now is "+directionArray[arrayIndex])
      break;
    case "East":
      arrayIndex=0;
      rover.direction=directionArray[arrayIndex]
      console.log("Direction now is "+directionArray[arrayIndex])
      break;
    case "West":
      arrayIndex=3;
      rover.direction=directionArray[arrayIndex]
      console.log("Direction now is "+directionArray[arrayIndex])
      break;
    case "South":
      arrayIndex=1;
      rover.direction=directionArray[arrayIndex]
      console.log("Direction now is "+directionArray[arrayIndex])
      break;
  }
}

function turnRight(currentRover){
  console.log("turnRight was called!");
  switch (currentRover.direction) {
    case "North":
      arrayIndex=1;
      rover.direction=directionArray[arrayIndex]
      console.log("Direction now is "+directionArray[arrayIndex])
      break;
    case "East":
      arrayIndex=3;
      rover.direction=directionArray[arrayIndex]
      console.log("Direction now is "+directionArray[arrayIndex])
      break;
    case "West":
      arrayIndex=0;
      rover.direction=directionArray[arrayIndex]
      console.log("Direction now is "+directionArray[arrayIndex])
      break;
    case "South":
      arrayIndex=2;
      rover.direction=directionArray[arrayIndex]
      console.log("Direction now is "+directionArray[arrayIndex])
      break;
  }
}

function moveForward(currentRover){
  console.log("moveForward was called")
  switch (currentRover.direction) {
    case "North":
      if (x-1<0) {
        x=x
      } else {
        x=x-1
      };
      rover.rows=x;
      travelLog.push({currentX:x,currentY:y});
      console.log("Position now is row"+x+"column"+y)
      break;
    case "East":
      y=y+1;
      rover.columns=y;
      travelLog.push({currentX:x,currentY:y});
      console.log("Position now is row"+x+"column"+y)
      break;
    case "West":
      if (y-1<0) {
        y=y
      } else {
        y=y-1

      };
      rover.columns=y;
      travelLog.push({currentX:x,currentY:y});
      console.log("Position now is row"+x+"column"+y)
      break;
    case "South":
      x=x+1;
      rover.rows=x;
      travelLog.push({currentX:x,currentY:y});
      console.log("Position now is row"+x+"column"+y)
      break;
  
    }
}

function commands(commandsList){
for (var i = 0; i < commandsList.length; i++) {
  switch (commandsList.charAt(i)) {
    case "f":
      moveForward(rover);
      break;
    case "l":
      turnLeft(rover);
      break;
    case "r":
      turnRight(rover);
      break;
}
}
}


function showTravelLog () {
  console.log(travelLog);
}