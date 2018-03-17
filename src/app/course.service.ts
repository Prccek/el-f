import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';



@Injectable()

export class CourseService {
    constructor (private http: Http) {

    }
    addCourse(content: string, name: string, text: string) {
        const body = JSON.stringify({content: content, name: name, text: text});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://el-backend.test/api/course', body, {headers: headers})
    };

    getCourses(): Observable<any> {
        return this.http.get('http://el-backend.test/api/courses')
            .map(
                (response: Response) => {
                    return response.json().courses;
                }
            );
    }

    updateCourse(id: number, newContent: string, newName: string, newText: string) {
        const body = JSON.stringify({content: newContent, name: newName, text: newText});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('http://el-backend.test/api/course/' + id, body, {headers: headers})
            .map(
                (response: Response) => response.json()
            );
    }

    deleteCourse(id: number) {
        return this.http.delete('http://el-backend.test/api/course/' + id);
    }
}
