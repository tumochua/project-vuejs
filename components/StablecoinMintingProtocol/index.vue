<template>
  <div
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="500"
    class="MintingProtocol"
  >
    <h1 class="MintingProtocol-title">Stablecoin Minting Protocol</h1>
    <img src="../../static/ExperienceAndWallet/roadmap/Roadmap.png" alt="" />
    <p>
      We've done it carefully and simply. Combined with the ingredients makes
      for beautiful landings. It is definitely the tool you need to speed up
      your design process.
    </p>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "MintingProtocol",
  data() {
    return {};
  },
  mounted() {
    AOS.init({});
  },
};
</script>
<style lang="scss">
.MintingProtocol {
  background: yellow;
  img {
    width: 80%;
    display: flex;
    margin: 0 auto;
  }

  .MintingProtocol-title {
    text-align: center;
    padding: 5%;
  }
  p {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding: 4%;
  }
}
</style>
