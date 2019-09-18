<template>
    <div id="app">
        <h3>Got jokes?</h3>
        <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
        <button class="btn btn-primary" @click="addJoke">Add Jokes</button>
        <br>
        <span v-for="(category, index) in categorys" 
            :key='index'>
            <input
                type="checkbox"
                :value="category"
                v-model="checkedCategorys"
                checked>
            <label>{{category}}</label>&nbsp;
        </span>
        <br>
        <div class="col-md-12">
            <div class="row">
                <Joke
                    v-for="(joke, index) in $store.state.jokes"
                    v-show="checkedCategorys.includes(joke.category)"
                    :joke = 'joke'
                    :index = 'index'
                    :key = 'index'
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions} from 'vuex'
import Joke from './Joke.vue'

export default {
    data() {
        return {
            categorys: ['Programming', 'Dark', 'Miscellaneous'],
            checkedCategorys: ['Programming', 'Dark', 'Miscellaneous']
        }
    },
    methods: mapActions([
        'initJokes',
        'addJoke'
    ]),
    components:{
        Joke
    }
}
</script>