<template>
<div>
  <div class="swiper-container" id="banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in imgList"><img :src="item.path" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
 
</div>
  
</template>
<script>

  export default{
      data(){
          return{
            imgList:[
              {
                path: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3154367440,1577439158&fm=27&gp=0.jpg',
              },
              {
                path: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3929377673,530541662&fm=27&gp=0.jpg',
              },
              {
                path: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511434855185&di=b3a5a5bb354349efbbe82484dbd09280&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F04%2F25%2F146156396665932752.GIF',
              }
            ],
          }
      },
      mounted() {
        // this.$toast('你是不傻?');
        new Swiper('#banner', {
          loop: true,
          // 如果需要分页器
          // autoplay: 5000,
          pagination: '#banner .swiper-pagination',
        });
        new Swiper('.activeRegion', {
          // pagination: '.swiper-pagination', //盒子
          // slidesPerView: 'auto', //展示多少个
          // centeredSlides: true,  //设定为true时，活动块会居中，而不是默认状态下的居左。
          // // spaceBetween: 20, // slide之间的距离（单位px）。
          // width: 350,
          // // centeredSlides: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          paginationClickable: true,
          spaceBetween: 10,
          loop: true,
          autoplay: 5000,
          autoplayDisableOnInteraction: false
        });
        new Swiper('#Roomsswiper', {
          pagination: '#Roomspagination',
          paginationType: 'fraction',
          loop: true,
        });
      },
  }
</script>
