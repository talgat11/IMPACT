import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() data: any;
  title = 'Results';
  activeElement = 'System Architecture';
  videoTitle = 'Music Game - demo';
  id = 'pRFptHcxmTw';
  player: YT.Player;
  width = '560px';
  widthsm = '270px';
  height = '315px';

  constructor() { }

  ngOnInit() {
  }
   changeFeature(title) {
    this.activeElement = title;
  }
  activateVideo() {
    if(this.activeElement == this.videoTitle) {
      return false;
    } else {
      return true;
    }
  }
  savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
  }
    onStateChange(event){
    console.log('player state', event.data);
  }
}
