<template>

  <Header />
  <CustomLayout>
    <router-view />
  </CustomLayout>

</template>

<script>
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import CustomLayout from './components/MainLayout.vue';

export default defineComponent({
  components: {
    Header,
    CustomLayout
  },
  setup() {
    return {}
  }
})
</script>

<style>
ul {
  list-style-type: none;
  padding: 0
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: red;
  text-decoration: underline;
}
</style>
