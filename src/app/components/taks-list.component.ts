import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tasks } from '../models/Task.model';
import { ExportService } from '../services/export.service';
import { Store } from '@ngrx/store';
import * as fromClient from '../reducers/Task.reducer';

@Component({
  selector: 'client-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {

  fieldOrderBy: keyof Tasks = 'code';
  multiplierOrderBy: 1 | -1 = 1;

  @Input() clientList;

  @Output() onLoad = new EventEmitter<Tasks>();
  @Output() onRemove = new EventEmitter<string>();
  @Output() onNew = new EventEmitter<string>();
  @Output() onSort = new EventEmitter<string>();

  constructor(private store: Store<fromClient.State>, private exportService: ExportService) {
  }

  ngOnInit() {
  }

  load(client) {
    this.onLoad.emit(client);
  }

  remove(id) {
    this.onRemove.emit(id);
  }

  new() {
    this.onNew.emit();
  }

  export() {
    this.exportService.exportExcel(this.clientList, 'clients');
  }

  sort(field) {
    this.onSort.emit(field);
  }
}

