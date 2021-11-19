<template>
  <section class="slider text-center position-relative">
    <div class="caption position-absolute top-50 start-50 translate-middle">
      <h3>design / development / photography</h3>
      <h1>creativity have new level</h1>
      <a class="btn career">preview</a>
      <a class="btn career">get theme</a>
    </div>
  </section>
</template>
<style scoped>
.slider {
  background-image: url("../assets/img/header.jpg");
  background-color: #4b4b4b;
  background-blend-mode: multiply;
  background-size: cover;
  height: 85vh;
  color: var(--white);
}
.slider .caption .career {
  color: var(--white);
  background-color: transparent;
  padding: 1% 10%;
  border: 2px solid var(--white);
  transition: all 1s ease-in-out;
  font-weight: bold;
  font-size: calc(var(--default-font-size) + 2px);
}
.slider .caption .career:hover {
  background-color: var(--main-color);
}
</style>
<script>
export default {
  name: "HomeComp",
};
</script>