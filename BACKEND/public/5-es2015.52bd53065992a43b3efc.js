(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1jOP":function(t,e,r){"use strict";r.r(e);var o=r("ofXK"),i=r("tyNb"),s=r("3Pt+"),c=r("bTqV"),n=r("Wp6s"),a=r("qFsG"),l=r("kmnG"),u=r("/t3+"),b=r("fXoL"),m=r("LRne"),d=r("tk/3");let p=(()=>{class t{constructor(t){this.http=t,this.url="http://localhost:3000/api"}getByUserId(t){return this.http.get(this.url+`/courses/byuser/${t}`)}addCourse(t,e){return this.http.post(this.url+`/courses/add/${t}`,e)}addLecture(t,e){return this.http.post(this.url+`/lectures/add/${t}`,e)}getAllCourses(){this.http.get("http://localhost:3000/api/courses/").subscribe(t=>{localStorage.setItem("courses",JSON.stringify(t))});let t=Object(m.a)(JSON.parse(localStorage.getItem("courses")));return t.subscribe(t=>{console.log(t)}),t}}return t.\u0275fac=function(e){return new(e||t)(b.Vb(d.a))},t.\u0275prov=b.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=r("ej43");const f=function(t){return["addLecture",t]};function g(t,e){if(1&t&&(b.Rb(0,"div",8),b.Rb(1,"mat-card"),b.Rb(2,"mat-card-header"),b.Rb(3,"mat-card-title"),b.tc(4),b.Qb(),b.Qb(),b.Nb(5,"img",9),b.Rb(6,"mat-card-content"),b.Rb(7,"p"),b.tc(8),b.Qb(),b.Nb(9,"input",10,11),b.tc(11),b.Qb(),b.Rb(12,"mat-card-actions"),b.Rb(13,"button",12),b.tc(14,"Edit"),b.Qb(),b.Rb(15,"button",13),b.tc(16,"Add Lecture"),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&t){const t=e.$implicit,r=b.lc(10);b.Bb(4),b.uc(t.title),b.Bb(4),b.vc(" ",t.description," "),b.Bb(1),b.gc("value",t._id),b.Bb(2),b.vc(" [course_id]=",r.value," "),b.Bb(4),b.gc("routerLink",b.jc(5,f,r.value))}}const C=function(t){return["addCourse",t]};let v=(()=>{class t{constructor(t,e,r){this.service=t,this.router=e,this.authenticationService=r,this.courses$=[],this.coursesToDisplay$=[],this.user_id="",this.authenticationService.currentUser.subscribe(t=>this.user=t),this.user_id=this.user.id,console.log(this.user_id)}ngOnInit(){this.service.getByUserId(this.user_id).subscribe(t=>{this.getCoursesToDisplay(t),console.log(this.coursesToDisplay$)})}getCoursesToDisplay(t){t.forEach(t=>{t.courses.forEach(t=>{this.coursesToDisplay$.push(t)})})}}return t.\u0275fac=function(e){return new(e||t)(b.Mb(p),b.Mb(i.b),b.Mb(h.a))},t.\u0275cmp=b.Gb({type:t,selectors:[["app-instructors"]],decls:12,vars:4,consts:[[1,"home-welcome"],[1,"col-md-6"],[1,"welcome-message"],["color","primary"],["mat-raised-button","",3,"routerLink"],[1,"container"],[1,"row"],["class","col-md-4 course-card",4,"ngFor","ngForOf"],[1,"col-md-4","course-card"],["mat-card-image","","src","https://material.angular.io/assets/img/examples/shiba2.jpg"],[3,"value"],["course_id",""],["mat-button",""],["mat-button","",3,"routerLink"]],template:function(t,e){1&t&&(b.Rb(0,"div",0),b.Rb(1,"div",1),b.Rb(2,"div",2),b.tc(3,"INSTRUCTOR COURSES"),b.Qb(),b.Qb(),b.Nb(4,"div",1),b.Qb(),b.Rb(5,"div"),b.Rb(6,"mat-toolbar",3),b.Rb(7,"button",4),b.tc(8,"Add Course"),b.Qb(),b.Qb(),b.Qb(),b.Rb(9,"div",5),b.Rb(10,"div",6),b.sc(11,g,17,7,"div",7),b.Qb(),b.Qb()),2&t&&(b.Bb(7),b.gc("routerLink",b.jc(2,C,e.user_id)),b.Bb(4),b.gc("ngForOf",e.coursesToDisplay$))},directives:[u.a,c.b,i.c,o.h,n.a,n.d,n.g,n.e,n.c,n.b],styles:[".home-welcome[_ngcontent-%COMP%]{display:flex;text-align:center;overflow:hidden;background-color:#2f4f4f;color:#d3d3d3;font-size:20px}.home-welcome[_ngcontent-%COMP%], .welcome-message[_ngcontent-%COMP%]{font-family:Times New Roman,Times,serif}.welcome-message[_ngcontent-%COMP%]{font-size:70px;padding-top:109px;letter-spacing:normal;line-height:normal;color:#fff}.container[_ngcontent-%COMP%]{margin-bottom:80px}.container[_ngcontent-%COMP%], .course-card[_ngcontent-%COMP%]{padding-top:20px}"]}),t})(),F=(()=>{class t{constructor(t,e,r,o){this.service=t,this.router=r,this.authenticationService=o,this.user_id="",this.authenticationService.currentUser.subscribe(t=>this.user=t),this.user_id=this.user.id,this.courseForm=e.group({titleFormControl:new s.c("",[s.n.required]),categoryFormControl:new s.c("",[s.n.required]),levelFormControl:new s.c("",[s.n.required]),prerequisitesFormControl:new s.c("",[s.n.required]),imageFormControl:new s.c(""),topicFormControl:new s.c("",[s.n.required]),descriptionFormControl:new s.c("",[s.n.required]),publishedFormControl:new s.c("")})}ngOnInit(){}saveCourse(){const t={title:this.courseForm.controls.titleFormControl.value,category:this.courseForm.controls.categoryFormControl.value,level:this.courseForm.controls.levelFormControl.value,prerequisites:this.courseForm.controls.prerequisitesFormControl.value,image:this.courseForm.controls.imageFormControl.value,topic:this.courseForm.controls.topicFormControl.value,description:this.courseForm.controls.descriptionFormControl.value,published:this.courseForm.controls.publishedFormControl.value,lectures:[]};(new FormData).append("file",this.courseForm.get("imageFormControl").value),this.service.addCourse(this.user_id,t).subscribe(t=>{this.router.navigate(["/instructor"])})}}return t.\u0275fac=function(e){return new(e||t)(b.Mb(p),b.Mb(s.b),b.Mb(i.b),b.Mb(h.a))},t.\u0275cmp=b.Gb({type:t,selectors:[["app-course-add"]],decls:31,vars:2,consts:[[1,"container"],[1,"form-card"],[3,"formGroup","ngSubmit"],["formControlName","titleFormControl",1,"mat-form-field"],["formControlName","categoryFormControl",1,"mat-form-field"],["formControlName","levelFormControl",1,"mat-form-field"],["formControlName","prerequisitesFormControl",1,"mat-form-field"],["formControlName","imageFormControl","type","file","accept",".png,.jpeg,.jpg",1,"mat-form-field"],["formControlName","topicFormControl",1,"mat-form-field"],["formControlName","descriptionFormControl",1,"mat-form-field"],["mat-button","","type","submit","color","primary",3,"disabled"]],template:function(t,e){1&t&&(b.Rb(0,"div",0),b.Rb(1,"mat-card",1),b.Rb(2,"form",2),b.Zb("ngSubmit",(function(){return e.saveCourse()})),b.Rb(3,"mat-card-header"),b.Rb(4,"mat-card-title"),b.tc(5,"Add Course"),b.Qb(),b.Qb(),b.Rb(6,"mat-card-content"),b.Rb(7,"label"),b.tc(8,"Title"),b.Qb(),b.Nb(9,"input",3),b.Rb(10,"label"),b.tc(11,"Category"),b.Qb(),b.Nb(12,"input",4),b.Rb(13,"label"),b.tc(14,"Level"),b.Qb(),b.Nb(15,"input",5),b.Rb(16,"label"),b.tc(17,"Prerequisites"),b.Qb(),b.Nb(18,"input",6),b.Rb(19,"label"),b.tc(20,"Course Image"),b.Qb(),b.Nb(21,"input",7),b.Rb(22,"label"),b.tc(23,"Topic"),b.Qb(),b.Nb(24,"input",8),b.Rb(25,"label"),b.tc(26,"Description"),b.Qb(),b.Nb(27,"textarea",9),b.Qb(),b.Rb(28,"mat-card-actions"),b.Rb(29,"button",10),b.tc(30,"Create Course"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&t&&(b.Bb(2),b.gc("formGroup",e.courseForm),b.Bb(27),b.gc("disabled",!e.courseForm.valid))},directives:[n.a,s.o,s.j,s.e,n.d,n.g,n.c,s.a,s.i,s.d,n.b,c.b],styles:[".form-card[_ngcontent-%COMP%]{margin:40px auto}mat-form-field[_ngcontent-%COMP%]{display:block;width:80%}mat-card[_ngcontent-%COMP%]{width:40%}.mat-form-field[_ngcontent-%COMP%]{display:block;width:100%}"]}),t})(),R=(()=>{class t{constructor(t,e,r,o,i){this.service=t,this.router=r,this.authenticationService=o,this.activatedRoute=i,this.user_id="",this.course_id="",this.authenticationService.currentUser.subscribe(t=>this.user=t),this.user_id=this.user._id,this.lectureForm=e.group({titleFormControl:new s.c("",[s.n.required]),descriptionFormControl:new s.c("",[s.n.required]),videoFormControl:new s.c(""),resourcesFormControl:new s.c(""),visitedFormControl:new s.c("")})}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.course_id=t.ucid,console.log("this is the course id"),console.log(this.course_id)})}saveLecture(){this.service.addLecture(this.course_id,{title:this.lectureForm.controls.titleFormControl.value,description:this.lectureForm.controls.descriptionFormControl.value,video:"",resources:""}).subscribe(t=>{this.router.navigate(["/instructor"])})}}return t.\u0275fac=function(e){return new(e||t)(b.Mb(p),b.Mb(s.b),b.Mb(i.b),b.Mb(h.a),b.Mb(i.a))},t.\u0275cmp=b.Gb({type:t,selectors:[["app-lecture-add"]],decls:22,vars:2,consts:[[1,"container"],[1,"form-card"],[3,"formGroup","ngSubmit"],["formControlName","titleFormControl",1,"mat-form-field"],["formControlName","descriptionFormControl",1,"mat-form-field"],["formControlName","videoFormControl","type","file","accept",".mp4",1,"mat-form-field"],["formControlName","resourcesFormControl","type","file","accept",".mp4",1,"mat-form-field"],["mat-button","","type","submit","color","primary",3,"disabled"]],template:function(t,e){1&t&&(b.Rb(0,"div",0),b.Rb(1,"mat-card",1),b.Rb(2,"form",2),b.Zb("ngSubmit",(function(){return e.saveLecture()})),b.Rb(3,"mat-card-header"),b.Rb(4,"mat-card-title"),b.tc(5,"Add Lecture"),b.Qb(),b.Qb(),b.Rb(6,"mat-card-content"),b.Rb(7,"label"),b.tc(8,"Title"),b.Qb(),b.Nb(9,"input",3),b.Rb(10,"label"),b.tc(11,"Description"),b.Qb(),b.Nb(12,"input",4),b.Rb(13,"label"),b.tc(14,"Lecture Video"),b.Qb(),b.Nb(15,"input",5),b.Rb(16,"label"),b.tc(17,"Lecture Resources"),b.Qb(),b.Nb(18,"input",6),b.Qb(),b.Rb(19,"mat-card-actions"),b.Rb(20,"button",7),b.tc(21,"Create Lecture"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&t&&(b.Bb(2),b.gc("formGroup",e.lectureForm),b.Bb(18),b.gc("disabled",!e.lectureForm.valid))},directives:[n.a,s.o,s.j,s.e,n.d,n.g,n.c,s.a,s.i,s.d,n.b,c.b],styles:[".form-card[_ngcontent-%COMP%]{margin:40px auto}mat-form-field[_ngcontent-%COMP%]{display:block;width:80%}mat-card[_ngcontent-%COMP%]{width:40%}.mat-form-field[_ngcontent-%COMP%]{display:block;width:100%}"]}),t})();r.d(e,"InstructorsModule",(function(){return w}));const Q=[{path:"",component:v},{path:"addCourse/:uuid",component:F},{path:"addLecture/:ucid",component:R}];let w=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)},imports:[[o.b,n.f,u.b,c.c,n.f,a.b,l.d,s.f,s.l,i.e.forChild(Q)]]}),t})()}}]);