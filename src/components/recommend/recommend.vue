<template>
    <div class="recommoend">
        <div class="recommoend-content">
            <div class="slider-wrapper">
            </div>
            <div class="recommoend-list">
                <h1 class="list-title">热门歌单推荐</h1>
                <ul>
                </ul>
            </div>    
        </div>
    </div>  
</template>

<script type="text/ecmascript-6">
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'

export default {
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend: function () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data.slider)
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"

    .recommoend
      position: fixed
      width: 100%
      top: 88px
      bottom: 0
      .recommoend-content
        height: 100%
        overflow: hidden
        .slider-wrapper
          position: relative
          width: 100%
          overflow: hidden 
        .recommoend-list
          .list-title
            height: 65px
            line-height: 65px
            text-align: center
            font-size: $font-size-medium
            color: $color-theme        
</style>


