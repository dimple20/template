<template>
  <div id="app">
  <div class="">
    <div
      v-for="(src, index) in imgs"
      :key="index"
      class="pic"
      @click="() => showImg(index)"
    >
      <img :src="src">
    </div>
  </div>
  <vue-easy-lightbox
    :visible="visible"
    :imgs="imgs"
    @hide="handleHide"
  ></vue-easy-lightbox>
</div>

</template>

<script>
export default {
  data: {
    visible: true,
    imgs: [
      "../src/assets/images/pic4.jpg",
      "../src/assets/images/pic6.jpg",
      "../src/assets/images/pic3.jpg"
    ]
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

