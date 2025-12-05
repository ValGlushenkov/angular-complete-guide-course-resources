import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { SharedModule } from "../shared/shared.module";
import { NewTaskComponent } from "./new-task/new-task.component";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    exports:[TasksComponent],
    imports: [CommonModule, SharedModule, FormsModule]
})
export class TasksModule{}