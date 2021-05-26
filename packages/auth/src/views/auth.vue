<template>
  <div class="auth-wrapper">i'm the auth page</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Auth',
});
</script>

<styles lang="scss">
.auth-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</styles>
