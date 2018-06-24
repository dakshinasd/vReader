<template>
    <div class="feeds">
        <div class="feed-item clearfix" :key="index" v-for="(feed, index) in feedResults"> 
        
            <div class="image-container" v-if="feed.enclosure">
                <img :src="feed.enclosure.url" :alt="feed.title">
            </div>
            <div class="content-container">
                <h3 class="feed-title">{{feed.title}}</h3>
                <div v-html="feed.content"></div>
            </div>
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
            feedResults:[],
            sortedFeeds: []
        }
    },
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
                        console.log(this.feedResults)
                    })();
                    
                })
            }
            
        },

        sortFeedsArray(arr) {
            arr.sort(function(a, b) {
                // convert date object into number to resolve issue in typescript
                return +new Date(a.pubDate) - +new Date(b.pubDate);
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
