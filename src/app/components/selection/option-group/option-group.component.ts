import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'option-group',
  templateUrl: './option-group.component.html',
  styleUrls: ['./option-group.component.css']
})
export class OptionGroupComponent implements OnInit {

  @Input() id: string;
  @Input() label: string;
  @Input() disabled: boolean;

  @ViewChild('optgroup') el: ElementRef;

  constructor() { }

  ngOnInit() {

    var select = this.el.nativeElement;

    if (this.disabled == true) {

      select.setAttribute("disabled", "");

    } else {

      select.removeAttribute("disabled", "");

    }

  }

}
