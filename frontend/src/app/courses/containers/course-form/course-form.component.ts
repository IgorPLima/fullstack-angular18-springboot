import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CoursesListComponent } from '../../components/courses-list/courses-list.component';
import { CoursesService } from '../../service/courses.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Course } from '../../model/course';



@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule, MatSelectModule, MatSnackBarModule, CoursesListComponent],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {

  form!: FormGroup;
  courseId!: string;
  isEdit = false;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    private courseService: CoursesService
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      category: ['']
    });
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = params.get('id');
          if (id) {
            this.isEdit = true;
            this.courseId = id;
            return this.courseService.loadById(id);
          }
          return [];
        })
      )
      .subscribe({
        next: (course: Course) => {
          if (course) {
            this.form.patchValue({
              name: course.name,
              category: course.category
            });
          }
        },
        error: (err) => {
          console.error('Erro ao carregar curso: ', err);
        }
      })
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => this.onSucess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  onError() {
    this.snackBar.open('Erro ao salvar curso!', '', { duration: 5000 });
  }

}
