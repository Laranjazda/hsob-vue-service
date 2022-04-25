<template>
    <nav>
        <ul>
            <li v-for="route in routes" :key="route">
                <router-link :to="route.path">{{route.name}}</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
import { routes } from '../../routes'
export default {
    data(){
        return{
            routes
        }
    }    
}
</script>