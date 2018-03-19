import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../course.interface';
import {CourseService} from './course.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() courseDeleted = new EventEmitter<Course>();
  editing = false;
    editName = null;
    editContent = null;
    editText = null;



  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  onEdit() {
      this.editing = true;
      this.editName = this.course.name;
      this.editContent = this.course.content;
      this.editText = this.course.text;
  }


  onUpdate() {
      this.courseService.updateCourse(this.course.id, this.editName, this.editContent, this.editText)
          .subscribe(
              (course: Course) => {
                  this.course.name = this.editName;
                  this.editName = '';
                  this.course.content = this.editContent;
                  this.editContent = '';
                  this.course.text = this.editText;
                  this.editText = '';
                  console.log('updated')
              }
          );
      this.editing = false;
  }

  onCancel() {
      this.editName = '';
      this.editContent = '';
      this.editText = '';
      this.editing = false;
  }

  onDelete() {
      this.courseService.deleteCourse(this.course.id)
          .subscribe(
              () => {
                  this.courseDeleted.emit(this.course);
                  console.log('Course deleted')
              }
          );
  }
}
