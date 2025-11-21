import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type Task} from '../task/task.model';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  @Input({required:true}) selectedUserId!:string;
  @Output() sendTask = new EventEmitter<Task>();
  task?: Task;
  title?: string;
  summary?: string;
  dueDate?: string;

  onSubmit(){
    let taskId = `t${Math.floor((Math.random()*1000))}`
    const Mytask: Task = {
      id: taskId,
      userId: this.selectedUserId,
      title: this.title ?? '',
      summary: this.summary ?? '',
      dueDate: this.dueDate ?? ''

    };
    this.task = Mytask;
    console.log(`Title: ${this.title}, summary: ${this.summary}, due date: ${this.dueDate}`);
    this.sendTask.emit(this.task);

  }
}
