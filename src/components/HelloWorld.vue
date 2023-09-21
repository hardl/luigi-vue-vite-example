<script setup>
import { ref, onMounted } from 'vue'
import * as LuigiClient from '@luigi-project/client'

defineProps({
  msg: String,
})

const count = ref(0)
const initialized = ref(false)

onMounted(async ()=>{
  await import('../style.css') 
  initialized.value = true
})

</script>

<template>
  <div id="app" v-show="initialized">
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://luigi-project.io/" target="_blank">
      <img src="https://raw.githubusercontent.com/sap/luigi/main/logo.png" class="logo luigi" alt="Luigi logo" />
    </a>
  </div>
  <h1>Vite + Vue + Luigi</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  vertical-align: top;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.luigi {
  height: 8em;
}

.read-the-docs {
  color: #888;
}
</style>
