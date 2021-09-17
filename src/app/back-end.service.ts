import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { PostService } from "./post.service";
import {tap} from 'rxjs/operators';
// https://live-posts-d6029-default-rtdb.firebaseio.com/
@Injectable({providedIn:'root'})
export class BackEndService{
constructor(private postservice: PostService,private http: HttpClient){}

saveData(){

    const listofpost: Post[]= this.postservice.getPosts();
    this.http.put(' https://live-posts-d6029-default-rtdb.firebaseio.com/posts.json', listofpost).subscribe((res)=>{
        console.log(res);
    });
}

fetchData(){
    this.http.get<Post[]>('https://live-posts-d6029-default-rtdb.firebaseio.com/posts.json').pipe(

    tap((listofposts: Post[])=>{
        console.log(listofposts);
        this.postservice.setPosts(listofposts);
    })
    ).subscribe();
}

}