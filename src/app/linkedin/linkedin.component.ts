import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.less']
})
export class LinkedinComponent implements OnInit {
  public href: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
    window.alert("Hi there");
    this.href = this.router.url;
    console.log(this.router.url);
  }

}
