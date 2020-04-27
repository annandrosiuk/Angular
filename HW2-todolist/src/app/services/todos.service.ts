import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { delay, catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';

export interface Todo {
  completed: boolean,
  title: string,
  id?: number,
  idForNewTodo?: number
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://jsonplaceholder.typicode.com/todos', todo)
  }

  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams()
    params = params.append('_limit', '4')

    return this.http.get<Todo[]>('http://jsonplaceholder.typicode.com/todos', {
      params
    })
      .pipe(
        delay(500),
        catchError(error => {
          console.log('error', error.message)
          return throwError(error)
        })
      )
  }

  removeTodo(id: number): Observable<void> {
    return this.http.delete<void>(`http://jsonplaceholder.typicode.com/todos/${id}`)
  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(`http://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    })
  }
}
