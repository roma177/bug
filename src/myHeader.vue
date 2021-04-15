<template>
  <header class="header">
    <a :to="{}" class="logo-wrapper">
      <img
        alt="Logo"
        height="45"
        width="100"
        class="header__logo"
      />
    </a>
    <ul>
      <li
        :class="{ activeCourse: isActiveCourse }"
        @click="applyActiveClassToCourse"
      >
        <a :to="{ name: 'mainview' }">Курс</a>
      </li>
      <li
        :class="{ activeTariff: isActiveTariff }"
        @click="applyActiveClassToTariff"
      >
        <a :to="{ name: 'tariffs' }">Экзамен</a>
      </li>
    </ul>
    <div
      class="header_modalWrapper"
    >
      <a :to="{ name: 'profile' }" class="profile">
        <div class="header_userProgress">
          <div class="userOverallKnowledge">
            <span id="knowledgeLevelText">Уровень подготовки</span>
            <span id="knowledgeLevelValue">87%</span>
          </div>
          <meter
            id="meter"
            min="0"
            max="100"
            low="33"
            high="66"
            optimum="80"
            :value="overallCurrentKnowledge"
          >
          </meter>
        </div>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "myHeader",
  data() {
    return {
      isActiveCourse: true,
      isActiveTariff: false,
      overallCurrentKnowledge: 87
    };
  },
  methods: {
    applyActiveClassToCourse() {
      this.isActiveCourse = true;
      this.isActiveTariff = false;
    },
    applyActiveClassToTariff() {
      this.isActiveCourse = false;
      this.isActiveTariff = true;
    },
  },
};
</script>

<style scoped>
.header {
  padding: 0 20px;
  position: relative;
  left: 0;
  min-height: 50px;
  background-color: #6699cc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.activeCourse {
  box-shadow: inset 0 46px rgba(0, 0, 0, 0.12) !important;
  border-top: 4px solid rgba(0, 0, 0, 0.4) !important;
}
.activeTariff {
  box-shadow: inset 0 46px rgba(0, 0, 0, 0.12) !important;
  border-top: 4px solid rgba(0, 0, 0, 0.4) !important;
}
ul {
  float: left;
  display: block;
  font-weight: 600;
  margin: 0;
  padding: 0 20px;
}
ul a {
  display: block;
  color: #f7f7f7;
  padding: 10px 15px 18px 15px;
  height: 46px;
}
.logo-wrapper {
  margin-left: 5px;
  float: left;
}
ul > li {
  display: block;
  float: left;
  border-top: 4px solid transparent;
}
ul > li:hover {
  box-shadow: inset 0 46px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);
}
.header__logo {
  margin: 2.5px 0 2.5px 0;
  display: block;
}
.vue-avatar--wrapper {
  border: 2px solid #f7f7f7;
  float: right;
  display: block;
}
.profile {
  padding: 5px 10px;
  display: block;
  float: right;
}
.header_modalWrapper {
  float: right;
  display: block;
}
.header_modalWrapper:hover {
  box-shadow: inset 0 50px rgba(0, 0, 0, 0.05);
}
.header_userProgress {
  float: right;
  margin-left: 15px;
  line-height: 9px;
  margin-top: 8px;
}
meter {
  height: 16px;
  width: 140px;
  position: relative;
}
meter::-webkit-meter-bar {
  border-style: none;
  background-color: #e2e2e2;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
@-moz-document url-prefix() {
  meter {
    height: 8px !important;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #e2e2e2;
  }
}
meter::-webkit-meter-optimum-value {
  background: linear-gradient(#ad7, #ad7, #cea 20%, #7a3 45%, #7a3 55%);
}
meter::-webkit-meter-suboptimum-value {
  background: linear-gradient(#fe7, #fe7, #ffc 20%, #db3 45%, #db3 55%);
}
meter::-webkit-meter-even-less-good-value {
  background: linear-gradient(#ffa777, #ffa777, #ffdecc 20%, #dd7a44 45%, #dd7a44 55%);
}
meter:-moz-meter-optimum::-moz-meter-bar {
  background: linear-gradient(#ad7, #ad7, #cea 20%, #7a3 45%, #7a3 55%);
}
meter:-moz-meter-sub-optimum::-moz-meter-bar {
  background: linear-gradient(#fe7, #fe7, #ffc 20%, #db3 45%, #db3 55%);
}
meter::-moz-meter-sub-sub-optimum::-moz-meter-bar {
  /* red. */
  background: linear-gradient(#ffa777, #ffa777, #ffdecc 20%, #dd7a44 45%, #dd7a44 55%);
}
.userOverallKnowledge {
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: #f7f7f7;
}
#knowledgeLevelText {
  float: left;
}
#knowledgeLevelValue {
  float: right;
}
</style>
