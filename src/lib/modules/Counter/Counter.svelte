<script>
    let {data, name, type} = $props()

    let count = $state(data.value);

    function increment() {
        if(data.set) {
            data.set(count + 1)
        } else {
            count = count + 1
        }
    }

    function decrement() {
        if(data.set) {
            data.set(count - 1)
        } else {
            count = count - 1
        }
    }
</script>

<div class="relative p-8 border border-blue-200 bg-blue-50 dark:bg-blue-50/10">
    <div class="absolute top-2 left-2 bg-gray-200 rounded">{type}</div>
    <div class="absolute top-9 left-2 bg-gray-200 rounded">{name}</div>


    <div class="flex items-center justify-center gap-6">


        <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded shadow" onclick={decrement}>Decrement</button>
        <div class="border border-gray-400 w-32 h-32 flex items-center justify-center rounded-full text-6xl font-bold">{count}</div>
        <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded shadow" onclick={increment}>Increment</button>

    </div>
</div>
