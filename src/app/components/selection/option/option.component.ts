import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'option-mode',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Input() id: string;
  @Input() label: string;
  @Input() value: string;
  @Input() disabled: boolean;
  @Input() selected: boolean;

  @ViewChild('option') el: ElementRef;

  constructor() { }

  ngOnInit() {

    var select = this.el.nativeElement;

    if (this.disabled == true) {

      select.setAttribute("disabled", "");

    } else {

      select.removeAttribute("disabled", "");

    }

    if (this.selected == true) {

      select.setAttribute("selected", "");

    } else {

      select.removeAttribute("selected", "");

    }

  }

}
