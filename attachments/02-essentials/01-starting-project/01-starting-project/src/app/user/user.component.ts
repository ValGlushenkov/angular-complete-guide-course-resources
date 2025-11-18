import { Component, EventEmitter, Input, Output, output } from '@angular/core';

import {DUMMY_USERS} from '../header/dummy-users';

type User = {
  id: string;
    avatar: string;
    name: string;
};

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: {
    id: string;
    avatar: string;
    name: string;
  };

  
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
