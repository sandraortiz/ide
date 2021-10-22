<template>
  <b-jumbotron
    bg-variant="info"
    class="image"
    text-variant="white"
    :style="cssVars"
  >
    <div class="title-content">
      <b-container>
        <b-row>
          <b-col lg="7"  cols="12" class="col-title">
            <p class="title" v-text="message"></p>
            <p class="title" v-text="messageSecond"></p>
            <hr class="line" />
          </b-col>
          
        </b-row>
      </b-container>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: "ImagePage2",
 
  props: {
    especialidad: {
      type: String,
      require: true,
    },
    isHidden: {
      type: String,
    },
    message: {
      type: String,
      require: true,
    },
    messageSecond: {
      type: String,
      require: false,
    },
    backgroundImage: {
      type: String,
      require: false,
    },
    bgColorDivider: {
      type: String,
      default: "white",
    },
  },
  computed: {
    cssVars() {
      return {
        "--bg-color-divider": this.bgColorDivider,
      };
    },
    isHiddenForm() {
      return {
        "visibility": this.isHidden,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';

.col-title {
  padding-top: 320px;
}

.jumbotron {
  margin-bottom: 0px;
  padding: 0px;
  border-radius: 0px;
  background-color: #252a2d !important;
}

.image {
  height: 500px;
  // opacity: 0.8;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}

.image:before {
  content: ' ';
  display: block;
  position: absolute;
  z-index: 1;
  opacity: 0.4;
}

.title {
  text-transform: uppercase;
  font-size: 55px;
  margin-block-end: 0px;
  width: 12em;
  font-family: gt-pressura-bold;
  line-height: 68px;
}

.line {
  border-top: 3px solid var(--bg-color-divider);
  max-width: 50.5vw;
  width: auto;
  margin-left: -25rem;
  opacity: 1 !important;
  margin-block-start: 0px;
  margin-bottom: 55px;
}

.title-content {
  bottom: -3rem;
  position: relative;
  display: flex;
  align-items: center;
}

+for_breakpoint(desktop-lap) {
  .image {
    height: auto;
    // opacity: 0.8;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .title-content {
    bottom: 0rem;
    position: relative;
    padding: 12px 0px;
  }
}

+for_breakpoint(lapt) {
  .line {
    max-width: 56.5vw;
    margin-left: -18rem;
    width: auto;
  }
}

+for_breakpoint(lg) {
  .line {
    max-width: 58.5vw;
    margin-left: -8rem;
    width: auto;
  }

  .title {
    font-size: 44px;
    line-height: 52px;
  }
}

+for_breakpoint(md) {
  .line {
    max-width: 81vw;
    margin-left: -10rem;
    width: auto;
    margin-bottom: 30px;
  }

  .title {
    font-size: 44px;
    line-height: 52px;
    width: auto;
  }

  .col-title {
    padding-top: 199px;
  }
}

+for_breakpoint(cell-sm) {
  .line {
    max-width: 114vw;
    margin-left: -7rem;
    width: auto;
    margin-bottom: 30px;
  }

  .title {
    font-size: 40px;
    line-height: 40px;
    width: auto;
  }

  .image {
    min-height: 260px;
  }

  .title-content {
    bottom: 0rem;
    position: relative;
  }

  .col-title {
    padding-top: 140px;
  }

  +for_breakpoint(xs) {
    .title {
      font-size: 33px;
      line-height: 35px;
      width: auto;
    }
  }
}
</style>