<template>
    <greeting>
        <template #title="{ name, age, greet }">
            aaa
            {{ name }}
            {{ age }}
            {{ greet() }}
        </template>
        <template #body="{ countup }">
            <v-btn @click="countup">countup</v-btn>
        </template>
    </greeting>
</template>

<script>
import Greeting from "@/components/Greeting.vue"
export default {
    data: () => ({}),
}
</script>
