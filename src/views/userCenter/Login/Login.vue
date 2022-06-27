<template>
  <div class="box">
    <div class="background">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <div class="major">
      <div class="header">
        <img src="../../../assets/icon-menu.png" class="icon-menu" alt="" />
        <div class="icon-menu"></div>
        <div class="icon-menu"></div>
      </div>
      <div class="subject">
        <!-- 329*312 -->
        <div class="describe">
          <div class="title">Mirroring Cast screen</div>
          <div class="title-describe">Real-time screen sharing</div>
        </div>
        <div class="subject-img">
          <img
            src="../../../assets/icon-dianshi.png"
            class="icon-dianshi"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="from">
      <div class="from-top">
        <div class="from-hx"></div>
        <div class="from-text flex-space-around">
          <div>
            <div class="text">Please choose</div>
            <div class="txt">Choose a screencast scene</div>
          </div>
          <div class="from-text-img">
            <img src="../../../assets/icon-info.png" alt="" />
          </div>
        </div>
        <div class="from-item">
          <div class="item flex-center">
            <img src="../../../assets/icon-yuan.png" alt="" />
            <div class="menu-info">
              <div class="font-weight-500">Screen mirroring</div>
              <div class="from-describe">Modile screen sharing to TV</div>
            </div>
          </div>
          <div class="item flex-center">
            <img src="../../../assets/icon-yuan2.png" alt="" />
            <div class="menu-info">
              <div class="font-weight-500">Online video</div>
              <div class="from-describe">Cast online videos to TV</div>
            </div>
          </div>
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
.box {
  height: 100vh;
}
.background {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  overflow: hidden;
  border-radius: 3rem;
  position: relative;
}
.item:nth-of-type(odd) {
  background-color: #7266fa;
}
.item:nth-of-type(even) {
  background-color: #7c71fe;
}
.major {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.header {
  box-sizing: border-box;
  padding: 4rem 2.4rem 2.8rem 2.4rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
}
.icon-menu {
  width: 3rem;
}
.subject {
  width: 32.9rem;
  margin: auto;
  color: #fff;
}
.subject-img {
  text-align: center;
}
.describe {
  margin-left: 1.3rem;
}
.subject .title {
  margin: -0.8rem 0 0.6rem 0;
  font-size: 1.8rem;
}
.subject .title-describe {
  color: #c7c3fd;
  font-size: 1.3rem;
}
.icon-dianshi {
  width: 29rem;
}
.from {
  width: 100vw;
  height: 40.4rem;
  border-radius: 3rem;
  background-color: #8e7fe5;
  position: fixed;
  bottom: 0;
}
.from-top {
  width: 100vw;
}
.from-hx {
  width: 4.4rem;
  margin: 1.4rem auto;
  border: 0.1rem solid #c2c4f3;
}
.from-text {
  box-sizing: border-box;
  padding: 2rem;
  font-size: 2rem;
}
.from-text .text {
  color: #fafdf8;
  margin-bottom: 1.2rem;
}
.from-text .txt {
  color: #dcd9fa;
}
.from-item {
  width: 33.2rem;
  height: 26rem;
  margin: 0 auto;
}
.menu-info {
  width: 23rem;
  box-sizing: border-box;
  padding-left: 1.4rem;
}
.from-item .from-describe {
  color: #bfc4cc;
  font-size: 1.5rem;
}
.from-item .item {
  height: 11rem;
  margin:0 0 2rem 0;
  border-radius: 3rem;
  background-color: #fff;
}
</style>