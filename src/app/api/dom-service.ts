import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class DOMService {

  public body;

  constructor(@Inject(DOCUMENT) public document: any) { }

  public isVisible(el: HTMLElement): boolean {
    if (!el) {
      console.log('[DOMService][isVisible]: Empty element');
      return;
    }
    return (el.offsetWidth > 0 || el.offsetHeight > 0);
  }

  public addClass(className: string, el?: HTMLElement): void {
    if (!el) {
      el = this.body;
    }
    el.classList.add(className);
  }

  public removeClass(className: string, el?: HTMLElement): void {
    if (!el) {
      el = this.body;
    }
    el.classList.remove(className);
  }
}
