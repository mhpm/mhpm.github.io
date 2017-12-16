var navbarTemp = `<nav class="navbar is-transparent">
                <div class="navbar-brand">
                    <a class="navbar-item" href="#">
                        <img src="assets/logo4.png" width="112" height="28">
                    </a>
                    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id="navbarExampleTransparentExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item" href="#">
                            Inicio
                        </a>
                        <a class="navbar-item" href="#">
                            Reporte Semanal
                        </a>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link" href="">
                                Formatos
                            </a>
                            <div class="navbar-dropdown is-boxed">
                                <a class="navbar-item" href="#">
                                    Datos Generales
                                </a>
                                <a class="navbar-item" href="#">
                                    Registro de Miembros
                                </a>
                                <a class="navbar-item" href="#">
                                    Extiende tu mano
                                </a>
                                <a class="navbar-item" href="#">
                                    Metas
                                </a>
                                <hr class="navbar-divider">
                                <a class="navbar-item is-active" href="">
                                    Version 1.0,
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="field is-grouped">
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
                </nav>`;

Vue.component('navbar', {
    template: navbarTemp
});