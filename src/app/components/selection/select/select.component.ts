import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'selection',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() id: string;
  @Input() form: string;
  @Input() size: string;
  @Input() name: string;
  @Input() autofocus: boolean;
  @Input() disabled: boolean;
  @Input() multiple: boolean;
  @Input() required: boolean;

  @ViewChild('select') el: ElementRef;

  constructor() { }

  ngOnInit() {

    var select = this.el.nativeElement;

    if (this.autofocus == true) {

      select.setAttribute("autofocus", "");

    } else {

      select.removeAttribute("autofocus", "");

    }

    if (this.disabled == true) {

      select.setAttribute("disabled", "");

    } else {

      select.removeAttribute("disabled", "");

    }

    if (this.multiple == true) {

      select.setAttribute("multiple", "");

    } else {

      select.removeAttribute("multiple", "");

    }

    if (this.required == true) {

      select.setAttribute("required", "");

    } else {

      select.removeAttribute("required", "");

    }

  }

}
