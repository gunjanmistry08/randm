<template>
  <div>
    <input type="checkbox" class="checkbox" id="chk" @change="toggleDark()" />
    <label class="label" for="chk">
      <div class="ball"></div>
    </label>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["toggleDark"]),
  },
};
</script>

<style scoped>
.checkbox {
  display: none;
}

.label {
  background-color: #111;
  border-radius: 52px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 16px;
  width: 52px;
  transform: scale(1.5);
}

.label .ball {
  background-color: #ddd;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 22px;
  width: 22px;
  transform: translateX(0px);
  transition: transform 0.2s linear;
}

.checkbox:checked + .label .ball {
  transform: translateX(24px);
}
.checkbox:checked + .label {
  background-color: #fff;
}

.checkbox:checked + .label .ball {
  background-color: #777;
}
</style>