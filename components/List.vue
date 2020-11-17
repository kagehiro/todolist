<template>
    <v-simple-table fixed-header height="300px">
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">タスク名</th>
                    <th class="text-left">期限</th>
                    <th class="text-left">優先度</th>
                    <th class="text-left">ステータス</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in lists" :key="item.taskname">
                    <td>{{ item.name }}</td>
                    <td>{{ item.limit }}</td>
                    <td>{{ item.priority }}</td>
                    <td>{{ item.status }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { Item } from "@/types/todo"
export default Vue.extend({
    props: {
        lists: {
            type: Array as PropType<Item[]>,
        },
    },
})
</script>
