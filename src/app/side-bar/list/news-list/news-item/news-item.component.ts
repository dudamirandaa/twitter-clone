import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() type?: string;
  @Input() description?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
