import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
 todoArray: Todo[] = []; // string[] = lista di stringhe

//  library: Library | undefined;

 constructor(private utilityService: UtilityService){
  // const book1 = new Book('iliade', 'omero', 200);
  // const book2 = new Book('odissea', 'omero', 210);
  // const book3 = new Book('divina commedia', 'dante', 1200);

  // const books: Book[] = [book1, book2, book3];
  // const newLibrary = new Library(books);
  // this.library = newLibrary;

  const todo1 = new Todo('comprare la spazzatura', false);
  const todo2 = new Todo('buttare la nonna', false);
  const todo3 = new Todo('chiamare il pane', false);

  this.todoArray = [todo1, todo2, todo3]
}
//  sortArrayByAlphabet(array: string[]): string[]{ // le funzioni che non ci servono nell'interface le spostiamo nei service o nei model, console ng g s utility per creare
//    const newArray = [...array]
//    newArray.sort((a, b) => a.localeCompare(b));
//    return newArray;
//  }

  // constructor(private utilityService: UtilityService){
  //   // this.utilityService = utilityService;
  // }


 sortTodo():void{
  this.todoArray = this.utilityService.sortArrayByAlphabet(this.todoArray);
 }



}

class Book{

   title: string;
   author: string;
   pages: number;

  constructor (title: string, author: string, pages:number){
    this.title = title;
    this.author = author;
    this. pages = pages;
  }

}

class Library{
  books: Book[];
  constructor(books: Book[]){
    this.books = books;
  }
}
