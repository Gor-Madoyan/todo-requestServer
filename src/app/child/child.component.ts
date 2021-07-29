import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { DataServer } from '../interface';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() data:any;
  @Output() emitData = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  removeData(val:any) {
    this.emitData.emit(val)
  }

}
