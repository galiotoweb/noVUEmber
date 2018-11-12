<template>
  <div class="container home">
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="col-md-4 col-lg-4"
      v-for="(data,index) in products"
      :key="index">
        <img :src="data.image" class="img-fluid">
        <h3>{{data.productTitle}}</h3>
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
      // https://source.unsplash.com/random
      products: [
        {
          productTitle: 'ABC',
          image: require('../assets/images/photo1.jpg'),
          productId: 1,
        },
        {
          productTitle: 'DEF',
          image: require('../assets/images/photo2.jpg'),
          productId: 2,
        },
        {
          productTitle: 'GHI',
          image: require('../assets/images/photo3.jpg'),
          productId: 3,
        },
        {
          productTitle: 'JKL',
          image: require('../assets/images/photo4.jpg'),
          productId: 4,
        },
        {
          productTitle: 'MNO',
          image: require('../assets/images/photo5.jpg'),
          productId: 5,
        },
        {
          productTitle: 'PQR',
          image: require('../assets/images/photo6.jpg'),
          productId: 6,
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
