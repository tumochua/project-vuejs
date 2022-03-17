<template>
  <div class="wallet-dad">
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="800"
      class="wallet-card"
    >
      <div class="wallet-title">
        <img :src="Wallet.imgUrl" alt="" />
        <div class="wallet-des">
          <h3>{{ Wallet.title }}</h3>
          <p>{{ Wallet.description }}</p>
        </div>
      </div>
      <div class="wallet-icon">
        <div class="wallet-icon-top">
          <div v-for="(icon, index) in Wallet.icons" :key="index">
            <img :src="icon.imgicon" alt="" />
          </div>
        </div>
        <div class="wallet-icon-bt">
          <div v-for="(icon1, index) in Wallet.icons2" :key="index">
            <img :src="icon1.imgicon" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: { Wallet: Object },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.wallet-dad {
  .wallet-card {
    margin-top: 10%;
    box-shadow: 0px 12px 40px rgb(0 0 0 / 10%);

    .wallet-title {
      display: flex;
      padding-top: 5%;
      img {
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
      img {
        margin: 0 10%;
      }
    }
    .wallet-icon {
      display: flex;
      flex-direction: column;
      .wallet-icon-top {
        display: flex;
        justify-content: space-evenly;
        margin: 5% 0;
        img {
          cursor: pointer;
          &:hover {
            opacity: 0.8;
          }
        }
      }
      .wallet-icon-bt {
        display: flex;
        justify-content: space-evenly;
        img {
          cursor: pointer;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>
