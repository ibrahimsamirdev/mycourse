import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService, Courses, Course } from '../services/backend.service';


@Component({
  selector: 'app-courseinfo',
  templateUrl: './courseinfo.component.html',
  styleUrls: ['./courseinfo.component.css']
})
export class CourseinfoComponent implements OnInit {

  course: Courses;
  constructor( private route: ActivatedRoute,private backendService: BackendService, 
    private router: Router){
    
  }

   id= this.route.snapshot.paramMap.get('id');
   ngOnInit(): void {
    this.backendService.getCoursesInfo(this.id).subscribe(result => {
      this.course=result;

    })
  }
  // enroll(){
  //   this.router.navigate(["/signup"]);
  // }

}
