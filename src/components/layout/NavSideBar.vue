<template>
  <aside class="side-bar">
    <nav class="side-bar__nav">
      <img src="/logo.svg" alt="logo" class="icon-nav-home" />
      <ul class="side-bar__nav--list">
        <li class="side-bar__nav--item">
          <router-link :to="{ name: 'overview', params: { data: 'overview' } }">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                class="icon-nav"
                d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                fill="#5A698F"
              />
            </svg>
          </router-link>
        </li>
        <li class="side-bar__nav--item">
          <router-link :to="{ name: 'movies', params: { data: 'movies' } }">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                class="icon-nav"
                d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
                fill="#5A698F"
              />
            </svg>
          </router-link>
        </li>
        <li class="side-bar__nav--item">
          <router-link :to="{ name: 'tv-series', params: { data: 'tv-series' } }">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                class="icon-nav"
                d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
                fill="#5A698F"
              />
            </svg>
          </router-link>
        </li>
        <li class="side-bar__nav--item">
          <router-link :to="{ name: 'bookmarked', params: { data: 'bookmark' } }">
            <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                class="icon-nav"
                d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
                fill="#5A698F"
              />
            </svg>
          </router-link>
        </li>
      </ul>
      <img src="/image-avatar.png" alt="user image" class="user-image" />
    </nav>
  </aside>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.side-bar {
  background-color: $semi-dark-blue;
  border-radius: pxToRem(20);
  width: pxToRem(96);
  height: pxToRem(960);
  padding: pxToRem(32) 0;
  position: fixed;
  z-index: 100;

  &__nav {
    @include flex-direction-justify-align(column, space-between, center);
    height: 100%;
    transition: all 1s;

    &--list {
      @extend %flex-column;
      gap: pxToRem(25);
      margin-top: pxToRem(-500);
    }

    &--item:hover .icon-nav {
      transition: all 0.3s;
      fill: $red;
    }

    &--item .router-link-active .icon-nav {
      fill: $pure-white;
    }
  }
}

.user-image {
  width: pxToRem(40);
  height: pxToRem(40);
  border-radius: pxToRem(40);
  border: pxToRem(1) solid $pure-white;
}

@include media-query($tablet) {
  .side-bar {
    width: 90%;
    height: pxToRem(72);
    padding: 0 pxToRem(32);
    margin: 0 pxToRem(25);

    &__nav {
      flex-direction: row;
      width: 100%;

      &--list {
        flex-direction: row;
        margin-top: 0;
      }
    }
  }
}

@include media-query($mobile-medium) {
  .side-bar {
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    height: pxToRem(56);
    margin: 0;
    padding: 0 pxToRem(16);
    border-radius: 0;
    z-index: 100;
  }

  .icon-nav-home {
    width: pxToRem(25);
    height: pxToRem(20);
  }

  .user-image {
    width: pxToRem(24);
    height: pxToRem(24);
  }
}
</style>
