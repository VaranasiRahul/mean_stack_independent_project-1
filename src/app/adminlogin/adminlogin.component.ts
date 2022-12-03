import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  myform!:FormGroup;

  constructor(private _fb:FormBuilder,private helperService: HelperService) { }

  ngOnInit(): void {
  }

  DataBase(){
    alert('Admin logged in')
  }

}
