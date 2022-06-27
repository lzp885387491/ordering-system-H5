<template>
  <div class="home">
    <div class="warp">
      <div class="box">
        <div class="header flex-items-center">
          <img src="../../assets/icon-zjt.png" class="icon-left-arrow" alt="" />
          <div class="title">Local screencast</div>
          <div></div>
        </div>
        <div class="mt-2-2">
          <input placeholder="search" class="search" type="text" />
        </div>
        <div class="banner">
          <img src="../../assets/icon-waaw.png" class="icon-waaw" alt="" />
          <div class="info">
            <div><b>Mirror guide</b></div>
            <span class="fs-1·5rem">common problem</span>
          </div>
        </div>
      </div>
    <div class="rotation-chart flex">
      <div class="item flex-ajf-center bgd-color-7367fba1 mlr-0·75">
        <div class="icon-img bgd-color-ffffff94 flex-center">
          <img src="../../assets/icon-logo.png" alt="" />
        </div>
        <div class="pt-2rem">Picture</div>
        <span class="txt">Local screencast</span>
      </div>
      <div class="item flex-ajf-center bgd-color-ffffff mlr-0·75">
        <div class="icon-img bgd-color-ffeada flex-center">
          <img src="../../assets/icon-logo.png" alt="" />
        </div>
        <div class="pt-2rem">Picture</div>
        <span class="txt">Local screencast</span>
      </div>
      <div class="item flex-ajf-center bgd-color-c2bafd mlr-0·75">
        <div class="icon-img bgd-color-bebafd flex-center">
          <img src="../../assets/icon-logo.png" alt="" />
        </div>
        <div class="pt-2rem">Picture</div>
        <span class="txt">Local screencast</span>
      </div>
      <div class="item flex-ajf-center bgd-color-7367fba1 mlr-0·75">
        <div class="icon-img bgd-color-ffffff94 flex-center">
          <img src="../../assets/icon-logo.png" alt="" />
        </div>
        <div class="pt-2rem">Picture</div>
        <span class="txt">Local screencast</span>
      </div>
      <div class="item flex-ajf-center bgd-color-ffffff mlr-0·75">
        <div class="icon-img bgd-color-ffeada flex-center">
          <img src="../../assets/icon-logo.png" alt="" />
        </div>
        <div class="pt-2rem">Picture</div>
        <span class="txt">Local screencast</span>
      </div>
      <div class="item flex-ajf-center bgd-color-c2bafd mlr-0·75">
        <div class="icon-img bgd-color-bebafd flex-center">
          <img src="../../assets/icon-logo.png" alt="" />
        </div>
        <div class="pt-2rem">Picture</div>
        <span class="txt">Local screencast</span>
      </div>
      <div class="item flex-ajf-center bgd-color-7367fba1 mlr-0·75">
        <div class="icon-img bgd-color-ffffff94 flex-center">
          <img src="../../assets/icon-logo.png" alt="" />
        </div>
        <div class="pt-2rem">Picture</div>
        <span class="txt">Local screencast</span>
      </div>
      <div class="item flex-ajf-center bgd-color-ffffff mlr-0·75">
        <div class="icon-img bgd-color-ffeada flex-center">
          <img src="../../assets/icon-logo.png" alt="" />
        </div>
        <div class="pt-2rem">Picture</div>
        <span class="txt">Local screencast</span>
      </div>
      <div class="item flex-ajf-center bgd-color-c2bafd mlr-0·75">
        <div class="icon-img bgd-color-bebafd flex-center">
          <img src="../../assets/icon-logo.png" alt="" />
        </div>
        <div class="pt-2rem">Picture</div>
        <span class="txt">Local screencast</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.home {
  height: 100vh;
  background-color: #c5b0f7;
}
.warp {
  background-color: #d5d3fa;
  height: 100%;
  box-sizing: border-box;
  border-radius: 35px;
  box-shadow: 1rem -0.2rem 1.5rem #fff;
}
.box{
  margin: auto;
  width: 31.6rem;
}
.header{
  padding-top: 4rem;
}
.icon-left-arrow {
  width: 2.5rem;
}
.mt-2-2 {
  margin-top: 2.2rem;
}
.title {
  font-size: 3rem;
  text-align: center;
}
.search {
  width: 100%;
  height: 6rem;
  font-size: 2.5rem;
  padding-left: 2.5rem;
  box-sizing: border-box;
  outline: none;
  border-radius: 1.6rem;
  background-color: #f0eefc;
  border: none;
  background-image: url("../../assets/icon-search.png");
  background-repeat: no-repeat;
  background-size: 3rem;
  background-position: 27rem 1.5rem;
}
.banner {
  width: 100%;
  height: 10rem;
  background-color: #eceaff;
  margin-top: 3.8rem;
  border-radius: 5rem;
  position: relative;
}
.icon-waaw {
  width: 10rem;
  position: absolute;
  bottom: 0;
  left: 2.2rem;
}
.info {
  position: absolute;
  top: 2rem;
  right: 5rem;
  font-size: 2rem;
}
.fs-1·5rem {
  font-size: 1.5rem;
}
.rotation-chart {
  margin-top: 3.5rem;
  padding: 0 2.4rem;
height: 17.3rem;
  overflow-x: scroll;
}
.rotation-chart .item {
  min-width: 13.5rem;
  width: 13.5rem;
  height: 100%;
  border-radius: 2.5rem;
  overflow-x: hidden;
  text-align: center;
  font-size: 1.4rem;
}
::-webkit-scrollbar {
  display: none;
}
.rotation-chart .item .icon-img {
  width: 6rem;
  height: 6rem;
  border-radius: 1.2rem;
  /* margin: 2.5rem auto; */
}
.item .txt {
  color: #c8cfd6;
}
</style>