<template>
  <div>
    <h2>Issue</h2>
    <form @submit.prevent="addIssue">
        <label>Issue Title</label>
        <input type="text" required v-model="title">
        <label>Issue Details</label>
        <input type="text" required v-model="details">
        <button>Add Issue</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title:'',
            details:''
        }
    },
    methods: {
        addIssue() {
            fetch('http://localhost:3000/issues',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(
                    {
                        title:this.title,
                        details:this.details,
                        complete:false
                    }
                )
            })
            .then(()=>{
                this.$router.push('/');
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>
div h2{
    color: black;
}
form {
    background: white;
    padding: 20px;
    border-radius: 10px;
}
label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0
}
input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}
button {
    display: block;
    margin: 20px auto 0;
    background: darkmagenta;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
}
</style>