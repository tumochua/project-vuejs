<template>
  <div class="body-ctn">
    <div class="by-title">
      <div class="download">
        <div class="download-mb">
          <h1>The Portal to Web3</h1>
          <p>Copy All-in-One wallet improve everything in Web3 experience</p>
          <button>
            <img src="@assets/icon/Info.png" alt="" />
          </button>
          <button><img src="@assets/icon/Info2.png" alt="" /></button>
        </div>
      </div>
      <div class="body-img-appp">
        <img src="~/assets/icon/Image14.png" alt="iuwd" class="header-img-l" />
      </div>
    </div>
    <div class="body-des">
      <!-- <img
        src="~/assets/icon/Rectangle4314.png"
        alt="iuwd"
        class="body-img-des"
      /> -->
      <div class="body-desss">
        <h1 data-aos="fade-right">What the Web3 ?</h1>
        <p data-aos="fade-left">
          Web3 is the idea of incentivized decentralization of data, which
          rewards contributors and protects their privacy and data on the
          internet.
        </p>
      </div>

      <div data-aos="fade-up" class="body-modal-icon">
        <div>
          <div class="body-madal-top">
            <div class="icon-modal">
              <img src="@/assets/icon/Frame 709.png" />
              <div>goldline</div>
            </div>
            <div class="icon-modal">
              <img src="@/assets/icon/Frame 710.png" />
              <div>acrevis</div>
            </div>
            <div class="icon-modal">
              <img src="@/assets/icon/Frame 711.png" />
              <div>acrevis</div>
            </div>
            <div class="icon-modal">
              <img src="@/assets/icon/name9.png" />
              <div>velocity</div>
            </div>
          </div>

          <div class="body-mal-bootom">
            <div class="icon-modal">
              <img src="@/assets/icon/Frame 709.png" />
              <div>tranvelers</div>
            </div>
            <div class="icon-modal">
              <img src="@/assets/icon/Frame 710.png" />
              <div>velocity</div>
            </div>
            <div class="icon-modal">
              <img src="@/assets/icon/Frame 711.png" />
              <div>Burflex</div>
            </div>
            <div class="icon-modal">
              <img src="@/assets/icon/name9.png" />
              <div>SAUTER</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "ExperienceAndWallet",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    AOS.init({});
  },
};
</script>

<style lang="scss">
.body-ctn {
  // background: #1a27c9;
  background-image: url("../../assets/icon/brd-img.png");
  background-size: cover;
  padding-top: 100px;

  position: relative;
  .by-title {
    padding-top: 7%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .download {
      // width: 40%;
      .download-mb {
        h1 {
          color: aliceblue;
          margin-left: 4%;
        }
        p {
          margin: 30px 0px;
          color: aliceblue;
          margin-left: 4%;
        }
        button {
          margin-left: 3%;
          img {
            background: aliceblue;
            padding: 3%;
          }
          &:hover {
            opacity: 0.9;
          }
        }
      }
    }
    .body-img-appp {
      margin-top: -4%;
      margin-right: 5%;

      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .body-des {
    .body-img-des {
      width: 100%;
    }
    .body-desss {
      margin: 8% 0;
      display: flex;
      justify-content: space-around;

      h1 {
        color: aliceblue;
      }
      p {
        width: 50%;
        color: aliceblue;
      }
    }

    .body-modal-icon {
      display: flex;
      text-align: center;
      width: 100%;
      width: 70%;
      height: auto;
      padding: 3% 0%;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 12px 40px rgb(0 0 0 / 10%);

      z-index: 3;
      margin: 0 auto;
      flex-direction: column;
      .body-madal-top {
        display: flex;
        justify-content: space-evenly;
        margin: 24px 0px;
        .icon-modal {
          cursor: pointer;
          &:hover {
            opacity: 0.9;
          }
        }
      }
    }
    .body-mal-bootom {
      display: flex;
      justify-content: space-evenly;
      .icon-modal {
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}

@media only screen and (max-width: 373px) {
  .body-ctn {
    .by-title {
      .download {
        .download-mb {
          margin: 10% 0% 10% 4% !important;
        }
      }
    }
  }
}
@media only screen and (max-width: 533px) {
  .body-ctn {
    .by-title {
      flex-direction: column;
      .download {
        .download-mb {
          text-align: center;
          margin: 10% 0;
        }
      }
    }

    .body-des {
      .body-desss {
        flex-direction: column;
        margin-left: 3%;
        p {
          width: 100%;
        }
      }

      .body-modal-icon {
        div {
          display: flex;
          justify-content: space-around;

          .body-madal-top {
            flex-direction: column;
            margin: 0px !important;

            div {
              margin: 10%;
            }
          }
          .body-mal-bootom {
            flex-direction: column;
            div {
              margin: 10%;
            }
          }
        }
      }
    }
  }
}
</style>
