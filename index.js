import { createWebHistory, createRouter } from 'vue-router';
 
let routes = [];
 
const router = createRouter({
    history: createWebHistory( process.env.BASE_URL ),
    routes
});
 
export default router; 