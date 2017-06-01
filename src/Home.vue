<template>
    <div class="grey-border pad15">
        <h1>Trade or View your Portfolio</h1>
        <p>You may save & load Data</p>
        <p>Click on 'End Day' to begin a new Day!</p>
        <hr>
        <p><strong>Your Funds: ${{$store.getters.user.founds}}</strong></p>
    </div>
</template>

<style lang="scss">
    .grey-border {
        border: 2px solid #ccc;
        border-radius: 5px;
    }

    .pad15 {
        padding: 15px;
    }
</style>