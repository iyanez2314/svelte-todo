<script>
    import { todoList } from "../stores/index.js";
    let newTodo;

    function addTodo() {
        if (newTodo) {
            todoList.update(currentTodos => {
                const maxId = currentTodos.length > 0 
                    ? Math.max(...currentTodos.map(todo => todo.id))
                    : 0;
                return [...currentTodos, { id: maxId + 1, text: newTodo, completed: false }];
            });
            newTodo = "";
        }
    }


    function handleKeyup(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    }
    
</script>

<input bind:value={newTodo} on:keyup={handleKeyup} type="text" class="border-2 border-gray-300 bg-white h-10 px-5 pr-16  text-sm focus:outline-none" placeholder="Clean Room" />