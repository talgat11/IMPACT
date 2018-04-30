import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  @Input() data: any;
  title = 'Features';
  activeElement = 'Mirror treatment';
  videoTitle = 'Older prototype';
  id = 'WMuO2mLgJzY';
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
