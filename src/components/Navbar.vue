<template>
    <nav class="navbar is-light">
        <div class="navbar-brand">
            <a class="navbar-item">
               <router-link to="/Home"> <img src="src/assets/logo4.png"></router-link>
            </a>
            <div class="navbar-burger burger" data-target="navbarItems">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div id="navbarItems" class="navbar-menu">
            <div class="navbar-start">
                <router-link class="navbar-item has-text-dark" to="/Report">
                    Reporte Semanal
                </router-link>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link has-text-dark">
                        Formatos
                    </a>
                    <div class="navbar-dropdown is-boxed">
                        <router-link to="/Datos">
                            <a class="navbar-item has-text-dark">Cuatrimestral</a>
                        </router-link>
                        <hr class="divider">
                        <a class="navbar-item has-text-primary">
                            Version 1.0
                        </a>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped is-grouped-centered">
                        <p class="control">
                            <a class="button is-primary" v-on:click="LogOut">
                                <span class="icon">
                                    <i class="fa fa-sign-out-alt"></i>
                                </span>
                                <span>Cerrar Sesion</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  created: function() {
    var vm = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          //console.log(user.email);
      } else {
        vm.$router.push({ name: "Login" });
      }
    });

    $(document).ready(function() {
      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
          $el.addEventListener("click", function() {
            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          });
        });
      }
    });
  },
  methods: {
    LogOut: function() {
      var vm = this;
      firebase.auth().signOut().then(function() {
            vm.$router.push({ name: "Login" });
          },
          function(error) {}
        );
    }
  }
};
</script>

<style scoped>
.navbar-burger {
  background-color: #6abfb0 !important;
}
.navbar-burger span {
  height: 3px;
  left: calc(50%);
}
hr {
  background-color: #6abfb0;
  margin: 0px;
}
</style>