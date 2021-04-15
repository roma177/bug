<template>
  <div>
    <div><my-header></my-header></div>
    <div class="container_outside">
      <div class="container_inside">
        <main>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./myHeader";
export default {
  name: "baseLayout",
  components: {MyHeader}
};
</script>

<style scoped>
.container_inside {
  padding: 20px 10px;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  position: relative;
}
main {
  max-width: 1400px;
  margin: 0 auto;
  min-width: 0;
  display: flex;
  background-color: dodgerblue;
}
.container_outside {
  display: flex;
  -webkit-align-content: stretch;
  -webkit-align-items: stretch;
  align-content: stretch;
  align-items: stretch;
}

.main__wrapper {
  float: left;
  display: flex;
  padding: 0;
  transition: width 0.2s ease-in-out;
  background: #ffffff;
  border-radius: 4px;
  position: relative;
  box-shadow: 0 1px 2px #ccc;
}
</style>
