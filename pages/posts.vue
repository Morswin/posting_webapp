<script setup lang="ts">
    const userStore = useUserStore();
</script>

<template>
    <div>
        <div>
            <h2 class="ml-2 mb-2">
                Create a new post:
            </h2>
            <form 
                action="" 
                class="flex flex-col ml-2 w-1/2 items-center border-2 border-black rounded-md p-2"
            >
                <div class="flex justify-between w-5/6">
                    <label for="post_title">Title:</label>
                    <input type="text" id="post_title">
                </div>
                <div>
                    <label for="">Content:</label>
                    <textarea 
                        name="" 
                        id="post_content" 
                        cols="30" 
                        rows="10"
                        class="border-2 border-black rounded-md h-20"
                    >
                    </textarea>
                </div>
                <button 
                    @click.prevent=""
                    class="mt-2 px-1 border-2 border-black rounded-md w-16"
                >
                    Post
                </button>
            </form>
        </div>
        <div v-if="userStore.get_post_length() > 0" >
            <h2>Existing posts:</h2>
            <Post 
                v-for="(item, index) in userStore.posts"
                :key="index"
                :title="item.title"
                :content="item.content"
            />
        </div>
    </div>
</template>