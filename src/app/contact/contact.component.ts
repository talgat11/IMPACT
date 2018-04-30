import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() data: any;
  lat = 46.793527;
  lng = 7.159088;
  title = 'Contact';

  constructor() { }

  ngOnInit() {
  }

}
