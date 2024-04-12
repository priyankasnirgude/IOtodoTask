import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  @Input() getTodos !: Array<Itodo>
  constructor() { }

  ngOnInit(): void {
  }

}
