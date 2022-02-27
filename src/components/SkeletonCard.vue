<template>
  <div>
      <div class="user-avatar">
        <div class="img-loading" />
      </div>
      <div class="user-details">
        <h2 class="user-name">
        <div class="title-loading" />
        </h2>
      </div>
  </div>
</template>

<script>
export default {

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
@keyframes pulse-bg {
    0% { background-color: #ddd; }
    50% { background-color: #d0d0d0; }
    100% { background-color: #ddd; }
}
.user-avatar .img-loading {
    display: block;
    width: 300px;
    height: 300px;
    border-radius: 12px;
    animation: pulse-bg 1s infinite;
}
.user-details .user-name .title-loading{
    display: block;
    width: 300px;
    height: 2rem;
    border-radius: 12px;
    animation: pulse-bg 1s infinite;
}
</style>