import { Component, OnInit } from '@angular/core';
import { VideoCallAgora } from './video-call-agora.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'agora-test-sitly';
  constructor(private videoService: VideoCallAgora ){
    
  }

  ngOnInit(): void {
      this.videoService.init();
  }
}
