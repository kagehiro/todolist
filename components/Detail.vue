<template>
    <div class="basic-wrap">
        <div class="row-wrap">
            <span class="each-item"> タスク名：</span><br />
            {{ task.name }}
        </div>
        <div class="row-wrap">
            <span class="each-item">タスク詳細：</span><br />
            {{ task.description }}
        </div>
        <div class="flex-wrap row-wrap">
            <div><span class="each-item">期限：</span>{{ task.limit }}</div>
            <div>
                <span class="each-item">優先度：</span>{{ task.priority }}
            </div>
        </div>
        <div class="flex-wrap row-wrap">
            <div>
                <span class="each-item">ステータス：</span>{{ task.status }}
            </div>
            <div><span class="each-item">ラベル：</span>{{ task.label }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { Item } from "@/types/todo"
export default Vue.extend({
    props: {
        task: {
            type: Object as PropType<Item>,
        },
    },
})
</script>
<style scpoed>
.basic-wrap {
    background-color: #f5f5dc;
    color: black;
    max-width: 500px;
    margin: 60px auto;
    padding: 20px;
}
.row-wrap {
    border-bottom: 1px solid #696969;
    padding: 20px 0;
}
.row-wrap:last-child {
    border-bottom: 1px solid #696969;
    margin-bottom: 0;
}
.flex-wrap {
    display: flex;
    justify-content: space-between;
}
.each-item {
    font-size: 14px;
}
</style>
