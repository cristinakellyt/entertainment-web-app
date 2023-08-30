<template>
  <div class="home-view">
    <img src="/logo.svg" alt="logo" class="icon-nav-home" />
    <h1>Welcome to the ZK entertainment app</h1>
    <h2>Here you'll find the best movies and tv-series</h2>
    <p>
      For a complete experience, you can sign up or log in and see all the subscriptions we can
      offer
    </p>
    <div class="home-view__cta">
      <router-link class="home-view__signup" :to="{ name: 'signup' }"> Sign up </router-link>
      <router-link class="home-view__login" :to="{ name: 'login' }"> Log in</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.home-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: pxToRem(30);

  &__cta {
    display: flex;
    gap: pxToRem(20);
  }

  &__signup {
    color: $red;
    background-color: $pure-white;
    padding: pxToRem(10);
    border-radius: pxToRem(5);
    box-shadow: 2px 2px 2px $pure-white;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-4px);
    }
  }

  &__login {
    color: $pure-white;
    background-color: $red;
    padding: pxToRem(10);
    border-radius: pxToRem(5);
    transition: all 0.3s;

    &:hover {
      transform: translateY(-4px);
    }
  }
}
</style>
