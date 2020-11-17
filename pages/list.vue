<template>
    <list :lists="lists" />
</template>

<script lang="ts">
import List from "@/components/List.vue"
import Vue from "vue"
import { Item } from "@/types/todo"
interface Data {
    lists: Item[]
}
export default Vue.extend({
    components: {
        List,
    },
    data: (): Data => ({
        lists: [
            {
                name: "掃除する",
                limit: "2020/10/10",
                priority: "High",
                status: "InProgress",
            },
            {
                name: "買い物に行く",
                limit: "2020/10/10",
                priority: "High",
                status: "InProgress",
            },
            {
                name: "夕飯作る",
                limit: "2020/10/10",
                priority: "Normal",
                status: "TODO",
            },
            {
                name: "銀行に行く",
                limit: "2020/10/10",
                priority: "Low",
                status: "Done",
            },
        ],
    }),
})
</script>
