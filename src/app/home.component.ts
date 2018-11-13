import {Component} from '@angular/core';

@Component({
  selector: 'app-homme',
  template: `
    home component
    <!--<video controls>-->
      <!--<source src="https://www.youtube.com/watch?v=tIdIqbv7SPo" type="video/mp4">-->
      <!--<source src="https://www.youtube.com/watch?v=tIdIqbv7SPo" type="video/ogg">-->
    <!--</video>-->
    <video>
      <source url="example.video.mp4" type="video/mp4">
    </video>
    <!--<iframe width="420" height="315"-->
            <!--src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">-->
    <!--</iframe>-->
  `
})
export class HomeComponent { }
