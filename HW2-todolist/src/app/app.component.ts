import { Component, OnInit } from '@angular/core'
import { Todo, TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = []
  loading = false
  todoTitle = ''
  error = ''
  idForNewTodo: number

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.fetchTodos()
    this.idForNewTodo = 201
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }

    this.todosService.addTodo({
      title: this.todoTitle,
      completed: false,
      idForNewTodo: this.idForNewTodo++
    }).subscribe(todo => {
      console.log('todo', todo)
      this.todos.push(todo)
      this.todoTitle = ''
    })
  }

  fetchTodos() {
    this.loading = true
    this.todosService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      }, error => {
        console.log(error)
        this.error = error
      })
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }

  completeTodo(id?: number, idForNewTodo?: number) {
    if (id < 200) {
      this.todosService.completeTodo(id)
        .subscribe((todo) => {
          this.todos.find(t => t.id === todo.id).completed = true
        }, error => {
          console.log(error)
        })
    } else {
      this.todos.find(t => t.idForNewTodo === idForNewTodo).completed = true
    }

  }

}
