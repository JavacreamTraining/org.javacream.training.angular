import { Component, Input, OnInit } from '@angular/core';
import {Person} from '../people-model.service'
@Component({
  selector: 'app-simple-person-detail',
  templateUrl: './simple-person-detail.component.html',
  styleUrls: ['./simple-person-detail.component.css']
})
export class SimplePersonDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() person: Person
}
