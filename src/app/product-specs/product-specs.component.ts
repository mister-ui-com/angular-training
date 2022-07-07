import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-specs',
  templateUrl: './product-specs.component.html',
  styleUrls: ['./product-specs.component.css']
})
export class ProductSpecsComponent implements OnInit {

 public studntName = "John, Doe";

  constructor() { }

  ngOnInit() {
  }

}
