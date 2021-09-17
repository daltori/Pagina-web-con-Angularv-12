import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number=0;
  editmode=false;
  constructor(private postService:PostService,private route:Router,private rout:ActivatedRoute ) { }

  ngOnInit(): void {
    let title='';
    let description='';
    let imagePath='';
    this.rout.params.subscribe((params:Params) =>{
      if(params['index']){
        console.log(params['index']);
        this.index= params['index'];
        const post =this.postService.getpost(this.index);
        title = post.title;
        description=post.description;
        imagePath=post.imagePath;
        this.editmode= true;
      }
    });
    this.form= new FormGroup({
      title:new FormControl(title,[Validators.required,Validators.maxLength(20)]),
      description: new FormControl(description,[Validators.required]),
      imagePath: new FormControl(imagePath,[Validators.required]),
    });
  }
  onSubmit(){

    const title= this.form.value.title;
    const description= this.form.value.description;
    const imagePath= this.form.value.imagePath;

    const post= new Post(title,description,imagePath,'test@test.com',new Date(),0);
    if(this.editmode){
    this.postService.udatePost(this.index,post);
    }else{
    this.postService.addPost(post);}
    this.route.navigate(["/post-list"]);
  };
  
  
}
