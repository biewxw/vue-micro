<template>
  <div class="auth-wrapper">
    <img
      class="auth-wrapper__image"
      src="https://images.unsplash.com/photo-1603665301175-57ba46f392bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    />
    <div class="auth-wrapper__form">
      <div class="auth-wrapper__form__detail">
        <p>Clinic | <span>Trusted by the bests</span></p>
      </div>
      <div class="auth-wrapper__form__content">
        <h1>
          Over 10 thousands<br />
          using the platform.
        </h1>
        <p>Click the button bellow to login in the platform</p>
        <button @click="onPushToSchedule">Login</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Auth',

  setup() {
    const router = useRouter();

    const onPushToSchedule = () => {
      window.localStorage.setItem('AUTH:LOGGED', 'OK');
      router.push('/schedule');
    };

    return {
      onPushToSchedule,
    };
  },
});
</script>

<styles lang="scss">
.auth-wrapper {
  width: 100vw;
  height: 100vh;
  padding: 32px;
  display: flex;
  background: #052539;
  color: white;
  box-shadow: inset 0px 8px 77px 0px rgba(0, 0, 0, 0.4);

  &__image {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    object-fit: cover;
    opacity: 0.05;
  }

  &__form {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    border-radius: 12px;
    background: #0c3350;
    box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.1);
    z-index: 10;
    gap: 48px;

    &__detail {
      font-size: 14px;

      span {
        color: #bbbbbb;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 16px;

      h1 {
        line-height: 42px;
      }

      p {
        font-size: 14px;
        color: #bbbbbb;
      }

      button {
        font-size: 16px;
        font-family: 'Poppins';
        font-weight: 600;
        padding: 16px 0px;
        border: none;
        border-radius: 4px;
        color: white;
        background: #45b9ff;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          background: #38a0e0;
        }
      }
    }
  }
}
</styles>
