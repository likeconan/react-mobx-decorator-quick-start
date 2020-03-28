import { observable, computed } from 'mobx';

class TodoList {
    @observable todos = [{ title: 'Learn how to use react' }, { title: 'Learn how to use webpack' }, { title: 'Learn how to use mobx' }]
    @computed
    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}
export default TodoList;