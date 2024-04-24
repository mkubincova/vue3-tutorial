<template>
    <main>
        <header>
            <img src="./assets/pinia-logo.svg" alt="logo">
            <h1>Pinia Tasks</h1>
        </header>

        <div class="new-task-form">
            <TaskForm />
        </div>

        <nav class="filter">
            <button @click="filter = 'all'">All tasks</button>
            <button @click="filter = 'favs'">Fave tasks</button>
        </nav>

        <div class="loading" v-if="isLoading">Loading tasks...</div>

        <div class="task-list" v-if="filter === 'all'">
            <p>You have {{ totalCount }} tasks left to do</p>
            <div v-for="task in tasks" :key="task.id">
                <TaskDetails :task="task" />
            </div>
        </div>

        <div class="task-list" v-if="filter === 'favs'">
            <p>You have {{ favCount }} favs left to do</p>
            <div v-for="task in favs" :key="task.id">
                <TaskDetails :task="task" />
            </div>
        </div>

        <div class="reset">
            <button @click="taskStore.$reset">Reset state</button>
        </div>
    </main>
</template>

<script>
    import { ref } from 'vue'
    import TaskDetails from './components/TaskDetails.vue'
    import TaskForm from './components/TaskForm.vue'
    import { useTaskStore } from './stores/TaskStore'
import { storeToRefs } from 'pinia';

    export default {
        components: { TaskDetails, TaskForm },
        setup () {
            const taskStore = useTaskStore()

            // doesn't work on actions
            const { tasks, isLoading, favs, totalCount, favCount } = storeToRefs(taskStore)

            //fetch tasks
            taskStore.getTasks()

            const filter = ref('all')

            return { taskStore, filter, tasks, isLoading, favs, totalCount, favCount }
        }
    }
</script>