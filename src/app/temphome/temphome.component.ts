import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temphome',
  templateUrl: './temphome.component.html',
  styleUrls: ['./temphome.component.scss']
})
export class TemphomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  DataBase(){
      alert('ONLY FOR ADMIN')
    }

}
