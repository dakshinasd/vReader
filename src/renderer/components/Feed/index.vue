<template>
    <div class="feeds">
        <div class="feed-item" :key="index" v-for="(feed, index) in feedResults">
            {{feed.title}}
        </div>
    </div>
</template>

<script>
import Parser from "rss-parser";
import { mapGetters } from "vuex";
export default {
    name: "feed",
    data() {
        return {
            feedResults:[]
        }
    },
    methods: {
        getFeedResults() {
            let parser = new Parser();

            if(this.feeds.length > 0) {
                this.feeds.forEach( feed => {
                    (async () => {
        
                        let feedResults = await parser.parseURL(feed);
            
                        this.feedResults.push(...feedResults.items);
                    })();
                    
                })
            }
    
            
        }
    },

    mounted() {
        this.getFeedResults();
    },

    computed: {
        ...mapGetters({
            feeds: "getFeeds"
        })
    },
    watch: {
        feedResults() {
            
        }
    }
}
</script>
