import { Component } from '@angular/core';

interface TopMenus{
  title:string;
  link:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pinduoduo';
  selectedItem = -1;
  menus: TopMenus[] = [
    {
      title:'男装',
      link:'',
    },
    {
      title:'女装',
      link:'',
    },
    {
      title:'数码',
      link:'',
    },
    {
      title:'母婴',
      link:'',
    },
    {
      title:'家具',
      link:'',
    },
    {
      title:'女鞋',
      link:'',
    },
    {
      title:'女包',
      link:'',
    },
    {
      title:'零食',
      link:'',
    },
    {
      title:'生鲜',
      link:'',
    },
    {
      title:'乳品',
      link:'',
    },
    {
      title:'内衣',
      link:'',
    },{
      title:'零食',
      link:'',
    },
    {
      title:'床上用品',
      link:'',
    },
    {
      title:'厨具',
      link:'',
    },{
      title:'男包',
      link:'',
    }
  ];
  handle(index){
    this.selectedItem  = index;
  }
}
