import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CategoryPipe } from '../../../shared/pipes/category.pipe';
import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatToolbarModule, MatProgressSpinnerModule, MatIconModule, CategoryPipe, MatButtonModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(
  ) { }

  ngOnInit(): void {

  }

  onAdd() {
    this.add.emit(true);
    // this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(course: Course){
    this.edit.emit(course);
  }

}
