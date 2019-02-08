import { Component, OnInit } from "@angular/core";
import { Task } from "./task";

@Component({
  selector: "task-list",
  templateUrl: "task-list.component.html"
})
export class TaskListComponent implements OnInit {
  counter: number = 1;
  name: string;
  toggleButton: string;
  tasks: Task[] = [];
  constructor() {}
  ngOnInit() {}

  addTodo() {
    // console.log(this.name);
    if (this.name == undefined || this.name.length == 0) {
      alert("Please enter the todo!");
    } else {
      this.tasks.push({
        id: this.counter,
        name: this.name,
        completed: "Not Completed"
      });
      this.counter++;
    }

    this.name = "";
  }

  toggleCompletion(task: Task) {
    // First find index of the selected task.
    for (var i = 0; i < this.tasks.length; i++) {
      // console.log(this.tasks[i].name);
      if (this.tasks[i].id === task.id) {
        if (this.tasks[i].completed == "Not Completed") {
          this.tasks[i].completed = "Completed";
        } else {
          this.tasks[i].completed = "Not Completed";
        }
        // console.log(this.tasks[i]);
      }
    }
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Simple To-do";
}
