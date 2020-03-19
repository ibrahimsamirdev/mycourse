import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { User, AuthenticationService } from '../services/authentication.service';
import { InstructorBackendService } from '../services/instructor-backend.service';
import { InstructorCourses, Lecture } from '../instructors.model';

@Component({
  selector: 'app-lecture-add',
  templateUrl: './lecture-add.component.html',
  styleUrls: ['../styles.css']
})
export class LectureAddComponent implements OnInit {
  lectureForm: FormGroup;

  user: User;
  public user_id = '';
  public course_id = '';

  constructor(
    private service: InstructorBackendService,
    fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute ) {
      this.authenticationService.currentUser.subscribe(user=> this.user = user)
      this.user_id = this.user['_id'];

      this.lectureForm = fb.group({
        titleFormControl : new FormControl('', [Validators.required] ),
        descriptionFormControl : new FormControl('', [Validators.required] ),
        videoFormControl : new FormControl(''),
        resourcesFormControl : new FormControl(''),
        visitedFormControl : new FormControl('')
      })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.course_id = params['ucid'];
      console.log('this is the course id');
      console.log(this.course_id);
    });
  }

  saveLecture() {
    const lecture: Lecture = {
      title: this.lectureForm.controls.titleFormControl.value,
      description: this.lectureForm.controls.descriptionFormControl.value,
      video: '',
      resources: ''
    }

    // const formData = new FormData();
    // formData.append('file', this.lectureForm.get('video').value);


    this.service.addLecture(this.course_id, lecture)
      .subscribe((result)=>{
        this.router.navigate(["/instructor"]);
    })
  }

}
