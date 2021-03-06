Vue.component('app-modal', {
    template:
        `<div v-bind:class="['modal', modalActive]">
            <div class="modal-background"></div>
            <div class="modal-content">
                <section v-bind:class="['hero is-medium', modalColor]">
                    <div class="hero-body">
                        <div class="container" id="StatusBoard">
                            <div v-bind:class="{loaderIcon: spin}"></div>
                            <h1 class="title is-1">{{status}}</h1>
                            <h4 class="subtitle is-4">{{msg}}</h4>
                        </div>
                    </div>
                </section>
            </div>
            <button v-on:click="CloseModal" class="modal-close is-large" aria-label="close"></button>
        </div>`
    ,
    data:function(){
        return {
            modalActive: '',
            modalColor: 'is-warning',
            status: 'Enviando Reporte...',
            msg: 'Espere por favor',
            sent: false,
            spin:true
        }
    },
    methods: {
        MailFail: function(msg) {
            this.status = 'Envío Fallido';
            this.msg = msg;
            this.modalColor = 'is-danger';
            console.log(msg);
            this.spin = false;
        },
        MailSent: function() {
            this.status = 'Reporte Enviado!';
            this.msg = 'Gracias por cumplir a tiempo, Dios te bendiga!';
            this.modalColor = 'is-primary';
            this.sent = true;
            this.spin = false;
        },
        CloseModal: function(){
            this.modalActive = '';
            this.status = 'Enviando Reporte...';
            this.msg = 'Espere por favor';
            this.modalColor = 'is-warning';
            if(this.sent){ location.reload(); }
        },
        Start(){
            this.modalActive = 'is-active';
        }
    }
})