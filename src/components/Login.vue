<template>
<div>
    <section id="loginForm" class="section is-vertical-center">
        <div class="container">
            <div class="columns">
                <div class="column is-6">
                    <form>
                        <div class="field is-grouped is-grouped-centered">
                                <figure class="image">
                                    <img width="20" src="src/assets/logo4.png">
                                </figure>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input v-model="email" class="input is-medium" type="email" placeholder="Email"
                                    oninvalid="this.setCustomValidity('Campo Requerido')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fa fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                    <i class="fa fa-check"></i>
                                </span>
                                <p class="help is-danger"></p>
                            </p>
                        </div>

                        <div class="field">
                            <p class="control has-icons-left">
                                <input v-model="password" class="input is-medium" type="password" placeholder="Password"
                                oninvalid="this.setCustomValidity('Campo Requerido')"
                                oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                <i class="fa fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <div class="notification is-warning has-text-centered has-text-grey-dark" v-if="errorMessage != ''">
                                    <h5 class="subtitle is-5">{{errorMessage}}</h5>
                                </div>
                            </p>
                        </div>
                        <div class="field is-grouped is-grouped-centered">
                            <p class="control">
                                <input type="button" v-on:click="Login(email, password)" class="button is-primary is-medium" value="Entrar"/>
                            </p>
                        </div>
                    </form>
                    <!-- <button class="button" v-on:click="redirectToHome">Test</button> -->
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
export default {
    data() {
        return {
        email: "",
        password: "",
        errorCode: "",
        errorMessage: "",
        msg: ""
        };
    },
    created: function() {
        var vm = this;
            firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                vm.$router.push({ name: "Home" });
            }
            });
    },
    methods: {
        Login: function(email, password) {
        var vm = this;
        firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
                vm.$router.push({ name:'Home'});
            })
            .catch(function(error) {
                if (error.code == "auth/weak-password") {
                    vm.errorMessage = error.code;
                } else {
                    vm.errorMessage = "Usuario o Contraseña Incorrecta";
                }
            });
        }
    }
}
</script>

<style scoped>
.section {
  min-height: 100vh;
}
.is-vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  margin-bottom: 20px;
}
.container {
  padding: 10px;
  margin-bottom: 90px;
}
.column {
  margin: auto;
}
</style>
