<template>
    <div class="hero-body">
        <div class="container">

            <div class="notification is-primary">
                <h1 class="title is-h1 has-text-centered">DATOS GENERALES DE CELULA</h1>
            </div>

            <form v-on:submit="SendEmail">
                <div class="columns">
                    <div class="column">
                        <p class="title is-3">Datos Generales</p>
                        <div class="field">
                        <p class="subtitle is-5">Celula</p>
                            <div class="control has-icons-left">
                                <input class="input is-medium" type="number" v-model="celula" placeholder="Numero" oninvalid="this.setCustomValidity('Campos Obligatorios')"
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
                        <p class="subtitle is-5">Lider</p>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Nombre completo" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Telefono" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-phone"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Email" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Fecha de Nacimiento" oninvalid="this.setCustomValidity('Campos Obligatorios')"
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
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="asistente" type="text" placeholder="Nombre completo" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="far fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Telefono" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-phone"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Email" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Fecha de Nacimiento" oninvalid="this.setCustomValidity('Campos Obligatorios')"
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
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Dia de Reunion" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-calendar-check"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Hora" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-clock"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Anfitrion" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="far fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Tel Anfitrion" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-phone"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Direccion" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-map-marker"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Referencia" oninvalid="this.setCustomValidity('Campos Obligatorios')"
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
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Dia de Reunion" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-calendar-check"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Hora" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-clock"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Anfitrion" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="far fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Tel Anfitrion" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-phone"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Direccion" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-map-marker"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="text" placeholder="Referencia" oninvalid="this.setCustomValidity('Campos Obligatorios')"
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
                        <p class="title is-3 is-spaced">Metas</p>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="number" placeholder="Planeación" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="number" placeholder="Culto Miercoles" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="number" placeholder="Reunion de Alcanze" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="number" placeholder="Amigos en Reunión" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="number" placeholder="Culto Domingo" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="number" placeholder="Amigos Anotados" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="number" placeholder="Amigos a Fiesta" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="number" placeholder="Amigos a Encuentro" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input class="input is-medium" v-model="lider" type="number" placeholder="Bautismos" oninvalid="this.setCustomValidity('Campos Obligatorios')"
                                    oninput="setCustomValidity('')" required>
                                <span class="icon is-small is-left">
                                    <i class="fab fa-slack-hash"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="column is-9">
                        <dv class="columns">
                            <div class="column">     
                                <div class="field">
                                    <div class="control">
                                        <span class="title is-spaced">Miembros </span><a class="button is-success" v-on:click="AddRow(bautizados, bauRows)">Agregar</a>
                                    </div>
                                </div>
                            </div>
                        </dv>
                        <dv class="columns colorcolumn">
                            <div class="column">
                                Nombre
                                <div class="field">
                                    <div class="control">
                                        <input type="text" class="input is-small">
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                Fecha Bautismo
                                <div class="field">
                                    <div class="control">
                                        <input type="text" class="input is-small">
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                Estado Civil
                                <div class="field">
                                    <div class="control">
                                        <input type="text" class="input is-small">
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                Bautismo Espiritu
                                <div class="field">
                                    <div class="control">
                                        <input type="checkbox">
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                Direccion
                                <div class="field">
                                    <div class="control">
                                        <input type="text" class="input is-small">
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                Telefono
                                <div class="field">
                                    <div class="control">
                                        <input type="number" class="input is-small">
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <p>&nbsp;</p>
                                <a class="tag is-danger">Quitar</a>
                            </div>
                        </dv>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="field is-grouped is-grouped-centered">
                            <div class="control">
                                <input class="button is-primary is-medium" type="submit" value="Enviar" :disabled="total == 0">
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bautizados:''
        }
    },
    method:{

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