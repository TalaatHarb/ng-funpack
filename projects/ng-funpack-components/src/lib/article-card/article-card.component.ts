import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'funpack-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() imgUrl = 'https://via.placeholder.com/500';
  @Input() tag = 'Tag';
  @Input() title = 'Title';
  @Input() subtitle = 'Subtitle';
  @Input() avatarUrl = 'https://via.placeholder.com/100';
  @Input() avatarName = 'Author';
  @Input() date = 'Today';

  constructor() { }

  ngOnInit(): void {
  }

}
