<template>
    <div>
        <h1 style="color: red">
            <slot name="title" v-bind="content">todoアプリ</slot>
        </h1>
        <h2 style="color: blue">
            <slot name="body" v-bind="{ countup }"> ようこそ! </slot>
        </h2>
    </div>
</template>

<script>
export default {
    data: () => ({
        content: {
            name: "Alex",
            age: 100,
            greet: () => {
                return `Hello my name is Bob.`
            },
        },
    }),
    methods: {
        countup() {
            this.content.age++
        },
    },
}
</script>
