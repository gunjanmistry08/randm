<template>
  <div>
      <div class="user-avatar" data-aos="zoom-in">
        <img :src="user.image" alt="" sizes="" srcset=""/>
      </div>
      <div class="user-details">
        <h2 class="user-name">
          {{ user.name }}
        </h2>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        user:{
            type: Object,
            default() {
                return {}
            }
        },
    }

}
</script>

<style>
.user-avatar {
  padding: 1em;
}

.user-avatar img {
  display: block;
  width: 100%;
  min-width: 64px;
  height: auto;
  border-radius: 12px;
}

.user-details {
  padding: 1em;
  margin: auto;
}

.user-name {
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: 900;
}
</style>