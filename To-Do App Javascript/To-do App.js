let todo = [];

let req = prompt("please enter your request");

while (true) {
  if (req == "Quit") {
    console.log("quitting app");
    break;
  }

  if (req == "List") {
    console.log("__________");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("__________");
  } else if (req == "Add") {
    let task = prompt("please enter the task to add");
    todo.push(task);
    console.log("task added");
  } else if (req == "Delete") {
    let idx = prompt("please enter the task index");
    todo.splice(idx, 1);
    console.log("task deleted");
  } else {
    console.log("Wrong Req.");
  }

  req = prompt("please enter your req");
}
