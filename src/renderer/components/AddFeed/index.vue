<template>
    <div class="add-feed-form">
        <input type="text">
        <button class="vr-btn normal" v-on:click="addFeed($event)">Add Feed</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "add-feed-form",
    methods: {
        addFeed(e) {
            let feed = e.target.previousElementSibling.value.trim();
            if(feed !== "") {
                this.$store.dispatch("addFeed", feed);
                console.log(this.feeds);
            } else {
                alert("Enter a valid URL");
            }

        }
    },

    computed: {
        ...mapGetters({
            feeds: "getFeeds"
        })
    }
}
</script>

