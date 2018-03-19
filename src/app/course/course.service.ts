import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth/auth.service';



@Injectable()

export class CourseService {

    constructor (private http: Http, private authService: AuthService) {

    }
    addCourse(content: string, name: string, text: string) {
        const token = this.authService.getToken();
        const body = JSON.stringify({content: content, name: name, text: text});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://el-backend.test/api/course?token=' + token, body, {headers: headers})
    };

    getCourses(): Observable<any> {
        return this.http.get('http://el-backend.test/api/courses')
            .map(
                (response: Response) => {
                    return response.json().courses;
                }
            );
    }

    updateCourse(id: number, content: string, name: string, text: string) {
        const token = this.authService.getToken();
        const body = JSON.stringify({content: content, name: name, text: text});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('http://el-backend.test/api/course/' + id + '?token=' + token, body, {headers: headers})
            .map(
                (response: Response) => response.json()
            );
    }

    deleteCourse(id: number) {
        const token = this.authService.getToken();
        return this.http.delete('http://el-backend.test/api/course/' + id + '?token=' + token);
    }
}
