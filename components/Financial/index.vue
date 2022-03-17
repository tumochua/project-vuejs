<template>
  <div
    class="cards"
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="800"
  >
    <div class="cardWrapper1">
      <h1 class="cardWrapper1-title">What’s the token use case?</h1>
      <div class="cardWrapper1-des">
        RIK gives you a voice in the Rubik Network, a global community dedicated
        to crowdfunding treasuries and using the money to fund world-changing
        projects.
      </div>
      <a href="#">Read full whitepaper</a>
    </div>
    <div class="cardWrapper2">
      <p class="cardWrapper2-des">
        “ By buying the token and joining the Rubik Network, anybody in the
        world will have a vote on how the Rubik Network treasury is used to fund
        planet-saving projects around the world.”
      </p>
      <h5 class="cardWrapper2-name">Dubin Nguyen</h5>
    </div>
    <div class="cardWrapper3">
      <h1 class="cardWrapper3-title">Crypto for good.</h1>
      <p class="cardWrapper3-des">
        Buy Rubik Network. Join the Web3. Change the world.
      </p>
      <div class="cardWrapper3-img-icon">
        <div class="icon-ingcar3">
          <div>Rubik price</div>
          <div>0.1$</div>
          <div>+10%</div>
        </div>
        <div class="icon-ingcar3">
          <div>Rubik price</div>
          <div>0.1$</div>
          <div>+10%</div>
        </div>
        <div class="icon-ingcar3">
          <div>Rubik price</div>
          <div>0.1$</div>
          <div>+10%</div>
        </div>
        <div class="icon-ingcar3">
          <div>Rubik price</div>
          <div>0.1$</div>
          <div>+10%</div>
        </div>
        <div class="cardWrapper3-sub">
          <button>Buy Rubik Token</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "Financial",
  data() {
    return {};
  },
  mounted() {
    AOS.init({});
  },
};
</script>
<style lang="scss">
.cards {
  position: relative;
  padding-bottom: 100%;
  margin: 0 auto;
  margin-top: 10%;
  width: 80%;
  .cardWrapper1 {
    width: 40vw;
    height: 50vh;
    background: #ffffff;
    z-index: 2;
    box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.1);
    margin: 10px;
    position: absolute;
    top: 30vh;
    padding: 3%;
    transition: all 0.2s linear;
    &:hover {
      cursor: pointer;
      z-index: 4;
      box-shadow: 5px 10px 8px #888888;
    }
    .cardWrapper1-title {
      width: 70%;
      font-size: 18px;
    }
    .cardWrapper1-des {
      width: 70%;
      font-size: 17px;
      margin: 2% 0;
    }
    a {
      text-decoration: none;
    }
  }
  .cardWrapper2 {
    position: absolute;
    top: 0%;
    left: 22%;
    margin: 10px;
    width: 40vw;
    height: 50vh;
    background: #ffffff;
    z-index: 1;
    padding: 2%;
    box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.2s linear;
    &:hover {
      cursor: pointer;
      z-index: 4;
      box-shadow: 5px 10px 8px #888888;
    }
    .cardWrapper2-des {
      font-size: 17px;
    }
    .cardWrapper2-name {
      float: right;
    }
  }
  .cardWrapper3 {
    position: absolute;
    top: 40vh;
    right: -1%;
    margin: 10px;
    margin: 10px;
    background: #ffffff;
    z-index: 3;
    box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.1);
    width: 40vw;
    height: 50vh;
    padding: 3%;
    transition: all 0.2s linear;

    &:hover {
      cursor: pointer;
      z-index: 4;
      box-shadow: 5px 10px 8px #888888;
    }
    .cardWrapper3-title {
      font-size: 18px;
    }
    .cardWrapper3-des {
      font-size: 17px;
    }
    .cardWrapper3-img-icon {
      display: flex;
      flex-wrap: wrap;
      .icon-ingcar3 {
        font-size: 17px;
      }
      img {
        width: 15%;
      }
      .cardWrapper3-sub {
        padding: 4%;
        border-radius: 3px;
        background: #1a27c9;
        width: 37%;
        margin-top: 4%;
        margin-left: 10%;
        button {
          color: #ffffff;
          font-size: 13px;
        }
      }
    }
  }
}
@media only screen and (max-width: 500px) {
  .cards {
    width: 100% !important;

    .cardWrapper1 {
      top: 30vh !important;
      width: 60vw !important;

      .cardWrapper1-title {
        font-size: 17px !important;
      }
      .cardWrapper1-des {
        font-size: 16px;
        // width: 60%;
      }
    }
    .cardWrapper2 {
      width: 60vw;
      .cardWrapper2-des {
        font-size: 16px !important;
      }
    }
    .cardWrapper3 {
      top: 35vh !important;
      width: 50vw !important;
      .cardWrapper3-des {
        font-size: 16px;
      }
      .cardWrapper3-title {
        font-size: 16px;
      }
      .cardWrapper3-des {
        font-size: 16px;
      }
      .cardWrapper3-img-icon {
        .icon-ingcar3 {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
