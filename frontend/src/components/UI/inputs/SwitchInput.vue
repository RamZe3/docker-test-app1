<template>
  <div class="col-mb-3">
<!--    <small id="passwordHelp" class="text-danger">-->
<!--      Must be 8-20 characters long. nfhjdjhfdkskfdskfjds-->
<!--    </small>-->
  </div>
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">{{ setting.title }}</span>
    <input :value="modelValue"
           :placeholder="setting.placeholder"
           @input="updateInput"
           type="checkbox" class="form-control"
           role="switch"
           aria-label="Username"
           aria-describedby="basic-addon1">
  </div>

  <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
</template>

<script>
export default {
  name: 'switch-input',
  props: {
    setting: {
      required: true,
    },
    modelValue: {
      type: String,
    }
  },
  methods: {
    updateInput(event) {
      //this.$emit('update:modelValue', event.target.value)
      this.$emit('updateInput', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>