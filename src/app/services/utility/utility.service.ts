import { Injectable } from '@angular/core';
import { ITodo } from 'src/app/model/i-todo';
import { Todo } from 'src/app/model/todo';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  sortArrayByAlphabet(array: ITodo[]): ITodo[]{ // le funzioni che non ci servono nell'interface le spostiamo nei service o nei model, console ng g s utility per creare
    const newArray = [...array]
    newArray.sort((a, b) => a.title.localeCompare(b.title));
    return newArray;
  }
}
