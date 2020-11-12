<template>
    <list :lists="lists" />
</template>

<script>
import List from '../components/List.vue'

export default {
    components: {
        List
    },
    data: () => ({
        lists: [
            {
                taskname: "掃除する",
                limit: "2020/10/10",
                priority: "High",
                status: "InProgress"
            },
            {
                taskname: "買い物に行く",
                limit: "2020/10/10",
                priority: "High",
                status: "InProgress"
            },
            {
                taskname: "夕飯作る",
                limit: "2020/10/10",
                priority: "Normal",
                status: "TODO"
            },
            {
                taskname: "銀行に行く",
                limit: "2020/10/10",
                priority: "Low",
                status: "Done"
            }
        ]
    })
}
</script>