<script setup>

import { onMounted } from 'vue'
import { luigiConfig } from '../luigi-config.js'

onMounted(async ()=>{
  await import('@luigi-project/core')
  await import('@luigi-project/core/luigi.css')


  Luigi.setConfig(luigiConfig);
})
</script>
<template>
</template>
