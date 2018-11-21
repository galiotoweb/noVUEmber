<template>
  <div class="details">
    <div class="container">
      <div class="row">
      <h1>{{ title }}</h1>
      <h2>the product id is #{{this.$route.params.Pid}}</h2>
      <div class="col-md-12" v-for="(product,index) in products" :key="index">
        <div v-if="productId == product.productId">
        <h1>{{product.productTitle}}</h1>
        <img :src="product.image" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
export default{
  name: 'details',
  data() {
    return {
      productId: this.$route.params.Pid,
      title: 'Details',
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

<style scoped>

</style>
