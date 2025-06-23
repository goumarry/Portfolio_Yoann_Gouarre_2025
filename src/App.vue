<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">Mon Portfolio</a>
        <div class="collapse navbar-collapse justify-content-center">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Accueil</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/stage">Stage</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/alternance">Alternance</router-link>
            </li>

            <!-- Dropdown Projets -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                Projets
              </a>
              <ul class="dropdown-menu">
                <li><router-link class="dropdown-item" to="/but1">BUT 1</router-link></li>
                <li><router-link class="dropdown-item" to="/but2">BUT 2</router-link></li>
                <li><router-link class="dropdown-item" to="/but3">BUT 3</router-link></li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>

          <!-- Switch jour/nuit -->
          <button class="btn btn-outline-primary" @click="toggleTheme" :title="isDark ? 'Passer en mode jour' : 'Passer en mode nuit'">
            <i :class="isDark ? 'bi bi-sun' : 'bi bi-moon'"></i>
          </button>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isDark: true // par défaut sombre
    }
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
      this.applyTheme();
    },
    applyTheme() {
      if (this.isDark) {
        document.documentElement.style.setProperty('--background-color', '#1a1a1a');
        document.documentElement.style.setProperty('--text-color', '#e0e0e0');

      } else {
        document.documentElement.style.setProperty('--background-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#1a1a1a');

      }
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    this.isDark = (savedTheme !== 'light');
    this.applyTheme();
  }
}
</script>
