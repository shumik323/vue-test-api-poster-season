<template>
    <div class="search-filter">
        <input :placeholder="placeholder"
                 autocomplete="off"
                 :value="value"
                 @input="$emit('input', $event)"
                 @keydown.esc.prevent.stop
                 @keypress.esc.prevent.stop
                 @keyup.esc.prevent.stop="$emit('input', '')"
                 :disabled="disabled"
        />
        <button class="btn-icon search-icon" v-show="!value">
            search
        </button>
        <button class="btn-icon reset-icon" v-show="!!value" @click="$emit('input', '')">
            close
        </button>
    </div>
</template>

<script>
    export default {
        name: 'SearchFilter',
        props: {
            value: {
                required: true,
                validator: (prop) => ['object', 'number', 'string', 'undefined'].includes(typeof prop),
            },
            placeholder: {
                type: String,
                default: '',
            },
            autofocus: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            noborder: {
                type: Boolean,
                default: false,
            },
        },
    };
</script>
