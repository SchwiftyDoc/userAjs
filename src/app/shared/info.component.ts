import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import {IInfo} from './info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, AfterViewInit {

  @Input() info: IInfo;
  type: string;
  div: HTMLElement;
  closed: boolean = false;

  constructor(private _elemRef: ElementRef) { }

  ngOnInit() {
    this.type = (this.info.type !== 'error') ? this.info.type : 'danger';
    this.div = this._elemRef.nativeElement.firstChild;
  }

  ngAfterViewInit() {
    const a = this.div.getElementsByTagName('a')[0];
    const minus = -1 * this.div.offsetWidth / 2;
    this.div.style.marginLeft = minus + 'px';
    setTimeout(() => {
      if (!this.closed) {
        a.click();
      }
    }, this.info.delay);
  }

  clicked(): void {
    this.closed = true;

  }

}
