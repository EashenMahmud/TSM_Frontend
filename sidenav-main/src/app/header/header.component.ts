import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @Input() collapsed = false;
  @Input() screenWidth = 0; 

  constructor(){}
  ngOnInit(): void {
    
  }
  getHeadClass(): string{
    let styeClass = '';
    if(this.collapsed && this.screenWidth> 768){
      styeClass = 'head-trimed';
    }else{
      styeClass = 'head-md-screen';
    }
    return styeClass;
  }
}
