<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <h1>{{ header }}</h1>
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header', 'content', 'theme'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: #fff;
        border-radius: 10px;
        color: #000;
    }
    .modal.sale {
        background: crimson;
        color: white;
    }
    .backdrop {
        inset: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
    }
    h1 {
        text-align: left;
    }
</style>