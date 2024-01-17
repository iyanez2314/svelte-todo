<script>

    import {doneList, todoList} from "../stores/index.js";
    export let todo;

    function updateCheck() {
        todo.completed = !todo.completed;
        if (todo.completed) {
            doneList.update(currentDone => [...currentDone, todo]);
            todoList.update(currentTodos => currentTodos.filter(t => t.id !== todo.id));
        } else {
            todoList.update(currentTodos => [...currentTodos, todo]);
            doneList.update(currentDone => currentDone.filter(t => t.id !== todo.id));
        }
        todoList.subscribe(value => console.log('Todo List:', value))();
        doneList.subscribe(value => console.log('Done List:', value))();
    }
</script>
<div class={`w-full bg-[#313131] text-white p-4 flex items-center justify-between ${todo.completed ? "opacity-20" : ""}`}>
    <div>
        <h1>{todo.text}</h1>
        <p class="text-sm font-thin">Sun 17 2019</p>
    </div>
    <input bind:checked={todo.completed} on:click={updateCheck}  type="checkbox" class="w-5 h-5" />
</div>