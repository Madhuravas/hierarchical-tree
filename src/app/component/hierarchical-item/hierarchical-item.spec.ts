import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalItem } from './hierarchical-item';

describe('HierarchicalItem', () => {
  let component: HierarchicalItem;
  let fixture: ComponentFixture<HierarchicalItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HierarchicalItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchicalItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
