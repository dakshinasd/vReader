<template>
    <div class="feeds">
        <FeedItem :key="index" v-for="(feed, index) in feedResults" :feed = "feed"/> 
    </div>
</template>

<script>
import Parser from "rss-parser";
import { mapGetters } from "vuex";

import FeedItem from "./FeedItem";

export default {
    name: "feed",
    data() {
        return {
            feedResults:[],
            sortedFeeds: []
        }
    },
    components: { FeedItem },
    methods: {

        // fetch RSS feed from URLs
        getFeedResults() {
            let parser = new Parser();

            if(this.feeds.length > 0) {
                this.feeds.forEach( feed => {
                    
                    (async () => {
                        
                        let feedResults = await parser.parseURL(feed.url);
            
                        this.feedResults.push(...feedResults.items);
                        this.sortFeedsArray(this.feedResults);
                    })();
                    
                })
            }
            
        },

        sortFeedsArray(arr) {
            arr.sort(function(a, b) {
                // convert date object into number to resolve issue in typescript
                // a,b has been inversed due to change the order
                return +new Date(b.pubDate) - +new Date(a.pubDate);
            })

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
    }
}
</script>
