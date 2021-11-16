import { Component, OnInit } from '@angular/core';
import { environment as e_direct } from 'src/environments/environment';
import { environment as e_rel } from '../../environments/environment';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {
  constructor() {
    const x = e_rel.production;
    console.log(x);
  }

  ngOnInit(): void {
    const x = e_direct.production;
    console.log(x);
  }
}
