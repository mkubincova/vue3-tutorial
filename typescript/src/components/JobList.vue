<template>
    <div class="job-list">
        <p>Ordered by {{ order }}</p>
        <transition-group name="list" tag="ul">
            <li v-for="job in orderedJobs" :key="job.id">
                <h2>{{ job.title }} in {{ job.location }}</h2>
                <div class="salary">
                    <img src="../assets/gem.svg" alt="gem icon">
                    <p>{{ job.salary }}</p>
                </div>
                <div class="description">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae officia magnam id iste alias quisquam expedita, totam porro, repellendus debitis tenetur quae. Corporis quasi facilis sint reiciendis voluptatum minus voluptas.</p>
                </div>
            </li>
        </transition-group>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue'
import type { Job } from '../types/Job';
import type { OrderTerm } from '../types/OrderTerm';

export default defineComponent({
    props: {
        jobs: {
            required: true,
            type: Array as PropType<Job[]>
        },
        order: {
            required: true,
            type: String as PropType<OrderTerm>
        }
    },
    setup(props) {
        const orderedJobs = computed(() => {
            return [...props.jobs].sort((a: Job, b: Job) => {
                return a[props.order] > b[props.order] ? 1 : -1
            })
        })

        return { orderedJobs }
    }
})
</script>

<style>
    .job-list {
        max-width: 960px;
        margin: 40px auto;
    }
    .job-list ul {
        padding: 0;
    }
    .job-list li {
        list-style-type: none;
        background: white;
        padding: 16px;
        margin: 16px 0;
        border-radius: 4px;
    }
    .job-list h2 {
        margin: 0 0 10px;
        text-transform: capitalize;
    }
    .salary {
        display: flex;
    }
    .salary img {
        width: 30px;
    }
    .salary p {
        color: #17bf66;
        font-weight: bold;
        margin: 10px 4px;
    }
    .list-move {
        transition: all 1s; 
    }
</style>