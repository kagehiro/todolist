<template>

</template>

<script lang="ts">
import Vue,{PropType} from 'vue'
interface Item {
    taskname: string;
    limit: string;
    priority: string;
    status: string;
}
export default Vue.extend({
    props: {
        lists: {
            type: Array as PropType<Item[]>
        }
    }
})
</script>