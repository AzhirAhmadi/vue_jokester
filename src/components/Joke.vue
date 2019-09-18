<template>
    <div class="col-md-6">
        <div class="joke-card">
            <div class="card-block">
                <button class="close" @click="removeJoke(index)"><span>&times;</span></button>
                <div v-if="joke.type === 'single'">
                    <p><u>{{joke.category}}</u></p>
                    <p><em>{{joke.joke}}</em></p>
                 </div>
                <div v-if="joke.type === 'twopart'">
                    <p><u>{{joke.category}}</u></p>
                    <p><em>{{joke.setup}}</em></p>
                    <br>
                    <p><em>{{joke.delivery}}</em></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['joke', 'index'],
    methods: mapActions([
        'removeJoke'
    ])
}
</script>