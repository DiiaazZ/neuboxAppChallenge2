<template>
    <div class="container-fluid" style="background-color: #333333; color: #efeeef; min-height: 900px;"><br>
        <!-- SECCION - LOGOTIPO-->
        <div class="row">
            <div class="col-sm">
                <center>
                    <router-link to="/intranet" style="color: white; text-decoration: none;">
                        <h1><i class="fa-solid fa-compass textNaranja" ></i> emprenD</h1>
                    </router-link>
                </center>
            </div>
        </div><br>

        <!-- SECCION - TITULO -->
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <h3>Registrar Nuevo Usuario</h3>
                <hr style="color: #fe6261; border-width: 3px;" class="border-3 opacity-75">
            </div>
            <div class="col-sm"></div>
        </div>

        <!-- SECCION - FORMULARIO REGISTRAR NUEVO USUARIO -->
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <div class="row">
                     <div class="col-sm">
                        <label style="float: right;">Nombre: </label>
                        <input type="text" class="form-control" v-model="usuario.name" maxlength="255">
                        <label class="inputError" :style="errorNombre">Este campo no debe quedar vacío</label>
                    </div>
                    <div class="col-sm">
                        <label style="float: right;">Email:</label>
                        <input type="text" class="form-control" v-model="usuario.email" maxlength="255">
                        <label class="inputError" :style="errorEmail">{{ errorEmailMessage }}</label>
                    </div>
                </div>
            </div>
            <div class="col-sm"></div>
        </div><br>

        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <div class="row">
                    <div class="col-sm">
                        <label style="float: right;">Contraseña:</label>
                        <input type="password" class="form-control" v-model="usuario.password">
                        <label class="inputError" :style="errorPass1">{{ errorPass1Message }}</label>
                    </div>
                    <div class="col-sm">
                        <label style="float: right;">Confirmar Contraseña:</label>
                        <input type="password" class="form-control" v-model="usuario.password_confirmation">
                        <label class="inputError" :style="errorPass2">{{ errorPass2Message }}</label>
                    </div>
                </div>
            </div>
            <div class="col-sm"></div>
        </div><br>
        
        <!-- SECCION BOTONES - INICIAR SESION O REGISTRAR -->
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <div class="row">
                    <div class="col-sm">
                        Ya tienes cuenta? <router-link to="/intranet">Iniciar Sesión</router-link>
                    </div>
                    <div class="col-sm" :style="btnRegistrar">
                        <button type="button" class="btnRojoDerecha" @click="validarFormRegistro()">Registrar <i class="fa-solid fa-plus"></i></button>
                    </div>
                    <div class="col-sm" :style="btnCargando">
                        <button type="button" class="btnRojoDerecha" disabled>
                              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              Cargando...
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-sm"></div>
        </div>
    </div>
</template>
<script>
    import { api_config } from '../../config';

    export default{
        data(){
            return{
                usuario:{
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                errorNombre: 'display: none;',
                errorEmail: 'display: none;',
                errorEmailMessage: 'Este campo no debe quedar vacío.',
                errorPass1: 'display: none;',
                errorPass1Message: 'Este campo no debe quedar vacío.',
                errorPass2: 'display: none;',
                errorPass2Message: 'Este campo no debe quedar vacío.',
                btnCargando: 'display: none;',
                btnRegistrar: ''
            }
        },
        methods:{
            // LISTA DE FUNCIONES
            validarFormRegistro(){
                var validacionContador = 0;

                // VALIDACION CAMPO NOMBRE =============================
                if(this.usuario.name){
                    this.errorNombre = 'display: none;';
                    validacionContador++;
                }else{
                    this.errorNombre = '';
                }

                // VALIDACION CAMPO EMAIL =============================
                if(this.usuario.email){
                    if(/^(([^<>()[ \]\.,;:\s@\"]+(\.[^<>()[ \]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[ \]\.,;:\s@\"]+\.)+[^<>()[ \]\.,;:\s@\"]{2,})$/.test(this.usuario.email)){
                        this.errorEmail = 'display: none;';
                        validacionContador++;
                    }else{
                        this.errorEmailMessage = 'Email inválido.';
                        this.errorEmail = '';
                    }
                }else{
                    this.errorEmailMessage = 'Este campo no debe quedar vacío.';
                    this.errorEmail = '';
                }

                // VALIDACION CAMPO CONTRASEÑA =============================
                if(this.usuario.password){
                    if(this.usuario.password.length > 7){
                        this.errorPass1 = 'display: none;';
                        validacionContador++;
                    }else{
                        this.errorPass1Message = 'Contraseña inválida, La contraseña debe tener al menos 8 caracteres.';
                        this.errorPass1 = '';
                    }
                }else{
                    this.errorPass1Message = 'Este campo no debe quedar vacío.';
                    this.errorPass1 = '';
                }

                // VALIDACION CAMPO CONFIRM CONTRASEÑA =============================
                if(this.usuario.password_confirmation){
                    if(this.usuario.password_confirmation == this.usuario.password){
                        this.errorPass2 = 'display: none;';
                        validacionContador++;
                    }else{
                        this.errorPass2Message = 'Confirmación inválida, La contraseña no es igual.';
                        this.errorPass2 = '';
                    }
                }else{
                    this.errorPass2Message = 'Este campo no debe quedar vacío.';
                    this.errorPass2 = '';
                }

                (validacionContador === 4) ? this.registrarUsuario() : '';
            },
            registrarUsuario(){
                this.btnCargando = '';
                this.btnRegistrar = 'display: none';

                let parametros = {
                    name: this.usuario.name, 
                    email: this.usuario.email,
                    password: this.usuario.password,
                    password_confirmation: this.usuario.password_confirmation
                };

                // ENVIAR SOLICITUD A LA API
                this.axios.post(api_config.url + api_config.post_register, parametros)
                    .then(response => {
                        // console.log(response['data']['data']['api_token']);
                        // console.log(response['status']);
                        if(response['status'] == '201'){
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Registro completado correctamente.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            // this.$router.push(`/intranet/comment?${response['data']['data']['api_token']}`);
                            this.$router.push({name: "Comment", params:{
                                    id: response['data']['data']['id'],
                                    name: response['data']['data']['name'],
                                    api: response['data']['data']['api_token'],
                                }
                            });
                        }else{
                            this.mensajeDefault();
                        }

                        this.btnCargando = 'display: none;';
                        this.btnRegistrar = '';
                    }).catch(error => {
                        console.dir(error);
                        this.btnCargando = 'display: none;';
                        this.btnRegistrar = '';

                        this.mensajeDefault();
                    });
            },
            mensajeDefault(){
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'Solicitud no procesada, vuelve a intentar.',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
</script>