import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallery-actions',
  templateUrl: './gallery-actions.component.html',
  styleUrls: ['./gallery-actions.component.scss'],
})
export class GalleryActionsComponent implements OnInit {
  @Input()
  actualIndex: number;

  @Input()
  imagesLength: number;

  @Output()
  navigateClick: EventEmitter<number> = new EventEmitter();

  @Output()
  zoomClick: EventEmitter<number> = new EventEmitter();

  @Output()
  playClick: EventEmitter<boolean> = new EventEmitter();

  isNextDisabled: boolean;
  isPreviousDisabled: boolean;
  isPlaying: boolean;

  constructor() {
    this.actualIndex = 0;
    this.imagesLength = 0;
    this.isNextDisabled = false;
    this.isPreviousDisabled = true;
    this.isPlaying = false;
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.checkButtons();
  }

  // * Method to check if the Next/Prev Buttons must be disabled or not
  private checkButtons(): void {
    if (this.actualIndex === 0) {
      this.isPreviousDisabled = true;
      this.isNextDisabled = false;
    } else if (this.actualIndex === this.imagesLength - 1) {
      this.isNextDisabled = true;
      this.isPreviousDisabled = false;
    } else {
      this.isNextDisabled = false;
      this.isPreviousDisabled = false;
    }
  }

  // * Method to Navigate using the Next/Prev Buttons
  private navigate(index: number, option: string): number {
    if (option === 'next') {
      index =
        index >= this.imagesLength - 1 ? this.imagesLength - 1 : index + 1;
    }
    if (option === 'prev') {
      index = index === 0 ? 0 : index - 1;
    }
    this.checkButtons();
    return index;
  }

  // * Method to Change the size of the Image using the Zoom Buttons
  private changeSize(option: string) {
    if (option === 'in') {
    }
    if (option === 'out') {
    }
  }

  // * Method that emit the click on Next Button Event
  onNextClick(): void {
    this.actualIndex = this.navigate(this.actualIndex, 'next');
    this.navigateClick.emit(this.actualIndex);
  }

  // * Method that emit the click on Prev Button Event
  onPreviousClick(): void {
    this.actualIndex = this.navigate(this.actualIndex, 'prev');
    this.navigateClick.emit(this.actualIndex);
  }

  // * Method that emit the makeBigger Button Event
  onZoomInClick(): void {
    this.zoomClick.emit(5);
  }

  // * Method that emit the makeBigger Button Event
  onZoomOutClick(): void {
    this.zoomClick.emit(-5);
  }

  // * Method that emit Play/Stop Button Event
  onPlayClick() {
    this.isPlaying = !this.isPlaying;
    this.playClick.emit(this.isPlaying);
  }
}
