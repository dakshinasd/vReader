<template>
    <div class="home">
        <div class="sidebar vr-container">
          <AddFeedForm />
        </div>
        <div class="main-container vr-container">
          <Feed />
        </div>
    </div>
</template>

<script>
  import AddFeedForm from "../AddFeed";
  import Feed from "../Feed";
 

  export default {
    name: 'home',
    components: { AddFeedForm, Feed },
    methods: {
      
    },
    mounted() {

    }
  }
</script>