<template>
    <nav class="navbar is-light">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <img src="src/assets/logo4.png" width="112" height="28">
            </a>
            <div class="navbar-burger burger" data-target="navbarItems">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div id="navbarItems" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item has-text-dark" href="#">
                    Inicio
                </a>
                <a class="navbar-item has-text-dark" href="#">
                    Reporte Semanal
                </a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link has-text-dark" href="">
                        Formatos
                    </a>
                    <div class="navbar-dropdown is-boxed">
                        <a class="navbar-item has-text-dark" href="#">
                            Datos Generales
                        </a>
                        <a class="navbar-item has-text-dark" href="#">
                            Registro de Miembros
                        </a>
                        <a class="navbar-item has-text-dark" href="#">
                            Extiende tu mano
                        </a>
                        <a class="navbar-item has-text-dark" href="#">
                            Metas
                        </a>
                        <hr class="divider">
                        <a class="navbar-item has-text-primary" href="#">
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
        data(){
            return{}
        },
        methods:{
            LogOut: function () {
                var vm = this;
                firebase.auth().signOut().then(function () {
                    vm.redirectToIndex();
                }, function (error) {
                });
            },
            redirectToIndex: function() {
                alert('logOut');
                //window.location.href = 'http://127.0.0.1:5500/index.html'
                // window.location.href = 'https://mhpm.github.io/index.html';
            }
        }
    };

    document.addEventListener('DOMContentLoaded', function () {

        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(function ($el) {
                $el.addEventListener('click', function () {

                    // Get the target from the "data-target" attribute
                    var target = $el.dataset.target;
                    var $target = document.getElementById(target);

                    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                    $el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
            });
        }

    });
</script>

<style scoped>
    .navbar-burger{
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