import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalTree } from './hierarchical-tree';

describe('HierarchicalTree', () => {
  let component: HierarchicalTree;
  let fixture: ComponentFixture<HierarchicalTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HierarchicalTree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchicalTree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
