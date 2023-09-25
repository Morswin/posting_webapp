export const useUserStore = defineStore('user', () => {
    interface Post {
        title: string
        content: string
        image?: string
    }

    const name = ref<string>("");
    const logged_in = ref<boolean>(false);
    const profile_pic = ref<string>("");
    const posts = ref<Array<Post>>();

    function log_in(user_name: string): void {
        console.log(`Logging in as ${user_name}`);
        logged_in.value = true;
        name.value = user_name;
    };
    function log_out(): void {
        console.log(`Logging out`);
        logged_in.value = false;
        name.value = "";
    };

    function create_new_post(_post_data: Post): void {
        posts.value?.push(_post_data);
    }
    function get_post_length(): number | undefined {
        return posts.value?.length;
    }

    return { name, logged_in, log_in, log_out, profile_pic, create_new_post, get_post_length }
})

