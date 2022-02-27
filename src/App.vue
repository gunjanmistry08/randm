<template>
  <div id="app" :class="{ dark: isDark }">
    <div>
      <h2>Rick And Morty</h2>
      <toggle />
    </div>
    <div v-if="!loading">
      <div
        class="user"
        :class="{ dark: isDark }"
        v-for="user in users"
        :key="user.id"
      >
        <card :user="user" />
      </div>
    </div>
    <div v-if="loading">
      <div
        class="user"
        :class="{ dark: isDark }"
        v-for="index in [0, 1, 2, 3]"
        :key="index"
      >
        <skeleton-card />
      </div>
    </div>
    <loader v-if="loader" />
  </div>
</template>

<script>
import axios from "axios";
import Card from "./components/Card.vue";
import SkeletonCard from "./components/SkeletonCard.vue";
import Loader from "./components/Loader.vue";
import Toggle from "./components/Toggle.vue";
import { mapGetters } from "vuex";
export default {
  components: { Card, SkeletonCard, Loader, Toggle },
  name: "App",
  data() {
    return {
      users: [],
      next: "",
      loading: true,
      loader: false,
      darktheme: false,
    };
  },
  computed: {
    ...mapGetters(["isDark"]),
  },
  methods: {
    debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
},  
    getInitialUsers() {
      axios
        .get(`https://rickandmortyapi.com/api/character`)
        .then((response) => {
          this.users = response.data.results;
          this.next = response.data.info.next;
          this.loading = false;
        });
    },
    getNextUser() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow && this.next && !this.loader ) {
          this.loader = true;
          axios.get(this.next).then((response) => {
            this.users.push(...response.data.results);
            this.next = response.data.info.next;
            this.loader = false;
          });
        }
      };
    },
    toggleDarkTheme() {
      console.log(this.darktheme);
      this.darktheme = !this.darktheme;
      console.log(this.darktheme);
    },
  },
  mounted() {
    this.getInitialUsers();
    this.getNextUser();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #fff;
}
.user {
  display: flex;
  border-radius: 1em;
  margin: 1em auto;
  width: 80%;
  min-width: 320px;
  box-shadow: 8px 4px 12px #cecece, -12px -8px 16px #cecece;
  color: steelblue;
}
.dark {
  background-color: #2c3e50;
  color: #cecece;
}
</style>
