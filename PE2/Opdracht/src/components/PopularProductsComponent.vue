<!-- <script>
export default {
  name: "PopularProductsComponent",
  props: {
    id: Number,
    naam: String,
    afbeelding: String,
    stock: Number,
    prijs: Number
  }
}
</script>

<template>

  <div class="card_shop">
    <img class="card-img_shop" :src="'src/assets/' + afbeelding" :alt="naam">
    <div class="container_shop">
      <h2 class="card-header_shop">{{naam}}</h2>
      <i class="fa-regular fa-heart"></i>
      <font-awesome-icon :icon="['far', 'heart']" />
      <h3 class="price">{{ prijs }}</h3>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import 'src/style/_base.scss';

.main-producten{
  @include flex-between();
  width: 90%;
  margin: 5rem auto;
}

.scards_shop{
  width: 100%;
  padding: 35px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card_shop {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 25%;
  margin: 20px;
  background-color: $background-color;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .card-img_shop{
    width: 100%;
    height: auto;
  }
}

.container_shop {
  padding: 2px 16px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;

  .card-header_shop{
    width: 100%;
    color: $blueSite;
    font-weight: 500;
    font-size: 20pt;
    text-align: center;
  }

  .btn-card_shop{
    width: 200px;
    padding: 15px 0;
    text-align: center;
    margin: 20px 10px;
    border-radius: 25px;
    font-weight: $fontweightbold;
    border: 2px solid $blueSite;
    background: transparent;
    color: $blueSite;
    cursor: pointer;
    position: relative;

    &:hover{
      background: $blueSite;
      color: $background-color;
    }
  }

  .price{
    color: #009688;
    font-size: 15pt;
  }
}

.card-img_shop{
  width: 100%;
  height: auto;
}

#body_shop{
  background-color: $grijsachtergrond;
}

.fa-regular{
  color: $blueSite;
  font-size: 25pt;
  margin: 0 auto;
  margin-top: 25px;
}

/* section cards*/
#scards{
  width: 100%;
  padding: 35px 0;
  display: flex;
  justify-content: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 25%;
  margin: 20px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
}

.container {
  padding: 2px 16px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card-header{
  width: 100%;
  color: $blueSite;
  font-weight: 500;
  font-size: 30pt;
  text-align: center;
}

.card-img{
  width: 100%;
  height: auto;
}

.btn-card{
  width: 200px;
  padding: 15px 0;
  text-align: center;
  margin: 20px 10px;
  border-radius: 25px;
  font-weight: $fontweightbold;
  border: 2px solid $blueSite;
  background: transparent;
  color: $blueSite;
  cursor: pointer;
  position: relative;

  &:hover{
    background: $blueSite;
    color: $background-color;
  }
}

.filter-col{
  width: 30%;
}

@media screen and (max-width: 1000px){
  .main-producten{
    flex-direction: column;
  }
}

</style> -->

<script>
// Importeer het JSON-bestand
import productsData from '../Json/Product.json';

export default {
  data() {
    return {
      products: productsData,
    };
  },
  computed: {
    top3Products() {
      // Sorteer de producten op voorraad in aflopende volgorde
      const sortedProducts = this.products.slice().sort((a, b) => b.stock - a.stock);

      // Neem alleen de top 3 producten
      return sortedProducts.slice(0, 3);
    },
  },
};
</script>

<template>
  <div class="container mt-5">
    <h1 class="mb-4">Top 3 Producten op Voorraad</h1>
    <ul class="list-group">
      <li
          v-for="product in top3Products"
          :key="product.id"
          class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>{{ product.name }}</span>
        <span class="badge badge-primary badge-pill">{{ product.stock }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Hier kun je aangepaste stijlen toevoegen indien nodig */
</style>


