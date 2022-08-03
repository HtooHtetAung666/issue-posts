<template>
  <div class="issues" :class="{complete:issue.complete}">
    <div class="flex-box">
        <div>
            <h3 @click="showDetails=!showDetails">{{issue.title}}</h3>
            <p v-if="showDetails">{{issue.details}}</p>
        </div>
        <div>
            <span class="material-icons" @click="deleteIssue">delete</span>
            <router-link :to="{name:'editissue',params:{id:issue.id}}">
                <span class="material-icons">edit</span> 
            </router-link>
            <span class="material-icons" @click="completeIssue">done</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['issue'],
    data() {
        return {
            showDetails: false,
        }
    },
    methods: {
        deleteIssue() {
            fetch('http://localhost:3000/issues/'+this.issue.id,{
                method:"DELETE",
            })
            .then(()=>{
                this.$emit('delete',this.issue.id);
            })
            .catch(err=>{
                console.log(err);
            })
        },
        completeIssue() {
            fetch('http://localhost:3000/issues/'+this.issue.id,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(
                    {
                        complete:!this.issue.complete
                    }
                )
            })
            .then(()=>{
                this.$emit('complete',this.issue.id);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>
.issues{
    padding:20px;
    background-color: #f2f2f2;
    margin: 10px;
    border-left: 10px solid crimson;
    border-radius: 10px;
}
h3{
    cursor: pointer;
    color: darkmagenta;
    text-transform: uppercase;
    font-weight: bolder;
}
p {
    color: black;
}
.flex-box  {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
span {
    margin-right: 10px;
}
span:hover {
    cursor: pointer;
    color:#777;
}
.complete {
    border-left-color: #00A36C;
}
a {
    text-decoration: none;
    color: inherit;
}
</style>