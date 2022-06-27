<template>
  <div class="activityDetail">
    <div class="warp">
      <div class="header flex-items-center">
        <div class="icon-return">
          <img src="../../assets/icon-return.png" class="icon-return" alt="" />
        </div>
        <div class="text">Mirror</div>
        <div class="icon-return"></div>
      </div>
      <div class="notices-box">
        <div class="title">
          <div class="title-h1">Strong connection ability</div>
          <div class="title-describe">Cloud Projection</div>
        </div>
        <div class="icon-bulletin">
          <!-- -34 -->
          <img src="../../assets/icon-bulletin-board.png" alt="" />
        </div>
      </div>
      <div class="details">
        <div class="details-box">
          <div class="left-ball"></div>
          <div class="details-title flex-ajf-center">
            <b class="details-title-h1">Remaining time</b>
            <div class="flex-align-items-center">
              <div class="block flex-justify-center">6</div>
              <div class="block flex-justify-center">6</div>
              <div class="block flex-justify-center mr-0·5">9</div>
              <div class="mr-0·5 color-7d839f">hour</div>
              <div class="block flex-justify-center">3</div>
              <div class="block flex-justify-center mr-0·5">8</div>
              <div class="color-7d839f">minute</div>
            </div>
          </div>
          <div class="right-ball"></div>
        </div>
        <div class="progress-bar">
          <!-- 这个是进度条 -->
          <div class="item">
            <div class="item-title flex-items-center">
              <div>200 minutes in total</div>
              <div>46min</div>
            </div>
            <div class="jdt">
              <div class="jdt-jdt1"></div>
            </div>
          </div>
          <div class="item">
            <div class="item-title flex-items-center">
              <div>365 minutes in total</div>
              <div>136min</div>
            </div>
            <div class="jdt">
              <div class="jdt-jdt2"></div>
            </div>
          </div>
          <div class="item">
            <div class="item-title flex-items-center">
              <div>200 minutes in total</div>
              <div>58min</div>
            </div>
            <div class="jdt">
              <div class="jdt-jdt3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.activityDetail {
  width: 100vw;
  height: 100vh;
  border-radius: 3rem;
  background-color: #d3d7fc;
}
.warp {
  width: 32.7rem;
  margin: auto;
}
.header {
  padding-top: 2rem;
}
.icon-return {
  width: 2.4rem;
}
.header .text {
  font-size: 1.6rem;
}
.notices-box {
  width: 100%;
  height: 28rem;
  border-radius: 3rem;
  margin-top: 1rem;
  background-color: #7266fa;
  position: relative;
}
.title {
  padding: 3rem 0 0 2.6rem;
}
.title-h1 {
  font-size: 1.6rem;
  color: #fff;
  padding-bottom: 1rem;
}
.title-describe {
  font-size: 1rem;
  color: #c5bffc;
}
.icon-bulletin {
  /* padding-left: ; */
  position: absolute;
  left: 3.6rem;
  bottom: -3.4rem;
  z-index: 1;
}
.details-box {
  position: relative;
}
.details {
  box-sizing: border-box;
  padding: 2.4rem;
  height: 38.2rem;
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0rem;
  background-color: #fff;
  border-radius: 2rem;
  z-index: 2;
}
.details-title {
  width: 31.5rem;
  height: 10rem;
  background-color: #e5e2ff;
  border-radius: 3rem 3rem 0 0;
  box-sizing: border-box;
  padding: 2rem;
  font-size: 1.2rem;
  z-index: 11;
  margin: 0 auto;
}
.left-ball {
  width: 1rem;
  height: 1rem;
  background-color: #b4b1fc;
  border-radius: 0.5rem 0 0 0.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.right-ball {
  width: 1rem;
  height: 1rem;
  background-color: #b4b1fc;
  border-radius: 0 0.5rem 0.5rem 0;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
}
.block {
  color: #fff;
  border-radius: 0.3rem;
  background-color: #7065ff;
  margin: 0 0.1rem;
  width: 2rem;
  height: 2.6rem;
}
.details-title-h1 {
  font-size: 1.6rem;
  margin-bottom: 2rem;
}
.progress-bar .item {
  padding: 3rem 0;
}
.item-title {
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
}
.jdt {
  height: 0.6rem;
  background-color: #eff2fb;
  border-radius: 0.3rem;
}
.jdt-jdt1 {
  width: 20.6rem;
  height: 0.6rem;
  background-color: #a9a2ff;
  border-radius: 0.3rem;
}
.jdt-jdt2 {
  width: 5rem;
  height: 0.6rem;
  background-color: #a9a2ff;
  border-radius: 0.3rem;
}
.jdt-jdt3 {
  width: 17.6rem;
  height: 0.6rem;
  background-color: #a9a2ff;
  border-radius: 0.3rem;
}
</style>