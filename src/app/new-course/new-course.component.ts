
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.courseService.addCourse(form.value.content, form.value.name, form.value.text)
    .subscribe(
          () => alert('Course created!')
      );
    form.resetForm()
  }
}
