import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-acknowledgement',
  templateUrl: './acknowledgement.component.html',
  styleUrls: ['./acknowledgement.component.css']
})
export class AcknowledgementComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
