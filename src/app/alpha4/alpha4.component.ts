import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alpha4',
  templateUrl: './alpha4.component.html',
  styleUrls: ['./alpha4.component.scss']
})
export class Alpha4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  DataBase(){
    alert('ONLY FOR ADMIN')
  }

}
