<template>
  <div class="auth-page">
    <img src="/logo.svg" />
    <div class="login-card">
      <h1>Login</h1>
      <form class="form" id="login-form" @submit.prevent="login">
        <div class="form-group">
          <input
            class="form-group__input"
            v-model="email"
            type="email"
            id="email"
            placeholder="Email address"
            autocomplete="email"
            required
          />
          <label class="form-group__label" for="email">Email address</label>
        </div>

        <div class="form-group">
          <input
            class="form-group__input"
            v-model="password"
            :type="isPasswordVisible ? 'show-password' : 'password'"
            id="password"
            placeholder="Password"
            autocomplete="off"
            required
          />
          <label class="form-group__label" for="password">Password</label>
          <img
            @click="togglePasswordVisibility"
            class="eye-password"
            :src="isPasswordVisible ? hidePasswordIcon : showPasswordIcon"
            alt="show password"
          />
        </div>

        <div class="form-group__btns-options">
          <button type="submit" form="login-form">Sign in</button>
          <span class=""
            >Don't have an account? <RouterLink :to="{ name: 'signup' }"> Sign up</RouterLink>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isPasswordVisible = ref(false)
const showPasswordIcon = '/ic_eye.svg'
const hidePasswordIcon = '/ic_eye_off.svg'
const email = ref('')
const password = ref('')

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const login = () => {
  console.log('login')
  //TODO: redirect to home page and clean form
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.auth-page {
  @extend %flex-column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: pxToRem(32);

  img {
    margin-bottom: pxToRem(32);
  }
}

.login-card {
  @extend %flex-column;
  width: pxToRem(400);
  height: pxToRem(375);
  background-color: $semi-dark-blue;
  border-radius: pxToRem(12);
  padding: pxToRem(32);
  box-shadow: 0 pxToRem(4) pxToRem(16) rgba(0, 0, 0, 0.25);
  margin-top: pxToRem(32);

  h1 {
    @extend %heading-large;
    margin-bottom: pxToRem(32);
  }

  .form {
    @extend %flex-column;
    width: 100%;
  }
}

.form-group {
  @extend %flex-column;
  width: 100%;
  position: relative;

  &__label {
    opacity: 0;
    position: absolute;
    top: 40%;
    left: pxToRem(16);
    transform: translateY(-50%);
    font-size: pxToRem(14);
    font-weight: 300;
    line-height: pxToRem(17);
    font-family: inherit;
    color: $greyish-blue;
    display: block;
    z-index: 100;
    transition: all 0.3s ease-in-out;
  }

  &__input {
    height: pxToRem(48);
    width: 100%;
    border: none;
    padding: pxToRem(12) pxToRem(12) pxToRem(12) 0;
    background-color: $semi-dark-blue;
    font-size: pxToRem(14);
    border-bottom: pxToRem(2) solid $greyish-blue;
    font-weight: 400;
    line-height: pxToRem(19);
    color: $pure-white;
    margin-bottom: pxToRem(24);
    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: $greyish-blue;
      font-size: pxToRem(14);
      font-weight: 400;
      font-family: inherit;
    }

    &:focus {
      outline: none;
      border-bottom: pxToRem(2) solid $pure-white;
    }

    &:not(:placeholder-shown) + .form-group__label {
      opacity: 1;
      top: 0;
      left: 0;
      font-size: pxToRem(14);
    }
  }

  .eye-password {
    display: inline-block;
    height: pxToRem(24);
    width: pxToRem(24);
    position: absolute;
    top: 40%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
  }
}

.form-group__btns-options {
  @extend %flex-column;
  gap: pxToRem(24);
  align-items: center;
  transition: all 0.3s ease-in-out;
  margin-top: pxToRem(16);

  span {
    @extend %body-medium;
  }

  a {
    color: $red;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    color: $pure-white;
  }

  button {
    height: pxToRem(48);
    width: 100%;
    border: none;
    border-radius: pxToRem(6);
    background-color: $red;
    font-size: pxToRem(14);
    font-weight: 500;
    color: $pure-white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: $pure-white;
      color: $semi-dark-blue;
    }
  }
}
</style>
