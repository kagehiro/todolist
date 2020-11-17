<template>
    <detail :task="TaskDetails" />
</template>

<script lang="ts">
import Detail from "@/components/Detail.vue"
import Vue from "vue"
import { Item } from "@/types/todo"
interface Data {
    TaskDetails: Item
}
export default Vue.extend({
    components: {
        Detail,
    },
    data: (): Data => ({
        TaskDetails: {
            name: "掃除する",
            description: "キッチンとリビング、寝室とバルコニーを掃除する。",
            limit: "2020/10/10",
            priority: "High",
            status: "InProgress",
            label: "家事",
        },
    }),
})
</script>
