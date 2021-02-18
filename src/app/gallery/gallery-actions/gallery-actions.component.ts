import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallery-actions',
  templateUrl: './gallery-actions.component.html',
  styleUrls: ['./gallery-actions.component.scss']
})
export class GalleryActionsComponent implements OnInit {

  @Input()
  actualIndex: number;

  @Input()
  imagesSize: number;

  @Output()
  navigateClick: EventEmitter<number> = new EventEmitter();

  isNextDisabled: boolean
  isPreviousDisabled: boolean

  constructor() {
    this.actualIndex = 0;
    this.imagesSize = 0;
    this.isNextDisabled = false;
    this.isPreviousDisabled = true;
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.checkButtons()
  }

// * Method to check if the Next/Prev Buttons must be disabled or not
  private checkButtons(): void {
    console.log(this.actualIndex)
    if (this.actualIndex === 0) {
      this.isPreviousDisabled = true
      this.isNextDisabled = false;
    }
    else if (this.actualIndex === this.imagesSize - 1) {
      this.isNextDisabled = true
      this.isPreviousDisabled = false;
    }
    else {
      this.isNextDisabled = false;
      this.isPreviousDisabled = false;
    }
  }

// * Method to Navigate using the Next/Prev Buttons
  private navigate(index: number, option: string): number {
    if (option === 'next') {
      index = (index >= this.imagesSize -1) ? (this.imagesSize - 1) : (index + 1)
    }
    if (option === 'prev') {
      index = (index === 0) ? 0 : (index - 1)
    }
    this.checkButtons();
    return index
  }

// * Method that handles the click on Next Button
  onNextClick(): void {
    this.actualIndex = this.navigate(this.actualIndex, 'next')
    this.navigateClick.emit(this.actualIndex)
  }

// * Method that handles the click on Prev Button
  onPreviousClick(): void {
    this.actualIndex = this.navigate(this.actualIndex, 'prev')
    this.navigateClick.emit(this.actualIndex)
  }
}
