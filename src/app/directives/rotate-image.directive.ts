import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[rotate]',
})
export class RotateImageDirective {
  @Input('rotate')
  rotation: string;

  @Input()
  step: string;

  private rotateImage(amount: number) {
    const rotation = this.actualRotation() + amount;
    this.element.nativeElement.style.transform = `rotate(${rotation}deg)`;
  }

  constructor(private element: ElementRef) {
    this.step = '10';
    this.rotation = '15';
  }

  @HostListener('load')
  onLoadEvent() {
    this.rotateImage(parseInt(this.rotation));
  }

  @HostListener('click', ['$event'])
  onMouseClickEvent(e: MouseEvent) {
    if (e.shiftKey) {
      this.rotateImage(-parseInt(this.step));
    } else {
      this.rotateImage(parseInt(this.step));
    }
  }

  // * Logic to get actual rotation number from 'transform: rotate(Xdeg)' string
  private actualRotation(): number {
    const elementStyles = window.getComputedStyle(this.element.nativeElement);
    const transformValue =
      elementStyles.getPropertyValue('-webkit-transform') ||
      elementStyles.getPropertyValue('-moz-transform') ||
      elementStyles.getPropertyValue('-ms-transform') ||
      elementStyles.getPropertyValue('-o-transform') ||
      elementStyles.getPropertyValue('transform');

    if (transformValue != 'none') {
      const values = transformValue.split('(')[1].split(')')[0].split(',');
      const a = parseFloat(values[0]);
      const b = parseFloat(values[1]);

      const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

      return angle;
    }

    return 0;
  }
}
