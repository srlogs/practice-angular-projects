import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoitem';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private list = new TodoList('logesh', [
        new TodoItem("have to sleep"),
        new TodoItem("I need to start project", true),
        new TodoItem("i feeling sleepy")]);

    get username(): string {
        return this.list.user;
    }

    get itemCount(): number {
        return this.list.items.filter(x => !x.complete).length;
    }

    get items(): readonly TodoItem[] {
        return this.list.items.filter(item => !item.complete || this.showComplete);
    }

    addItem(newItem: any) {
        if (newItem != "") {
            this.list.addItem(newItem);
        }
    }

    showComplete: boolean = false;
}
