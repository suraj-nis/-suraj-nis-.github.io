import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html', /* uses this html file that we made in the same folder */
  styleUrls: ['./star.component.css'] /* uses this css file that we made in the same folder */
})
export class StarComponent implements OnChanges {
  /* sets variables for communication between parent and child modules*/
  @Input() rating: number = 0;
  cropWidth: number = 75;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnChanges(): void { /* this divides the stars porportional to fit any decimal and make it into an image */
    this.cropWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`); /* shows the rating that was clicked and stores in a variable*/
  }
}
