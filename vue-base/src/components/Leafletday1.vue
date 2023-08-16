<template>
    <div id="map"></div>
</template>

<script>
import { Map, TileLayer } from 'leaflet'
export default {
    mounted() {
        const map = new Map('map')

        const layer = new TileLayer('http://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&sc1=1&style=7', {
            subdomains: '1234'
        })

        layer.addTo(map)
        map.setView([39, 117], 10)
    }
}

</script>

<style scoped>
@import 'D:\VSCode\VUE\vue-base\node_modules\leaflet\dist\leaflet.css';

html,
body {
    width: 100%;
    height: 100%;
    margin: 0px;
}

#map {
    width: 100vw;
    height: 100vh;
}
</style>