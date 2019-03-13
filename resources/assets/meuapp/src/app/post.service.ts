import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';
import { Post } from './post';

@Injectable()
export class PostService {

  public posts: Post[] = [
    new Post("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
    new Post("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
    new Post("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
    new Post("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
    new Post("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
    new Post("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
    new Post("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
    new Post("joao", "Meu post", "Sub joao", "Joao@gmail.com", "minha mensagem"),
  ];

  constructor(private http: HttpClient) {
    this.http.get("/api/").subscribe(
      (posts:any[]) => {
        for(let p of posts){
          this.posts.push(
            new Post(
              p.nome, 
              p.titulo, 
              p.subtitulo, 
              p.email, 
              p.mensagem, 
              p.arquivo,
              p.id,
              p.likes
              )
          );
        }
      }
    );
  }

  salvar(post: Post, file: File){
    const uploadData = new FormData();
    uploadData.append('nome', post.nome);
    uploadData.append('email', post.email);
    uploadData.append('titulo', post.titulo);
    uploadData.append('subtitulo', post.subtitulo);
    uploadData.append('mensagem', post.mensagem);
    uploadData.append('arquivo', post.arquivo);
    
    this.http.post("/api", uploadData, {reportProgress: true, observe: 'events'})
        .subscribe((event: any) => {
          if( event.type == HttpEventType.Response){
            console.log(event);
          }
          if( event.type == HttpEventType.UploadProgress){
            console.log('UploadProgress');
            console.log(event);
          }
        })
  }
}
