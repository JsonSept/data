<template>
    <div v-if="job">
        <h1>{{ job.name }}</h1>
        <p>The job id is:{{ id }}</p>
        <p>{{ job.description }}</p>
        <!-- <h1>Jobs</h1>
        <p>This is the info</p>
        <p>{{$route.params.id}}</p>
        <p v-for="jobs,index in jobs">
            <router-link :to="{
                name: 'personalInfo',
            params:{id:job.id}}">
                <label>{{ jobs.name }}</label>
            </router-link>
        </p> -->

    </div>
    <div v-else>
        <p>Loading job details...</p>
    </div>
</template>


<script>
export default {
    props:['id'],
    id:$route.params.id,
    data() {
        return {
            // jobs: [
            //     {id:1,name:'Teacher',description:'teaching people'},
            //     {id:2,name:'Developer',description:'Enjoys Coding'},
            //     {id:3,name:'Doctor',description:'treats people'}
            //     ]
            jobs:null
        };
    
},
mounted(){
    axios.get("https://localhost:3000/jobs"+ this.id)
    .then(res => this.job = res.data)
}
}
</script>
<style >

    
    
</style>