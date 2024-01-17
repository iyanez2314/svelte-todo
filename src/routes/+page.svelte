<script>
    import {todoList, doneList } from "../stores/index.js";
    import Input from "../components/Input.svelte";
    import Title from "../components/Title.svelte";
    import TodoContainer from "../components/TodoContainer.svelte";
    const isDoneList = true;
    let todos; 
    let done;
    const unsubToDoList = todoList.subscribe((value) => {
        todos = value;
    });
    const unsubDoneList = doneList.subscribe((value) => {
        done = value;
    });
</script>

<div id="container" class="flex flex-col justify-center items-center min-h-screen">
    <div class=" text-start p-6">
        <Title />
        <Input />
    </div>


    <div class="flex flex-wrap justify-center gap-2 sm:space-x-0">
    <TodoContainer list={todos} doneList={!isDoneList}  />
    <TodoContainer list={done} doneList={isDoneList} />

    </div>
   









</div>











<style lang="postcss">
    /* :global(html){
        background-color: theme(colors.gray.100);
    } */

    #container {
        width: 100%;
        height: 100%;
        background-color: #313131;
        background-image: radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0);
        background-size: 30px 30px;
        background-position: -5px -5px
}
</style>