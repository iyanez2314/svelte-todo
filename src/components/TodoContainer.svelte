<script>
    import TodoItem from "./TodoItem.svelte";
    import {todoCount, totalDone} from "../stores/index.js";
    export let list;
    export let doneList;
</script>
<div class="text-white">
    <h1 class="font-semibold text-lg">
        {#if doneList}
            Done ({$totalDone})
        {:else}
            Todos ({$todoCount})
        {/if}
    </h1>
    <div class="bg-[#ffff] w-[300px] h-[400px] overflow-auto ">
        {#each list as item (item.id)}
            <TodoItem todo={item}/>
        {/each}
    </div>
</div>
