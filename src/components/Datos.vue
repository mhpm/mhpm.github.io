<template>
    <div class="hero-body">
        <div class="container">
            <div class="notification is-primary">
                <h1 class="title is-h1 has-text-centered">DATOS GENERALES DE CELULA</h1>
            </div>
            <form v-on:submit.prevent="SendEmail">
                <div class="columns">
                    <div class="column">
                        <div class="field">
                        <p class="subtitle is-5">Célula</p>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Celula" type="number" placeholder="Numero" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required />
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <p class="subtitle is-5">Líder</p>
                        <div class="field">
                            <p>Nombre Completo:</p>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Lider.nombre" type="text" placeholder="" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <p>Teléfono:</p>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Lider.telefono" type="text" v-mask="'(###) ###-####'" placeholder="(###) ###-####" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-phone"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <p>Email:</p>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Lider.email" type="text" placeholder="Email" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <p>Fecha de Nacimiento:</p>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Lider.fecha" v-mask="'##/##/####'" type="text" placeholder="dia/mes/año" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-calendar-check"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <p class="subtitle is-5">Asistente</p>
                        <div class="field">
                            <p>Nombre Completo:</p>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Asistente.nombre" type="text" placeholder="" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <p>Teléfono:</p>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Asistente.telefono" type="text" v-mask="'(###) ###-####'" placeholder="(###) ###-####" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-phone"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <p>Email:</p>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Asistente.email" type="text" placeholder="Email" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <p>Fecha de Nacimiento:</p>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Asistente.fecha" v-mask="'##/##/####'" type="text" placeholder="dia/mes/año" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-calendar-check"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <p class="title is-3 is-spaced">Reuniones</p>
                        <p class="subtitle is-5">Planeacion</p>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Planeacion.dia" type="text" placeholder="Día de Réunion" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-calendar-check"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Planeacion.hora" type="text" placeholder="Hora" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-clock"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <p>Anfitrión:</p>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Planeacion.anfitrion" type="text" placeholder="Nombre Completo" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="far fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Planeacion.telAnfitrion" type="text" v-mask="'(###) ###-####'" placeholder="Teléfono" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-phone"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Planeacion.direccion" type="text" placeholder="Dirección" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-map-marker"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Planeacion.referencia" type="text" placeholder="Referencia" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-arrow-alt-circle-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <p class="title is-3 is-spaced">&nbsp;</p>
                        <p class="subtitle is-5">Alcance</p>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Alcance.dia" type="text" placeholder="Día de Réunion" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-calendar-check"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Alcance.hora" type="text" placeholder="Hora" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-clock"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <p>Anfitrión:</p>
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Alcance.anfitrion" type="text" placeholder="Nombre Completo" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="far fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Alcance.telAnfitrion" type="text" v-mask="'(###) ###-####'" placeholder="Teléfono" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-phone"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Alcance.direccion" type="text" placeholder="Dirección" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-map-marker"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Alcance.referencia" type="text" placeholder="Referencia" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-arrow-alt-circle-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-3">
                        <p class="title is-3 is-spaced">Metas de Asistencia</p>
                        <p class="subtitle is-6">Bautizados</p>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Metas.planeacion" type="number" placeholder="Réunion de Planeación" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Metas.alcance" type="number" placeholder="Réunion de Alcance" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Metas.miercoles" type="number" placeholder="Culto Miércoles" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Metas.domingo" type="number" placeholder="Culto Domíngo" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <p class="subtitle is-6">Amigos</p>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Metas.amigosA" type="number" placeholder="Anotados" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Metas.amigosR" type="number" placeholder="Réunion de Alcance" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Metas.amigosF" type="number" placeholder="Fiesta del Amigo" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Metas.amigosE" type="number" placeholder="Encuentro" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="Metas.bautismos" type="number" placeholder="Bautismos" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="column is-9">
                        <div class="columns">
                            <div class="column">     
                                <p class="title">Miembros: {{Miembros.length}}</p>
                                <div class="columns">
                                    <div class="column">
                                        <div class="field">
                                            <div class="control">
                                                <input type="text" v-model="Miembro.nombre" placeholder="Nombre Completo" class="input is-normal">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="field">
                                            <div class="control">
                                                <input type="text" v-model="Miembro.bautismo" v-mask="'##/##/####'" placeholder="Fecha Bautismo" class="input is-normal">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="field">
                                            <div class="control">
                                                <input type="text" v-model="Miembro.estadoCivil" placeholder="Estado Civil" class="input is-normal">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="field">
                                            <div class="control">
                                                <input type="checkbox" v-model="Miembro.espirituSanto"> Espiritu Santo
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="field">
                                            <div class="control">
                                                <input type="text" v-model="Miembro.direccion" placeholder="Direccion" class="input is-normal">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="field">
                                            <div class="control">
                                                <input type="number" v-model="Miembro.telefono" placeholder="Telefono" class="input is-normal">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <a class="tag is-success is-medium" v-on:click="AddRow(Miembro, Miembros)">Agregar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  v-for="m, index in Miembros">
                            <div class="columns colorcolumn">
                                <div class="column">
                                    <div class="field">
                                        <div class="control">
                                            <input type="text" v-model="m.nombre" placeholder="Nombre Completo" class="input is-normal">
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="field">
                                        <div class="control">
                                            <input type="text" v-model="m.bautismo" v-mask="'##/##/####'" placeholder="Fecha Bautismo" class="input is-normal">
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="field">
                                        <div class="control">
                                            <input type="text" v-model="m.estadoCivil" placeholder="Estado Civil" class="input is-normal">
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="field">
                                        <div class="control">
                                            <input type="checkbox" v-model="m.espirituSanto"> Espiritu Santo
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="field">
                                        <div class="control">
                                            <input type="text" v-model="m.direccion" placeholder="Direccion" class="input is-normal">
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="field">
                                        <div class="control">
                                            <input type="number" v-model="m.telefono" placeholder="Telefono" class="input is-normal">
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <a class="tag is-danger is-medium" v-on:click="removeRow(index, Miembros)">Quitar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="field is-grouped is-grouped-centered">
                            <div class="control">
                                <input class="button is-primary is-medium" type="submit" value="Enviar">
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div v-bind:class="{modal:true, 'is-active':modalActive}">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <section v-bind:class="['hero is-medium', modalColor]">
                        <div class="hero-body">
                            <div class="container" id="StatusBoard">
                                <h1 id="tStatus" class="title is-1">{{status}}</h1>
                                <h4 id="tMsg" class="subtitle is-4">{{msg}}</h4>
                            </div>
                        </div>
                    </section>
                </div>
                <button class="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Miembro:{},
            Celula:'',
            Lider:{
                nombre:'',
                telefono:'',
                email:'',
                fecha:''
            },
            Asistente:{
                nombre:'',
                tel:'',
                email:'',
                fecha:''
            },
            Planeacion:{
                dia:'',
                hora:'',
                anfitrion:'',
                telAnfitrion:'',
                direccion:'',
                referencia:''
            },
            Alcance:{
                dia:'',
                hora:'',
                anfitrion:'',
                telAnfitrion:'',
                direccion:'',
                referencia:''
            },
            Metas:{
                planeacion:'',
                miercoles:'',
                alcance:'',
                amigosR:'',
                domingo:'',
                amigosA:'',
                amigosF:'',
                amigosE:'',
                bautismos:''
            },
            Miembros:[],
            modalActive: false,
            modalColor: 'is-warning',
            status: "Enviando Reporte...",
            msg: "Espere por favor"
        }
    },
    methods:{
        SendEmail: function() {
            this.fillList();
            var vm = this;
            emailjs.send("rcm1ens_gmail_com", "formato_template", {
                    Celula: this.Celula,
                    Lider: this.Lider,
                    Asis: this.Asistente,
                    Plan: this.Planeacion,
                    Alc: this.Alcance,
                    Metas: this.Metas,
                    Miembros: this.Miembros
                })
                .then(function(response) { console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                        vm.MailSent()
                    }, function(err) { console.log("FAILED. error=", err);
                        vm.MailFail()
                });
            this.ShowModal();
        },
        AddRow: function(m, list) {
            list.push({nombre: m.nombre, bautismo: m.bautismo, estadoCivil: m.estadoCivil, espirituSanto: m.espirituSanto, direccion: m.direccion, telefono: m.telefono});
            this.clearMiembro()
        },
        removeRow: function(row, list) {
            Vue.delete(list, row);
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
        clearMiembro: function(){
            this.Miembro.nombre = '';
            this.Miembro.nombre = '';
            this.Miembro.bautismo = '';
            this.Miembro.estadoCivil = '';
            this.Miembro.espirituSanto = false;
            this.Miembro.direccion = '';
            this.Miembro.telefono = '';
        }
    }
};
</script>

<style scoped>
.colorcolumn {
    background: #f2f2f2;
    border-radius: 3px;
    margin-bottom: 15px;
}
</style>