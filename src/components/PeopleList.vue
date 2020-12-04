<template>
  <table class="table table-hover">
     <thead>
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
         <th>Altura</th>
        <th>Peso</th>
        <th>País</th>
        <th>Estudios</th>
        <th>Sexo</th>
        <th>Grupo Sanguíneo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="p in list" v-bind:key="p.uid">
        <td>{{p.uid}}</td>
        <td>{{p.name}}</td>
        <td>{{p.surname}}</td>
        <td>{{p.age}}</td>
        <td>{{p.height}}</td>
        <td>{{p.weight}}</td>
        <td>{{p.country? p.country.countryName : ''}}</td>
        <td>{{p.study? p.study.level : ''}}</td>
        <td>{{p.gender? p.gender.type : ''}}</td>
        <td>{{p.bloodType? p.bloodType.bloodName : ''}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as Vuex from 'vuex'
import dataStore from '../store/data'
import { getModule} from 'vuex-module-decorators'


const module = getModule(dataStore);

@Component
export default class PeopleList extends Vue{
  public list: Array<any> = [];

  public created() {
    this.list = module.data.people;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
