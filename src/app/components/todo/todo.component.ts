import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { response } from 'express';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit
{
  todos:Todo[]=[];
  constructor (private toDoService:TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.toDoService.getTodos().subscribe(response=>{
      this.todos = response;
    })
  }

}
