import { Component, input, inject, computed, OnInit, DestroyRef } from '@angular/core';
import { UsersService } from '../users.service';
import {  RouterOutlet, RouterLink, ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent  {
  // userId = input.required<string>();
  userName = input.required<string>();
  message = input.required<string>();


  // userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);

}

export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  const userService = inject(UsersService);
  const userName = userService.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))?.name || '';

  return userName;
};