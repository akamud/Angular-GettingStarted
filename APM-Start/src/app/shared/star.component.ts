import {
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core'

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number
  starWidth: number
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = Math.ceil(this.rating / 0.5) * 0.5 * 86 / 5
  }

  onClick() {
    this.ratingClicked.emit(`Rating ${this.rating} was clicked`)
  }
}
