<template>
  <div class="OurTeam">
    <div class="OurTeam-title">
      <h1>Our Team behind Rubik</h1>
      <p>
        Our customers and partners vary from local start-ups to Fortune 1000
        MNCs all over the world
      </p>
    </div>
    <div class="ctn">
      <div v-for="OurTeam in OurTeams" :key="OurTeam.id" class="OurTeam-avatar">
        <img :src="OurTeam.imgUrl" alt="" />
        <h3>{{ OurTeam.name }}</h3>
        <h4>{{ OurTeam.coi }}</h4>
        <div class="bd"></div>
        <p>{{ OurTeam.bitcoind }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurTeam",
  data() {
    return {
      OurTeams: [
        {
          id: 1,
          imgUrl: require("../../static/ExperienceAndWallet/roadmap/unsplash_d1UPkiFd04A.png"),
          name: "Hai Nguyen",
          coi: "Founder / CTO",
          bitcoind:
            "Serial founder and crypto enthusiast developing our smart contracts and protocol.",
        },
        {
          id: 2,
          imgUrl: require("../../static/ExperienceAndWallet/roadmap/unsplash_d1UPkiFd04A.png"),
          name: "Hai Nguyen",
          coi: "Founder / CTO",

          bitcoind:
            "Serial founder and crypto enthusiast developing our smart contracts and protocol.",
        },
        {
          id: 3,
          imgUrl: require("../../static/ExperienceAndWallet/roadmap/unsplash_d1UPkiFd04A.png"),
          name: "Hai Nguyen",
          coi: "Founder / CTO",

          bitcoind:
            "Serial founder and crypto enthusiast developing our smart contracts and protocol.",
        },
        {
          id: 4,
          imgUrl: require("../../static/ExperienceAndWallet/roadmap/unsplash_d1UPkiFd04A.png"),
          name: "Hai Nguyen",
          coi: "Founder / CTO",

          bitcoind:
            "Serial founder and crypto enthusiast developing our smart contracts and protocol.",
        },
        {
          id: 5,
          imgUrl: require("../../static/ExperienceAndWallet/roadmap/unsplash_d1UPkiFd04A.png"),
          name: "Hai Nguyen",
          coi: "Founder / CTO",

          bitcoind:
            "Serial founder and crypto enthusiast developing our smart contracts and protocol.",
        },
        {
          id: 6,
          imgUrl: require("../../static/ExperienceAndWallet/roadmap/unsplash_d1UPkiFd04A.png"),
          name: "Hai Nguyen",
          coi: "Founder / CTO",

          bitcoind:
            "Serial founder and crypto enthusiast developing our smart contracts and protocol.",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.OurTeam {
  // display: flex;
  .OurTeam-title {
    // display: flex;
    width: 100%;
    h1 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
  .ctn {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .OurTeam-avatar {
      padding: 20px;
      width: 30%;
      text-align: center;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin-bottom: 20px;
      .bd {
        border-top: 1px solid #e3e6e9;
        margin: 3%;
      }
      h4 {
        margin: 20px;
        width: 80%;
        text-align: center;
      }
      // display: flex;
      // justify-content: center;
    }
  }
}
</style>
