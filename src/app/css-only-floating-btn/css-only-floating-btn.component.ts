import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, TemplateRef, Optional, Inject } from '@angular/core';

@Component({
  selector: 'app-css-only-floating-btn',
  templateUrl: './css-only-floating-btn.component.html',
  styleUrls: ['./css-only-floating-btn.component.scss']
})
export class CssOnlyFloatingBtnComponent implements OnInit, OnChanges {

  @Input() dataSource: any = [];
  @Input() useFor: string = '';
  @Input() isDelete: boolean = false;
  @Output() sendData = new EventEmitter<object>();
  yellow = '#ffc107';
  floatingButton = [
    {name: 'Add', icon: 'add', color: '#3e8beb'},
    {name: 'Edit', icon: 'create', color: '#2B2B2B'},
    {name: 'Delete', icon: 'delete_forever', color: '#ff4d4f'},
  ]
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
  }

  getAction(item: any) {
    console.log('item', item)
  }
}
