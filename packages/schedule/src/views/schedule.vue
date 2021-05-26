<template>
  <div class="schedule-wrapper">
    <div class="schedule-wrapper__events">
      <h3>Today's patients</h3>
      <div class="schedule-wrapper__events__content">
        <div
          class="schedule-wrapper__events__content__event"
          v-for="(event, index) in 6"
          :key="index"
        >
          <p @click="onPushToRecords(index + 1)">08:00 - 09:00</p>
          <span>Ana da Silva</span>
        </div>
      </div>
      <div class="schedule-wrapper__events__footer">
        <p @click="onPushToAuth">🡠 Logout</p>
      </div>
    </div>
    <div class="schedule-wrapper__calendar">
      <div class="schedule-wrapper__calendar__message">
        <p>Good morning,<br /><span>Dr. Hannibal Lecter</span></p>
      </div>
      <div class="schedule-wrapper__calendar__toolbar">
        <input placeholder="Search a patient" />
        <button>+ New scheduling</button>
      </div>
      <div class="schedule-wrapper__calendar__view">
        <div class="schedule-wrapper__calendar__view__controller">
          <input type="date" disabled />
          <div class="schedule-wrapper__calendar__view__controller__group">
            <button>Week</button>
            <button>Day</button>
          </div>
        </div>
        <div class="schedule-wrapper__calendar__view__content">
          <h2>In development...</h2>
          <p>This feature is development. We'll alert you <br />when we finish it.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Schedule',

  setup() {
    const router = useRouter();

    const onPushToAuth = () => {
      window.localStorage.removeItem('AUTH:LOGGED');
      router.push('/auth');
    };

    const onPushToRecords = (id: number) => {
      router.push(`/records/${id}`);
    };

    return {
      onPushToAuth,
      onPushToRecords,
    };
  },
});
</script>

<style lang="scss" scoped>
.schedule-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #fafafa;

  &__events {
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgb(226, 226, 226);
    background: #fff;

    h3 {
      color: #333333;
      padding: 16px;
      border-bottom: 1px solid rgb(226, 226, 226);
    }

    &__content {
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 16px;
      gap: 16px;
      overflow: auto;

      &__event {
        width: 100%;
        padding: 16px;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(226, 226, 226);
        border-radius: 4px;
        box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.03);

        p {
          color: #35a0e2;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }

        span {
          color: rgb(136, 136, 136);
          font-weight: 500;
        }
      }
    }

    &__footer {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px;
      font-size: 14px;
      border-top: 1px solid rgb(226, 226, 226);
      transition: 0.3s;
      cursor: pointer;
      color: #ff4545;

      &:hover {
        color: #e23a3a;
      }
    }
  }

  &__calendar {
    flex: 4;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 16px;

    &__message {
      width: 100%;
      color: #333333;
      display: flex;
      align-items: center;
      font-weight: 500;

      span {
        font-size: 24px;
        font-weight: 800;
      }
    }

    &__toolbar {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        border: 1px solid rgb(226, 226, 226);
        padding: 10px 16px;
        border-radius: 4px;
        font-family: 'Poppins';
        outline: none;

        &:focus {
          outline: none;
        }

        &::placeholder {
          font-family: 'Poppins';
        }
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgba(0, 0, 0, 0.2);
        height: 100%;
        padding: 0px 16px;
        border-radius: 4px;
        font-family: 'Poppins';
        color: #fff;
        background: #45b9ff;
        cursor: pointer;
      }
    }

    &__view {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 4px;
      border: 1px solid rgb(226, 226, 226);

      &__controller {
        display: flex;
        padding: 16px;
        align-items: center;
        gap: 16px;
        border-bottom: 1px solid rgb(226, 226, 226);

        input {
          border: 1px solid rgb(226, 226, 226);
          padding: 6px 16px;
          border-radius: 4px;
          font-family: 'Poppins';
          outline: none;

          &:focus {
            outline: none;
          }

          &::placeholder {
            font-family: 'Poppins';
          }
        }

        &__group {
          display: flex;

          button {
            width: 80px;
            font-family: 'Poppins';
            padding: 6px 16px;
            border-radius: 0px;
            border: none;
            border: 1px solid rgba(0, 0, 0, 0.2);
            background: #fff;
            cursor: pointer;

            &:first-child {
              color: #fff;
              background: #45b9ff;
              border-top-left-radius: 4px;
              border-bottom-left-radius: 4px;
              transition: 0.3s;

              &:hover {
                background: #35a0e2;
              }
            }

            &:last-child {
              color: rgb(136, 136, 136);
              border-top-right-radius: 4px;
              border-bottom-right-radius: 4px;
              transition: 0.3s;

              &:hover {
                background: rgb(235, 235, 235);
              }
            }
          }
        }
      }

      &__content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 8px;
        color: rgb(61, 61, 61);
      }
    }
  }
}
</style>
