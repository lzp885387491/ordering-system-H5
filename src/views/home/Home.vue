<template>
  <div class="home">
    <div class="warp">
      <div class="box">
        <div class="header flex-items-center">
          <img src="../../assets/icon-return.png" class="icon-left-arrow" alt="" />
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
      <div class="box activity">
        <div class="activity-top flex-center">
          <img src="../../assets/icon-yuan.png" alt="" />
          <div class="menu-info">
            <div class="font-weight-500">Screen Mirroring...</div>
            <div class="describe">Modile screen sharing to TV</div>
          </div>
        </div>
        <div class="activity-bottom flex-space-around">
          <button class="bt flex-center">
            <img src="../../assets/icon-zt.png" class="icon-bt-img" alt="" />
            <span class="ml-0·8 bt-info">Time out</span>
          </button>
          <button class="bt flex-center">
            <img src="../../assets/icon-gj.png" class="icon-bt-img" alt="" />
            <span class="ml-0·8 bt-info">End</span>
          </button>
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
  height: 100%;
  background-color: #c5b0f7;
}
.warp {
  background-color: #d5d3fa;
  height: 100%;
  box-sizing: border-box;
  border-radius: 35px;
  padding-bottom: 3.5rem;
  box-shadow: 1rem -0.2rem 1.5rem #fff;
}
.box {
  margin: auto;
  width: 31.6rem;
}
.header {
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
.activity {
  margin-top: 3.5rem;
  height: 25.7rem;
  background-color: #e5e2ff;
  border-radius: 2.5rem;
}
.activity-top {
  height: 13rem;
  background-color: #fdfdfb;
  border-radius: 2rem;
}
.menu-info {
  width: 23rem;
  box-sizing: border-box;
  padding-left: 1.4rem;
}
.describe {
  color: #bfc4cc;
  margin-top: 0.3rem;
  font-size: 1.5rem;
}
.activity-bottom {
  height: 50%;
}
.bt{
  width: 13.2rem;
  height: 4.9rem;
  background-color: #ffffff;
  border: none;
  border-radius: 3rem;
}
.bt-info{
  font-size: 1.5rem;
}
.icon-bt-img{
  width: 2rem;
}
</style>