import { Component, Input, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-hierarchical-item',
  imports: [CommonModule],
  templateUrl: './hierarchical-item.html',
  styleUrl: './hierarchical-item.css'
})
export class HierarchicalItem implements OnInit {
  @Input() root!: string;
  @Input() tree!: {[key: string]: string[]};
  ngOnInit() {
    console.log('HierarchicalItem initialized with eachTree:');
    console.log(this.root);
  }
}
