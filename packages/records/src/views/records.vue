<template>
  <div class="records-wrapper">
    <div class="records-wrapper__sidebar">
      <div class="records-wrapper__sidebar__back">
        <p @click="onPushToSchedule">🡠 Back to schedule</p>
      </div>
      <div class="records-wrapper__sidebar__patient">
        <span class="records-wrapper__sidebar__patient__avatar" />
        <p class="records-wrapper__sidebar__patient__name">Patient {{ id }}</p>
        <p class="records-wrapper__sidebar__patient__email">patient{{ id }}@gmail.com</p>
        <div class="records-wrapper__sidebar__patient__info">
          <div class="records-wrapper__sidebar__patient__info__counter">
            <span>15</span>
            <p>Past</p>
          </div>
          <div class="records-wrapper__sidebar__patient__info__counter">
            <span>15</span>
            <p>Upcoming</p>
          </div>
        </div>
      </div>
      <div class="records-wrapper__sidebar__items">
        <div class="records-wrapper__sidebar__items__item">Details</div>
        <div class="records-wrapper__sidebar__items__item">Medical Referral</div>
        <div class="records-wrapper__sidebar__items__item">Patient History</div>
      </div>
    </div>
    <div class="records-wrapper__content">
      <div class="records-wrapper__content__appointments-card">
        <p>Patient appointments</p>
        <div class="records-wrapper__content__appointments-card__group">
          <button>Upcoming Appointments</button>
          <button>Past Appointment</button>
          <button>Medical Records</button>
        </div>
        <div class="records-wrapper__content__appointments-card__placeholder">
          <h2>In development...</h2>
          <p>This feature is development. We'll alert you <br />when we finish it.</p>
        </div>
      </div>
      <div class="records-wrapper__content__notes-card">
        <p>Notes</p>
        <textarea placeholder="Notes from the appointment..." />
      </div>
      <div class="records-wrapper__content__attachments-card">
        <p>Attachments</p>
        <div class="records-wrapper__content__attachments-card__placeholder">
          <h2>In development...</h2>
          <p>This feature is development. We'll alert you when we finish it.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Home',

  props: {
    id: String,
  },

  setup() {
    const router = useRouter();

    const onPushToSchedule = () => {
      router.push('/schedule');
    };

    return {
      onPushToSchedule,
    };
  },
});
</script>

<style lang="scss" scoped>
.records-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #fafafa;

  &__sidebar {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-right: 1px solid rgb(226, 226, 226);

    &__back {
      width: 100%;
      padding: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #333333;
      border-bottom: 1px solid rgb(226, 226, 226);
      font-size: 14px;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        background: #eeeeee;
      }
    }

    &__patient {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 32px 0px;
      border-bottom: 1px solid rgb(226, 226, 226);

      &__avatar {
        width: 70px;
        height: 70px;
        border-radius: 16px;
        background: #f3f3f3;
        margin-bottom: 12px;
        border: 1px solid rgb(226, 226, 226);
      }

      &__name {
        font-size: 18px;
        font-weight: 800;
      }

      &__email {
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 12px;
        color: #333333;
      }

      &__info {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 16px;

        span {
          font-weight: 600;
        }

        p {
          font-size: 12px;
          color: #333333;
        }
      }
    }

    &__items {
      display: flex;
      flex-direction: column;

      &__item {
        display: flex;
        align-items: center;
        padding: 16px 24px;
        cursor: pointer;
        transition: 0.3s;
        font-size: 14px;
        color: #333333;

        &:hover {
          background: #f5f5f5;
        }

        &:first-child {
          color: #fff;
          background: #45b9ff;
          border-bottom: 3px solid #2b8dca;

          &:hover {
            background: #379ddd;
          }
        }
      }
    }
  }

  &__content {
    flex: 4;
    width: 100%;
    height: 100%;
    display: grid;
    padding: 32px;
    grid-template-columns: 2fr 1fr;
    gap: 16px;
    overflow: auto;

    &__appointments-card {
      display: flex;
      flex-direction: column;
      grid-column: 1/2;
      grid-row: 1/3;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.03);
      padding: 16px;
      border: 1px solid rgb(226, 226, 226);
      gap: 16px;

      p {
        font-weight: 500;
        color: #333333;
        font-size: 14px;
      }

      &__group {
        width: fit-content;
        display: flex;
        align-items: center;
        border-radius: 6px;
        padding: 4px;
        background: #f3f3f3;

        button {
          background: transparent;
          border: none;
          border-radius: 0px;
          font-weight: 600;
          font-size: 12px;
          color: #868686;
          padding: 12px 16px;

          &:first-child {
            background: #fff;
            color: #379ddd;
            border-radius: 6px;
          }
        }
      }

      &__placeholder {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 8px;
        background: #f5f5f5;
        border-radius: 6px;
        color: rgb(61, 61, 61);
      }
    }

    &__notes-card {
      display: flex;
      flex-direction: column;
      grid-column: 2/3;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.03);
      padding: 16px;
      border: 1px solid rgb(226, 226, 226);
      gap: 8px;

      p {
        font-weight: 500;
        color: #333333;
        font-size: 14px;
      }

      textarea {
        width: 100%;
        height: 100%;
        padding: 16px;
        border: 1px solid rgb(226, 226, 226);
        border-radius: 4px;
        font-family: 'Poppins';
        outline: none;
      }
    }

    &__attachments-card {
      display: flex;
      flex-direction: column;
      grid-column: 2/3;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.03);
      padding: 16px;
      border: 1px solid rgb(226, 226, 226);
      gap: 16px;

      p {
        font-weight: 500;
        color: #333333;
        font-size: 14px;
      }

      &__placeholder {
        height: 100%;
        display: flex;
        padding: 32px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 8px;
        background: #f5f5f5;
        border-radius: 6px;
        color: rgb(61, 61, 61);
      }
    }
  }
}
</style>
