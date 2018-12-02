<template>
  <div class="container home">
    <h1>{{ title }}</h1>
    <div>testing</div>
    <div class="row">
      <div @click="goTodetail(data.productId)" class="col-md-4 col-lg-4"
      v-for="(data,index) in products"
      :key="index">
        <img :src="data.image" class="img-fluid">
        <h3 @click="goTodetail(data.productId)">{{data.productTitle}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: 'Home',
      products: [
        {
          productTitle: 'ABC',
          image: '@/assets/images/photo1.jpg',
          productId: 1,
        },
        {
          productTitle: 'DEF',
          image: '@/assets/images/photo2.jpg',
          productId: 2,
        },
        {
          productTitle: 'GHI',
          image: '@/assets/images/photo3.jpg',
          productId: 3,
        },
        {
          productTitle: 'JKL',
          image: '@/assets/images/photo4.jpg',
          productId: 4,
        },
        {
          productTitle: 'MNO',
          image: '@/assets/images/photo5.jpg',
          productId: 5,
        },
        {
          productTitle: 'PQR',
          image: '@/assets/images/photo6.jpg',
          productId: 6,
        },
      ],
    };
  },
  methods: {
    goTodetail(productId) {
      this.$router.push({
        name: 'details',
        params: {
          Pid: productId,
        },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-fluid {
  width: 100%;
  max-height: 200px;
  overflow: hidden;
}
</style>
