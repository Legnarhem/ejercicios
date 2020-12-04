<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PeopleList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PeopleList from '@/components/PeopleList.vue'; // @ is an alias to /src

@Component({
  components: {
    PeopleList,
  },
})
export default class Home extends Vue {}
</script>
