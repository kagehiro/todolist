<template>
    <validation-observer ref="observer" v-slot="{ invalid, reset }">
        <form @submit.prevent="submit">
            <validation-provider
                v-slot="{ errors }"
                name="タスク名"
                rules="required|max:10"
            >
                <v-text-field
                    v-model="name"
                    :counter="20"
                    :error-messages="errors"
                    label="タスク名"
                    required
                ></v-text-field>
            </validation-provider>
            <validation-provider
                v-slot="{ errors }"
                name="タスク詳細"
                rules="max:1000"
            >
                <v-textarea
                    v-model="description"
                    :counter="1000"
                    :error-messages="errors"
                    label="タスク詳細"
                ></v-textarea>
            </validation-provider>
            <validation-provider
                v-slot="{ errors }"
                name="期限"
                rules="required"
            >
                <v-text-field
                    v-model="limit"
                    :error-messages="errors"
                    label="期限"
                    required
                ></v-text-field>
            </validation-provider>
            <validation-provider
                v-slot="{ errors }"
                name="優先度"
                rules="required"
            >
                <v-select
                    v-model="priority"
                    :items="priorities"
                    :error-messages="errors"
                    label="優先度"
                    data-vv-name="priority"
                    required
                ></v-select>
            </validation-provider>
            <validation-provider
                v-slot="{ errors }"
                name="ステータス"
                rules="required"
            >
                <v-select
                    v-model="status"
                    :items="statuses"
                    :error-messages="errors"
                    label="ステータス"
                    data-vv-name="status"
                    required
                ></v-select>
            </validation-provider>
            <validation-provider name="ラベル">
                <v-combobox
                    v-model="label"
                    :items="item"
                    chips
                    clearable
                    label="Your favorite hobbies"
                    multiple
                    prepend-icon="mdi-filter-variant"
                    solo
                >
                    <template
                        v-slot:selection="{ attrs, item, select, selected }"
                    >
                        <v-chip
                            v-bind="attrs"
                            :input-value="selected"
                            close
                            @click="select"
                            @click:close="remove(item)"
                        >
                            <strong>{{ item }}</strong>
                        </v-chip>
                    </template>
                </v-combobox>
            </validation-provider>

            <v-btn class="mr-4" type="submit" :disabled="invalid">
                submit
            </v-btn>
            <v-btn @click="clear(reset)"> clear </v-btn>
        </form>
    </validation-observer>
</template>

<script lang="ts">
import { ValidationObserver, ValidationProvider } from "vee-validate"
import Vue from "vue"
import { priorityItems, statusItems } from "@/formdata/taskformdata"
import { Priority, Status, TodoTask } from "@/types/todo"
interface Data {
    task: TodoTask
}

export default Vue.extend({
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data: (): Data => ({
        task: {
            name: "",
            description: "",
            limit: "",
            priority: null,
            status: null,
            label: "",
        },
    }),

    computed: {
        priorities(): Priority[] {
            return priorityItems
        },
        statuses(): Status[] {
            return statusItems
        },
    },

    methods: {
        submit() {},
        clear(reset: () => void) {
            this.task.name = ""
            this.task.description = ""
            this.task.limit = ""
            this.task.priority = null
            this.task.status = null
            this.task.label = ""
            reset()
        },
        // remove(item: string) {
        //     this.task.label.splice(this.task.label.indexOf(item), 1)
        //     this.task.label = [...this.task.label]
        // },
    },
})
</script>
