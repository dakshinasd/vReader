<template>
    <div class="home">
        <div class="sidebar vr-container">
          <AddFeedForm />
          <!-- <FeedSources /> -->
        </div>
        <div class="main-container">
          <Feed />
        </div>
    </div>
</template>

<script>
  import AddFeedForm from "../AddFeed";
  import Feed from "../Feed";
  import FeedSources from "./FeedSources";
 

  export default {
    name: 'home',
    components: { AddFeedForm, Feed, FeedSources },
    methods: {
      
    },
    mounted() {

    }
  }
</script>