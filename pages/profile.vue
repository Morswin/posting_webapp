<script setup lang="ts">
    const userStore = useUserStore();
    const form_name = ref<string>(userStore.name);
    const form_picture = ref<string>("");
    const update_profile = (_name: string, _profile: string) => {
        userStore.name = _name;
        userStore.profile_pic = _profile;
    };
</script>


<template>
    <div>
        <form action="" class="flex flex-col w-3/5 items-center">
            <div class="flex justify-between w-full my-2">
                <label 
                    for="user_name"
                    class="ml-2"
                >
                    User name:
                </label>
                <input 
                    type="text" 
                    id="user_name" 
                    v-model="form_name"
                    class="pl-1"
                />
            </div>
            <div class="flex justify-between w-full my-2">
                <label 
                    for="user_picture"
                    class="ml-2"
                >
                    User profile picture URL:
                </label>
                <input 
                    type="text" 
                    id="user_picture" 
                    class="pl-1"
                />
            </div>
            <button 
                class="border-2 border-black rounded-md px-1 submit_btn w-1/6 my-2"
                @click.prevent="update_profile(form_name, form_picture)"
            >
                Submit
            </button>
        </form>
    </div>
</template>