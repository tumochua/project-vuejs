<template>
  <div class="app-ctn">
    <div class="header-ctn">
      <div class="header-pc">
        <div class="header-lt">
          <img src="~/assets/icon/Vector.svg" alt="iuwd" class="header-img-l" />
          <h1>Rubik</h1>
        </div>
        <div class="header-nav">
          <ul>
            <li>Features</li>
            <li>Protocol</li>
            <li>Our Teams</li>
            <li>Docs</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div class="header-btn">
          <button class="btn-header">Launch App</button>
        </div>
      </div>
      <div class="header-res">
        <div class="header-lt2">
          <img src="~/assets/icon/Vector.svg" alt="iuwd" class="header-img-l" />
          <h1>Rubik</h1>
        </div>
        <input type="checkbox" id="burger-toggle" />
        <label for="burger-toggle" class="burger-menu">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
        <div class="menu">
          <div class="menu-inner">
            <ul class="menu-nav">
              <li class="menu-nav-item">
                <a class="menu-nav-link" href="#"
                  ><span>
                    <div>Features</div>
                  </span></a
                >
              </li>
              <li class="menu-nav-item">
                <a class="menu-nav-link" href="#"
                  ><span>
                    <div>Protocol</div>
                  </span></a
                >
              </li>
              <li class="menu-nav-item">
                <a class="menu-nav-link" href="#"
                  ><span>
                    <div>Our Teams</div>
                  </span></a
                >
              </li>
              <li class="menu-nav-item">
                <a class="menu-nav-link" href="#"
                  ><span>
                    <div>Docs</div>
                  </span></a
                >
              </li>
              <li class="menu-nav-item">
                <a class="menu-nav-link" href="#"
                  ><span>
                    <div>FAQ</div>
                  </span></a
                >
              </li>
              <li class="menu-nav-item">
                <a class="menu-nav-link" href="#"
                  ><span>
                    <div class="header-btn">
                      <v-btn color="warning" dark> Normal Button </v-btn>
                    </div>
                  </span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.v-application--wrap {
  max-width: 0% !important;
}
.app-ctn {
  background: #1a27c9;
  z-index: 5;
  .header-ctn {
    display: flex;
    height: 75px;
    width: 100%;
    position: fixed;
    background: #1a27c9;
    .header-pc {
      width: 100%;
      display: flex;

      .header-lt {
        width: 20%;
        display: flex;
        justify-content: space-evenly;
        h1 {
          align-self: center;
          color: #ffffff;
        }
        .header-img-l {
          align-self: center;
          width: 26.25px;
          height: 29.83px;
          // background: #ffffff;
          // background: red;
        }
      }
      .header-nav {
        width: 40%;
        ul {
          height: 100%;
          display: flex;
          justify-content: space-around;
          text-align: center;
          list-style-type: none;
          li {
            align-self: center;
            color: #ffffff;
            cursor: pointer;
            &:hover {
              opacity: 0.9;
            }
          }
        }
      }
      .header-btn {
        display: flex;
        align-items: center;
        margin: 0 auto;
        .btn-header {
          text-align: center;
          margin: 0 auto;
          background: yellow;
          width: 130px;
          height: 40px;
          border-radius: 3px;
          &:hover {
            opacity: 0.9;
          }
        }
      }
    }

    .header-res {
      .header-lt2 {
        display: flex;
        height: 100%;
        h1 {
          align-self: center;
          color: #ffffff;
        }
        .header-img-l {
          align-self: center;
          width: 26.25px;
          height: 29.83px;
          margin: 0 20px;
        }
      }
      display: none;
      z-index: 2;
      @import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");

      @mixin sp-layout {
        @media screen and (max-width: 750px) {
          @content;
        }
      }

      @mixin pc-layout {
        @media screen and (min-width: 751px) {
          @content;
        }
      }

      body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        font-family: Lora, sans-serif;
      }

      p {
        margin: 0;
      }

      #burger-toggle {
        position: absolute;
        appearance: none;
        opacity: 0;

        &:checked {
          & ~ .menu {
            opacity: 1;
            visibility: visible;

            .menu-nav {
              flex-direction: column;
              margin: 30px 0px;
              .menu-nav-item {
                margin: 10px;
              }
              .header-btn {
                display: flex;
                align-items: center;
                margin: 0 auto;
                .btn-header {
                  text-align: center;
                  margin: 0 auto;
                  background: yellow;
                  width: 130px;
                  height: 40px;
                  border-radius: 3px;
                }
              }
            }

            .menu-nav-link span div,
            img,
            .title p {
              transform: translateY(0);
              transition: 1.2s 0.1s cubic-bezier(0.35, 0, 0.07, 1);
            }
          }

          & ~ .burger-menu {
            .line {
              &::after {
                transform: translateX(0);
              }

              &:nth-child(1) {
                transform: translateY(calc(var(--burger-menu-radius) / 5))
                  rotate(45deg);
              }

              &:nth-child(2) {
                transform: scaleX(0);
              }

              &:nth-child(3) {
                transform: translateY(calc(var(--burger-menu-radius) / -5))
                  rotate(-45deg);
              }
            }
          }
        }
      }

      .burger-menu {
        --burger-menu-radius: 4em;
        position: absolute;
        top: 6px;
        right: 7vw;
        z-index: 4;
        display: block;
        width: var(--burger-menu-radius);
        height: var(--burger-menu-radius);
        outline: none;
        cursor: pointer;

        .line {
          position: absolute;
          left: 25%;
          width: 50%;
          height: 3px;
          background: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          transition: 0.5s;

          &:nth-child(1) {
            top: 30%;
          }

          &:nth-child(2) {
            top: 50%;
          }

          &:nth-child(3) {
            top: 70%;
          }

          &::after {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--primary-color-darker);
            transform: translateX(-100%);
            transition: 0.25s;
          }

          @for $i from 2 through 3 {
            &:nth-child(#{$i})::after {
              transition-delay: 0.1s * ($i - 1);
            }
          }
        }

        &:hover {
          .line::after {
            transform: translateX(0);
          }
        }
      }

      .menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(155.51deg, #0f1772 5.31%, #0d2ebd 84.03%);
        opacity: 0;
        overflow-x: hidden;
        visibility: hidden;
        transition: 0.3s;

        @include sp-layout {
          display: block;
        }

        &-nav {
          display: flex;
          flex-wrap: wrap;
          margin: 0;
          padding: 0;
          text-align: center;
          list-style-type: none;

          @include sp-layout {
            flex-direction: column;
          }

          &-item {
            flex: 1;
          }

          &-link {
            position: relative;
            display: inline-flex;
            font-size: 2rem;
            color: white;
            text-decoration: none;

            span {
              overflow: hidden;

              div {
                transform: translateY(102%);
              }
            }

            &::after {
              position: absolute;
              content: "";
              top: 100%;
              left: 0;
              width: 100%;
              height: 3px;
              background: var(--primary-color);
              transform: scaleX(0);
              transform-origin: right;
              transition: transform 0.5s;
            }

            &:hover::after {
              transform: scaleX(1);
              transform-origin: left;
            }
          }
        }

        .gallery {
          margin-top: 60px;
          text-align: center;
        }

        .title {
          font-size: 24px;
          color: white;
          overflow: hidden;

          p {
            font-size: 12px;
            letter-spacing: 2px;
            text-transform: uppercase;
            transform: translateY(102%);
          }
        }

        .images {
          margin-top: 36px;
          display: flex;
          flex-wrap: wrap;

          @include sp-layout {
            justify-content: center;
          }

          .image-link {
            width: 15vw;
            margin: 0 12px;
            overflow: hidden;

            @include sp-layout {
              width: 40vw;
              margin: 0 12px 12px 0;
            }

            .image {
              position: relative;
              transition: 0.6s;

              &::before {
                position: absolute;
                content: attr(data-label);
                top: 0;
                left: 0;
                z-index: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                color: white;
                background: rgba(0, 0, 0, 0.6);
                opacity: 0;
                transition: 0.4s;
              }
            }

            &:hover .image {
              transform: scale(1.2);

              &::before {
                opacity: 1;
              }
            }
          }

          img {
            height: 250px;
            transform: translateY(102%);
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 750px) {
  .app-ctn {
    .header-ctn {
      .header-pc {
        display: none !important;
        .header-lt2 {
          display: block !important;
        }
      }

      .header-res {
        display: block !important;
      }
    }
  }
}
</style>
