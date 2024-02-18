<script lang="ts" setup>
import { defineProps } from 'vue'
import IconsClose from '../Icons/Close.vue'
defineProps(['onDelete'])
</script>
<template>
  <div class="chip">
    <slot />
    <button v-if="onDelete" @click.stop="onDelete">
      <BaseIcons name="close" width="24" height="24" />
    </button>
  </div>
</template>
