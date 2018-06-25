<template>
    <div class="feed-sources">
        <h3 class="feed-sources-title">Feed Sources</h3>
        <p :key="index" v-for="(feed, index) in feeds">{{feed.title}}</p>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "feed-sources",
    computed: {
        ...mapGetters({
            feeds: "getFeeds"
        })
    }
}
</script>

