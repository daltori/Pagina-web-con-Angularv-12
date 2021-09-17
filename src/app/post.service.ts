
import { Injectable,EventEmitter } from "@angular/core";

import { Post } from "./post.model";

@Injectable({providedIn:'root'})
export class PostService{
  listChangedEvent: EventEmitter<Post[]> =new EventEmitter();
  listofpost: Post[] = [
        // new Post(
        //     'Nature 1',
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        //     'https://blog.naturlider.com/wp-content/uploads/2020/03/AdobeStock_309195144-post-dia-mundial-naturaleza-1536x852.jpeg',
        //     'tester@test.com',
        //     new Date(),
        //     2
        //   ),
        //   new Post(
        //     'espiritu',
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        //     'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
        //     'tester@test.com',
        //     new Date(),
        //     5
        //   )
       
      ];

      getPosts(){

        return this.listofpost;
      }

      deletepost(index: number){
       this.listofpost.splice(index,1);
      }
      addPost(post:Post){
          this.listofpost.push(post);

      }
      udatePost(index:number,post:Post){
         this.listofpost[index]=post;
      }
      getpost(index : number){

        return this.listofpost[index];
      }
      likePost(index: number){
        this.listofpost[index].numberOfLikes+=1;

      }
      setPosts(listofpost:Post[]){
        this.listofpost=listofpost;
        this.listChangedEvent.emit(listofpost);
        
      }

}