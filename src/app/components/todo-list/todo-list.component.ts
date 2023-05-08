import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
 todoArray: string[] = ['comprare pane','buttare spazzatura','chiama nonna']; // string[] = lista di stringhe


}
