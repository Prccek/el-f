import {Component, Input, OnInit} from '@angular/core';
import { Response } from '@angular/http';

import {Course} from '../course.interface';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input() courses: Course[];
  constructor( private courseService: CourseService) { }

  ngOnInit() {
  }

    onGetCourses() {
        this.courseService.getCourses()
            .subscribe(
                (courses: Course[]) => this.courses = courses,
                (error: Response) => console.log(error)
            );
    }

    onDelete(course: Course) {
    const position = this.courses.findIndex(
        (courseEl: Course) => {
          return courseEl.id === course.id;
        }
    );
    this.courses.splice(position, 1);
    }
}
