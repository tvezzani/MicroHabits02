<template>
  <div>
    <section class="title section">Track Goals</section>
    <div class="column is-narrow is-flex is-justify-content-center">
      <div class="box">
        <div class="block">
          <p class="subtitle">Have you washed the dishes?</p>
          <div class="control">
            <label class="radio">
              <input type="radio" name="answer2" />
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="answer2" />
              No
            </label>
          </div>
        </div>

        <div class="block">
          <p class="subtitle">Have you washed the dishes?</p>
          <div class="control">
            <label class="radio">
              <input type="radio" name="answer2" />
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="answer2" />
              No
            </label>
          </div>
        </div>

        <div class="block">
          <p class="subtitle">Have you washed the dishes?</p>
          <div class="control">
            <label class="radio">
              <input type="radio" name="answer2" />
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="answer2" />
              No
            </label>
          </div>
        </div>

        <div class="block">
          <p class="subtitle">Have you washed the dishes?</p>
          <div class="control">
            <label class="radio">
              <input type="radio" name="answer2" />
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="answer2" />
              No
            </label>
          </div>
        </div>

        <div class="button is-link">Submit</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Track",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.box {
  width: 500px;
}
</style>