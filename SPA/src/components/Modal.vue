<template>
    <div class="backdrop">
        <div class="modal">
            <p>modal content</p>
        </div>
    </div>
</template>

<style>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: #fff;
        border-radius: 10px;
        color: #000;
    }
    .backdrop {
        inset: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
    }
</style>