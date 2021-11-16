import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {
  constructor() {
    const x = 1;
    console.log(x);
  }

  ngOnInit(): void {
    const x = 1;
    console.log(x);
  }
}
