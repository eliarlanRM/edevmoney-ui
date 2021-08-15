import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appBotaoVoltar]'
})
export class BotaoVoltarDirective {

  constructor(private location: Location) { }

  @HostListener('click')
    onClick() {
        this.location.back();
    }

}
