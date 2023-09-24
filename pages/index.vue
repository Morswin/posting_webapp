<script setup lang="ts">
    const userStore = useUserStore();
</script>

<template>
    <div>
        <h1>Welcome!</h1>
        <form action="">
            <label for="login" class="text-lg">Login name: </label>
            <input name="login" type="text" class="p-1 text-sm" />
            <button class="ml-2 border-2 border-black rounded-md px-1 submit_btn">Login</button>
        </form>
    </div>
</template>