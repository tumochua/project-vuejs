<template>
  <div class="ctn-wallet">
    <h1 data-aos="fade-right" class="one-title">One Experience, One Wallet</h1>
    <div class="wallet-block">
      <div v-for="(Wallet, index) in Wallets" :key="index">
        <!-- <Card v-bind:Wallet="Wallet" /> -->
        <Card v-bind:Wallet="Wallet" />
      </div>
    </div>
    <!-- <img v-for="icon in Wallets.icons" :src="icon.imgicon" :key="icon" /> -->
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./Cards/index.vue";
export default {
  name: "Roadmap",
  mounted() {
    AOS.init({});
  },
  components: { Card },
  // srcImgg: "/_nuxt/static/ExperienceAndWallet/div-1/Icon3.png",
  //   id: 3,
  //   title: "Manage Funds & NFTs",
  //   icon: require("../../static/ExperienceAndWallet/div-1/Icon4.png"),
  //   description:
  //     "Multi-chain supported and many more coming in the future.",
  // },

  data() {
    return {
      Wallets: [
        {
          id: 1,
          title: "Manage Funds & NFTs",
          description:
            "Multi-chain supported and many more coming in the future.",
          imgUrl: require("../../static/ExperienceAndWallet/div-1/Icon4.png"),
          icons: [
            {
              imgicon: require("../../static/ExperienceAndWallet/div-1/Icon2.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-1/Icon3.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-1/Icon4.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-1/icon5.png"),
            },
          ],
          icons2: [
            {
              imgicon: require("../../static/ExperienceAndWallet/div-1/Icon6.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-1/Icon8.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-1/Icon9.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-1/Icon10.png"),
            },
          ],
        },
        {
          id: 2,
          title: "Stablecoin Minting Protocol",
          description:
            "Combining existing lending platforms with cross-chain liquidity protocol.",
          imgUrl: require("../../static/ExperienceAndWallet/div-3/Icon.png"),
          icons: [
            {
              imgicon: require("../../static/ExperienceAndWallet/div-3/icon1.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-3/icon3.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-3/icon4.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-1/icon5.png"),
            },
          ],
          icons2: [
            {
              imgicon: require("../../static/ExperienceAndWallet/div-1/Icon6.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-1/Icon8.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-1/Icon9.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-1/Icon10.png"),
            },
          ],
        },
        {
          id: 3,
          title: "Protect Your Assets",
          description:
            "Layered encryption and authorization to maximize protection.",
          imgUrl: require("../../static/ExperienceAndWallet/div-2/Icon.png"),
          icons: [
            {
              imgicon: require("../../static/ExperienceAndWallet/div-2/icon1.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-2/icon2.png"),
            },
          ],
        },
        {
          id: 4,
          title: "Swap Effortlessly",
          description:
            "Combining existing lending platforms with cross-chain liquidity protocol.",
          imgUrl: require("../../static/ExperienceAndWallet/div-4/Icon.png"),
          icons: [
            {
              imgicon: require("../../static/ExperienceAndWallet/div-4/icon1.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-4/icon2.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-4/icon3.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-1/icon5.png"),
            },
          ],
        },
        {
          id: 5,
          title: "Swap Effortlessly",
          description:
            "Creating a DEX that connects every blockchain with top-designed UI/UX.",
          imgUrl: require("../../static/ExperienceAndWallet/div-5/Icon.png"),
          icons: [
            {
              imgicon: require("../../static/ExperienceAndWallet/div-5/Icon.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-5/layer-2.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-5/layer-3.png"),
            },
            {
              imgicon: require("../../static/ExperienceAndWallet/div-5/layer-4.png"),
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.ctn-wallet {
  .one-title {
    margin: 10% 0;
    text-align: center;
  }
  .wallet-block {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
