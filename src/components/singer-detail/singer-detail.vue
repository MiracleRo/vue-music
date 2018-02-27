<template>
  <transition name="slide">
    <div class="singer-detail">
       rank
    </div>
  </transition>    
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import {getSingerDetail} from 'api/singer'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song'

export default {
  data () {
    return {
      song: []
    }
  },
  created () {
    this._getDetail()
  },
  methods: {
    _getDetail () {
      if (!this.singer.id) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code === ERR_OK) {
          this.song = this._normalizeSongs(res.data.list)
        }
      })
    },
    _normalizeSongs (list) {
      let re = []
      list.forEach(item => {
        let {musicData} = item
        if (musicData.songid && musicData.albummid) {
          re.push(createSong(musicData))
        }
      })
      return re
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)  
</style>