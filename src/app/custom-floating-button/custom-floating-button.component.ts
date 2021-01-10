import { Component, OnInit } from '@angular/core';
import { floatingButtonAnimations } from '../floating-btn-animation';

@Component({
  selector: 'app-custom-floating-button',
  templateUrl: './custom-floating-button.component.html',
  styleUrls: ['./custom-floating-button.component.scss'],
  animations: floatingButtonAnimations
})
export class CustomFloatingButtonComponent implements OnInit {

  fabButtons = [
    {
      name: 'timeline',
      icon: 'timeline'
    },
    {
      name: 'view_headline',
      icon: 'view_headline'
    },
    {
      name: 'room',
      icon: 'room'
    },
    {
      name: 'lightbulb_outline',
      icon: 'lightbulb_outline'
    },
    {
      name: 'lock',
      icon: 'lock'
    }
  ];
  buttons = [];
  fabTogglerState = 'inactive';
  constructor() { }

  ngOnInit() {
  }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  onToggleAction(type) {
    console.log('type', type)
  }

}
