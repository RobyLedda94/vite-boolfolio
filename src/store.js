import { reactive } from 'vue'

export const store = reactive({
    menuItems: [
        {
            name: 'hompage',
            label: 'Home'
        },
        {
            name: 'posts',
            label: 'Posts'
        }
    ]
});