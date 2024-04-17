<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <slot>Default content</slot>
            <hr>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['theme'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style>
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
    .modal h1 {
        text-align: left;
    }
    .actions {
        display: flex;
        gap: 5px;
        margin-top: 10px;
    }
</style>