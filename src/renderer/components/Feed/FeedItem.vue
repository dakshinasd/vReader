<template>
    <div class="feed-item clearfix"> 
        <div class="image-container" >
            <img v-if="feed.enclosure" :src="feed.enclosure.url" :alt="feed.title">
        </div>
        <div class="content-container">
            <h3 class="feed-title">{{feed.title}}</h3>
            <div class="feed-content" v-html="(feed.content.length > 200) ? ( feed.content.substring(0,100)) : (feed.content)"></div>
            <div class="feed-meta">
                <span class="feed-datetime">
                    {{returnNormalDate(feed.isoDate)}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "feed-item",
    props: ['feed'],
    methods: {

        // returns a human readable date from an ISO Date
        returnNormalDate(isoDate) {
            let parsedDate = new Date(isoDate);
            
            let date = (parsedDate.getDate() <= 9) ? ("0" + parsedDate.getDate()) : (parsedDate.getDate());
            let month = (parsedDate.getMonth() <= 9) ? ("0" + parsedDate.getMonth()) : (parsedDate.getMonth());
            let year = parsedDate.getFullYear();

            let hours = parsedDate.getHours();
            let formattedHours = (hours > 12) ? (hours % 12) : hours;
            let minutes = (parsedDate.getMinutes() <= 9) ? ("0" + parsedDate.getMinutes()) : (parsedDate.getMinutes());
            let seconds = (parsedDate.getSeconds() <= 9) ? ("0" + parsedDate.getSeconds()) : (parsedDate.getSeconds());
            let ampm = (hours > 12) ? "PM" : "AM";

            let completeDate = year + "-" + month + "-" + date + " " + formattedHours  + ":" + minutes + " " + ampm;

            return completeDate;
        }
    }
}
</script>
