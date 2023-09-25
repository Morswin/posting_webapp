<script setup lang="ts">
    const userStore = useUserStore();
    const login_input_name = ref<string>("");
</script>

<template>
    <div>
        <h1 v-if="userStore.logged_in" class="ml-2">Welcome {{userStore.name}}!</h1>
        <h1 v-else class="ml-2">Welcome!</h1>
        <form action="" v-if="!userStore.logged_in">
            <label for="login" class="text-lg ml-2">Login name: </label>
            <input 
                id="login" 
                type="text" 
                class="p-1 text-sm" 
                v-model="login_input_name"
            />
            <button 
                class="ml-2 border-2 border-black rounded-md px-1 submit_btn"
                @click.prevent="userStore.log_in(login_input_name)"
            >
                Login
            </button>
        </form>
    </div>
</template>