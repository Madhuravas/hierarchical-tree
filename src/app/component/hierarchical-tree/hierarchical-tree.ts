import { Component, Input, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HierarchicalItem } from '../hierarchical-item/hierarchical-item';

@Component({
  selector: 'app-hierarchical-tree',
  imports: [CommonModule, HierarchicalItem],
  templateUrl: './hierarchical-tree.html',
  styleUrl: './hierarchical-tree.css'
})
export class HierarchicalTree implements OnInit {
  @Input() tree!: Record<string, string[]>;
  arrOfTrees: Object[] = [];
  root: string = 'a';

  ngOnInit() {
    
  };
}
