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
                    :counter="10"
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
                    :items="priorityItems"
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
                    :items="statusItems"
                    :error-messages="errors"
                    label="ステータス"
                    data-vv-name="status"
                    required
                ></v-select>
            </validation-provider>
            <validation-provider
                v-slot="{ errors }"
                name="ラベル"
                rules="max:10"
            >
                <!-- <v-text-field
                    v-model="label"
                    :counter="10"
                    :error-messages="errors"
                    label="ラベル"
                ></v-text-field> -->
                <v-combobox
                    v-model="chips"
                    :items="items"
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
                            <strong>{{ item }}</strong
                            >&nbsp;
                            <span>(interest)</span>
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

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data: () => ({
        name: "",
        description: "",
        limit: "",
        priority: null,
        priorityItems: ["High", "Normal", "Low"],
        status: null,
        statusItems: ["Todo", "InProgress", "Done"],
        label: "",
        chips: [
            "Programming",
            "Playing video games",
            "Watching movies",
            "Sleeping",
        ],
        items: ["Streaming", "Eating"],
    }),

    methods: {
        submit() {},
        clear(reset: () => void) {
            this.name = ""
            this.description = ""
            this.limit = ""
            this.priority = null
            this.status = null
            this.label = ""
            reset()
        },
        remove(item) {
            this.chips.splice(this.chips.indexOf(item), 1)
            this.chips = [...this.chips]
        },
    },
}
</script>
