<template>
  <section>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <h2 class="end text-xs-center">До конца акции осталось:</h2>
          <div class="clock"></div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import FlipClock from 'flipclock/compiled/flipclock.min';
import 'flipclock/compiled/flipclock.css';
import $ from 'jquery';

export default {
  data() {
    return {
    };
  },
  mounted() {
    const date = new Date('29 September, 2017 02:15:32');
    const now = new Date();
    const difference = (date.getTime() / 1000) - (now.getTime() / 1000);
    const clockEl = $('.clock');

    const clock = clockEl.FlipClock(difference, {
      countdown: true,
      clockFace: 'DailyCounter',
      language: 'ru',
      minimumDigits: 5,
    });
  },
};
</script>

<style scoped>
.flip-clock-wrapper {
  display: flex;
  justify-content: center;
  padding: 30px 0;
}
.end {
  text-transform: uppercase;
  font-weight: 100;
  text-shadow: 1px 1px 1px #000;
}
span .flip-clock-label {
  font-size: 16px;
}
</style>