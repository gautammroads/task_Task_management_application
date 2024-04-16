import { Component, ViewChild, AfterViewInit, OnInit, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ClientService } from '../services/task.service';
import { Tasks } from '../models/Task.model';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromClient from '../reducers/Task.reducer';
import { selectAllClients, selectCurrentClient } from '../selectors/task.selectors';
import { loadClients, loadClient, saveClient, updateClient } from '../actions/task.actions';

@Component({
  selector: 'client-cad',
  templateUrl: './task-cad.component.html',
})
export class TaskCadComponent implements OnInit, AfterViewInit {

  @Input() currentClient;

  submited = false;

  form = this.initForm(this.currentClient);

  constructor(
    private fb: FormBuilder,
    private store: Store<fromClient.State>) {
  }

  ngOnInit() {
    this.store.select(selectCurrentClient).subscribe(data => {
      this.submited = false;
      this.form = this.initForm(data);
    });
  }

  initForm(client?) {
    return this.fb.group({
      _id: [client && client._id ? client._id : undefined],
      code: [client && client.code ? client.code : '', [Validators.required]],
      name: [client && client.name ? client.name : '', [Validators.required]],
      address: [client && client.address ? client.address : '', [Validators.required]],
      telephone: [client && client.telephone ? client.telephone : '', [Validators.required]],
      status: [client && client.status ? client.status : '', [Validators.required]],
      birthDate: [client && client.birthDate ? moment(client.birthDate).format('MM/DD/YYYY') : '', [Validators.required]],
    });
  }

  ngAfterViewInit() {

  }

  onSubmit() {
    this.submited = true;

    if (this.form.valid) {
      const client: Tasks = this.form.value;

      if (client._id) {
        this.update(client);
      } else {
        this.create(client);
      }
    }
  }

  update(client: Tasks) {
    this.store.dispatch(updateClient({ client }));
    this.submited = false;
  }

  create(client: Tasks) {
    this.store.dispatch(saveClient({ client }));
    this.form.reset();
    this.submited = false;
  }
}