<template>
  <div class="home">
    <h2>Home</h2>
    <FilterNav @filterValue="current=$event" :current="current"></FilterNav>
    <div v-for="issue in filteredIssues" :key="issue.id">
      <SingleIssue :issue="issue" @delete="deleteIssue" @complete="completeIssue"></SingleIssue>
    </div>
  </div>
</template>

<script>

import FilterNav from '../components/FilterNav'
import SingleIssue from '../components/SingleIssue'
export default {
  name: 'HomeView',
  components: {
    FilterNav,
    SingleIssue,},
  data() {
    return {
      issues:[],
      current:'all'
    }
  },
  methods: {
    deleteIssue(id) {
      this.issues=this.issues.filter(issue=>{
        return issue.id!=id;
      })
    },
    completeIssue(id) {
      let findIssue=this.issues.find(issue=>{
        return issue.id==id;
      })
      findIssue.complete=!findIssue.complete;
    }
  },
  mounted() {
    fetch('http://localhost:3000/issues')
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      this.issues=data;
    })
    .catch(err=>{
      console.log(err);
    })
  },
  computed: {
    filteredIssues() {
      if(this.current=='complete') {
        return this.issues.filter(p=>{
          return p.complete;
        })
      }
      if(this.current=='ongoing') {
        return this.issues.filter(p=>{
          return !p.complete;
        })
      }
      return this.issues;
    }
  }
}
</script>

<style scoped>
div h2 {
  color: black
}
</style>