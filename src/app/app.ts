import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HierarchicalTree } from './component/hierarchical-tree/hierarchical-tree';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HierarchicalTree],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hierarchical-tree');
  tree: Record<string, string[]>= {
    "a": ["b", "c"],
    "b": ["d", "e"],
    "c": ["f", "g"],
    "e": ["h", "i"],
    "f": ["j", "k"]
  }
}