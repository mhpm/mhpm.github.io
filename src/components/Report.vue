<template>
    <div class="hero-body">
        <div class="container">
            <div class="notification is-primary">
                <h1 class="title is-h1 has-text-centered">REPORTE SEMANAL</h1>
            </div>   
            <form v-on:submit.prevent="SendEmail">
                <div class="columns">
                    <div class="column">
                        <h1 class="title">Reporte Semanal</h1>

                        <div class="field">
                            <label class="label">Celula</label>
                            <div class="control has-icons-left">
                                <input class="input is-medium" type="number" v-model="celula" placeholder="Numero" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required />
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Verbo del Ciclo</label>
                            <div class="control has-icons-left">
                                <div class="select">
                                    <select v-model="verbo">
                                        <option>1 - Orar</option>
                                        <option>2 - Anotar</option>
                                        <option>3 - Contactar</option>
                                        <option>4 - Confirmar</option>
                                        <option>5 - Desatar</option>
                                        <option>6 - Llevar</option>
                                        <option>7 - Motivar</option>
                                        <option>8 - Integar</option>
                                        <option>9 - Consolidar</option>
                                        <option>10 - Preparar</option>
                                        <option>11 - Santificar</option>
                                        <option>12 - Matricular</option>
                                        <option>13 - Conservar</option>
                                        <option>14 - Doctrinar</option>
                                        <option>15 - Discipular</option>
                                        <option>16 - Bautizar</option>
                                    </select>
                                </div>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-hand-point-right"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Lider</label>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Nombre completo" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Asistente</label>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="asistente" type="text" placeholder="Nombre completo" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="far fa-user"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Clasificacion del Grupo</label>
                            <div class="control has-icons-left">
                                <div class="select">
                                    <select v-model="cgrupo">
                                        <option>Mixto</option>
                                        <option>Mujeres</option>
                                        <option>Hombres</option>
                                        <option>Jovenes</option>
                                    </select>
                                </div>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-users"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Tema Impartido</label>
                            <div class="control has-icons-left">
                                <div class="select">
                                    <select v-model="tema">
                                        <option>1 - La palabra fuente de vida</option>
                                        <option>2 - El origen del pecado</option>
                                        <option>3 - La necesidad del perdón de Dios</option>
                                        <option>4 - Características del Amor de Dios</option>
                                        <option>5 - El Compromiso y la bendición de la fe</option>
                                        <option>6 - ¿Que debo hacer para heredar la vida eterna?</option>
                                        <option>7 - Una oportunidad para todos</option>
                                        <option>8 - Él nos hizo dignos</option>
                                        <option>9 - Un Cambio de direccón</option>
                                        <option>10 - Experiencia transformadora</option>
                                        <option>11 - Hablando con Dios</option>
                                        <option>12 - El poder para atar y desatar</option>
                                        <option>13 - Tiempo de desiciones</option>
                                        <option>14 - Experiencia del retorno</option>
                                        <option>15 - Bautismo en el nombre de Jesucristo</option>
                                        <option>16 - Levántate y bautízate</option>
                                    </select>
                                </div>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-book"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Lugar de Reunion</label>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lugar" type="text" placeholder="Direccion" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-map-marker"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Dia de Reunion</label>
                            <div class="control has-icons-left">
                                <input id="datepicker" class="input is-medium" v-model="dia" oninvalid="this.setCustomValidity('Campos Obligatorios')" oninput="setCustomValidity('')"
                                    required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-calendar-check"></i>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    <div class="column">
                        <h3 class="title is-3">Asistencia General Total: {{total}}</h3>
                        <h5 class="title is-5">Bautizados, Total: {{bauRows.length}}</h5>
                        <div class="field has-addons">
                            <div class="control">
                                <input class="input" v-model="bautizados" type="text" placeholder="Nombre completo">
                            </div>
                            <div class="control">
                                <a class="button is-primary" v-on:click="AddRow(bautizados, bauRows)">
                                    Agregar
                                </a>
                            </div>
                        </div>
                        <div class="field">
                            <table class="table is-fullwidth">
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr v-for="row, index in bauRows">
                                    <td>
                                        <label class="label">{{row.name}}</label>
                                    </td>
                                    <td>
                                        <a class="tag is-danger" v-on:click="removeRow(index, bauRows)">Quitar</a>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <h5 class="title is-5">Amigos, Total: {{amiRows.length}}</h5>
                        <div class="field has-addons">
                            <div class="control">
                                <input class="input" v-model="amigos" type="text" placeholder="Nombre completo">
                            </div>
                            <div class="control">
                                <a class="button is-primary" v-on:click="AddRow(amigos, amiRows)">
                                    Agregar
                                </a>
                            </div>
                        </div>
                        <div class="field">
                            <table class="table is-fullwidth">
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr v-for="row, index in amiRows">
                                    <td>
                                        <label class="label">{{row.name}}</label>
                                    </td>
                                    <td>
                                        <a class="tag is-danger" v-on:click="removeRow(index, amiRows)">Quitar</a>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <h5 class="title is-5">Niños, Total: {{ninRows.length}}</h5>
                        <div class="field has-addons">
                            <div class="control">
                                <input class="input" v-model="ninos" type="text" placeholder="Nombre completo">
                            </div>
                            <div class="control">
                                <a class="button is-primary" v-on:click="AddRow(ninos, ninRows)">
                                    Agregar
                                </a>
                            </div>
                        </div>
                        <div class="field">
                            <table class="table is-fullwidth">
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr v-for="row, index in ninRows">
                                    <td>
                                        <label class="label">{{row.name}}</label>
                                    </td>
                                    <td>
                                        <a class="tag is-danger" v-on:click="removeRow(index, ninRows)">Quitar</a>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <h5 class="title is-5">Intermedios, Total: {{intRows.length}}</h5>
                        <div class="field has-addons">
                            <div class="control">
                                <input class="input" v-model="inter" type="text" placeholder="Nombre completo">
                            </div>
                            <div class="control">
                                <a class="button is-primary" v-on:click="AddRow(inter, intRows)">
                                    Agregar
                                </a>
                            </div>
                        </div>
                        <div class="field">
                            <table class="table is-fullwidth">
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr v-for="row, index in intRows">
                                    <td>
                                        <label class="label">{{row.name}}</label>
                                    </td>
                                    <td>
                                        <a class="tag is-danger" v-on:click="removeRow(index, intRows)">Quitar</a>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div class="field">
                            <label class="label">Observaciones</label>
                            <div class="control">
                                <textarea class="textarea" v-model="obs"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label class="label">Ofrenda</label>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="ofrenda" type="number" min="0.01" step="0.01" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" placeholder="00.00" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-dollar-sign"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Elaborado Por</label>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="elaborado" type="text" placeholder="Nombre completo" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-edit"></i>
                                </span>
                            </div>
                        </div>

                        <div class="field is-grouped is-grouped-centered">
                            <div class="control">
                                <input class="button is-primary is-medium" type="submit" value="Enviar" :disabled="total == 0">
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div v-bind:class="{modal:true, 'is-active':modalActive}">
            <div class="modal-background"></div>
            <div class="modal-content">
                <section v-bind:class="['hero is-medium', modalColor]">
                    <div class="hero-body">
                        <div class="container" id="StatusBoard">
                            <h1 class="title is-1">{{status}}</h1>
                            <h4 class="subtitle is-4">{{msg}}</h4>
                        </div>
                    </div>
                </section>
            </div>
            <button v-on:click="CloseModal" class="modal-close is-large" aria-label="close"></button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                celula: "",
                lider: "",
                asistente: "",
                cgrupo: "Mixto",
                tema: "1 - La palabra fuente de vida",
                lugar: "",
                dia: "",
                verbo: "1 - Orar",
                obs: "",
                bautizados: "",
                amigos: "",
                ninos: "",
                inter: "",
                ofrenda: "",
                elaborado: "",
                submitted: false,
                bauRows: [],
                amiRows: [],
                ninRows: [],
                intRows: [],
                total: 0,
                modalActive: false,
                modalColor: 'is-warning',
                status: "Enviando Reporte...",
                msg: "Espere por favor"
            }
        },
        mounted: function() {
            var vm = this;
            $(document).ready(function() {
                $("#datepicker").datepicker({
                    onSelect: function() {
                    vm.dia = $("#datepicker:text").val();
                    }
                });
            });
        },
        methods: {
            SendEmail: function() {
                var vm = this;
                vm.modalActive = true;
                emailjs.send("rcm1ens_gmail_com", "rcm_template", { data: this.$data})
                    .then(function(response) { console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                        vm.MailSent()
                    }, function(err) { console.log("FAILED. error=", err);
                        vm.MailFail()
                    });
            },
            AddRow: function(name, list) {
                list.push({ name: name});
                this.Clean()
            },
            removeRow: function(row, list) {
                Vue.delete(list, row);
                this.Clean();
            },
            MailFail: function() {
                this.status = "Envío Fallido";
                this.msg = "Revisa tu conexión a internet ó intentalo mas tarde!";
                this.modalColor = 'is-danger';
                this.exc = false;
                this.check = true;
            },
            MailSent: function() {
                this.status = "Reporte Enviado!";
                this.msg = "Gracias por cumplir a tiempo, Dios te bendiga!";
                this.modalColor = 'is-primary';
            },
            CloseModal: function(){
                this.modalActive = false;
                this.status = 'Enviando Reporte...';
                this.msg = 'Espere por favor';
                this.modalColor = 'is-warning';
            },
            Clean: function() {
                this.bautizados = "";
                this.amigos = "";
                this.ninos = "";
                this.inter = "";
                this.total = this.bauRows.length + this.amiRows.length + this.ninRows.length + this.intRows.length;
            }
        }
    };
</script>

<style scoped>
.navbar-burger {
  background-color: #6abfb0 !important;
}
hr {
  background-color: #6abfb0;
  margin: 0px;
}
</style>