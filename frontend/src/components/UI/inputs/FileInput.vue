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
           type="file" class="form-control"
           aria-label="Username"
           aria-describedby="basic-addon1"
           ref="file"
           @change="handleFileUpload">
  </div>
</template>

<script>
import {useSettings} from "@/hooks/useSettings";
export default {
  name: 'file-input',
  setup(props) {
    const {setFileData} = useSettings()
    return {
      setFileData,
    }
  },
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
      //this.$emit('updateInput', 'hello')
    },

    handleFileUpload(){
    let file = this.$refs.file.files[0];
    let this_ref = this
    let reader = new FileReader();

    reader.readAsText(file);
    var rawLog
    reader.onload = function(e) {
    rawLog = reader.result;
    console.log(rawLog);
    //ababa.setFileData(rawLog)
    this_ref.$store.commit('setFileData', rawLog)
    //console.log(ababa.$emit('update:modelValue', 'asd'))
    //ababa.$emit('updateInput', 'hello')
    //console.log(this)
    //console.log(this.props.modelValue)
    
    };
    console.log(rawLog)

    
    }
  }
}
</script>

<style scoped>

</style>