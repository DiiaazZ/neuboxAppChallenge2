<template>
    <div class="container-fluid" style="background-color: #333333; color: #efeeef; min-height: 900px;">
        <br>
        <!-- SECCION DEL LOGOTIPO -->
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <center>
                    <h1><i class="fa-solid fa-compass textNaranja"></i> emprenD</h1>
                </center>
            </div>
            <div class="col-sm"></div>
        </div>

        <!-- SECCION DE FORMULARIO LOGIN -->
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <label style="float: right;">Usuario</label>
                <input type="text" class="form-control" v-model="login.usuario" maxlength="255">
                <label class="inputError" :style="errorUsuario">Este campo no debe quedar vacío</label>
            </div>
            <div class="col-sm"></div>
        </div><br>

        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <label style="float: right;">Contraseña</label>
                <input type="text" class="form-control" v-model="login.contraseña">
                <label class="inputError" :style="errorContraseña">Este campo no debe quedar vacío</label>
            </div>
            <div class="col-sm"></div>
        </div><br>

        <!-- SECCION DE BOTON INCIAR SESION Y OPCION NUEVO REGISTRO -->
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <div class="row">
                    <div class="col-sm">
                        No tienes cuenta? <router-link to="/intranet/register">Registrar</router-link>
                    </div>
                    <div class="col-sm" :style="btnLoguear">
                        <button type="button" class="btnRojoDerecha" @click="validarLogin()">Entrar <i class="fa-solid fa-arrow-right"></i></button>
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
    import axios from 'axios';
    import { url_api } from '../../config';

    export default{
        data(){
            return{
                login: {
                    usuario: '',
                    contraseña: ''
                },
                errorUsuario: 'display: none;',
                errorContraseña: 'display: none;',
                btnCargando: 'display: none;',
                btnLoguear: '',
            }
        },
        methods:{
            // LISTA DE FUNCIONES
            validarLogin(){
                var contadorValidacion = 0;
                // VALIDACION CAMPO USUARIO
                if(this.login.usuario){
                    this.errorUsuario = 'display: none;';
                    contadorValidacion++;
                }else{
                    this.errorUsuario = '';
                }
                // VALIDACION CAMPO CONTRASEÑA
                if(this.login.contraseña){
                    this.errorContraseña = 'display: none;';
                    contadorValidacion++;
                }else{
                    this.errorContraseña = '';
                }

                (contadorValidacion === 2) ? this.loguear() : '';
            },
            loguear(){
                this.btnCargando = '';
                this.btnLoguear = 'display: none';

                let parametros = {
                    email: this.login.usuario, 
                    password: this.login.contraseña,
                };

                // ENVIAR SOLICITUD A LA API
                axios.post(url_api+'/api/login', parametros)
                    .then(response => {
                        console.dir(response);

                        if(response['status'] == '200'){
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: `Bienvenido ${response['data']['data']['name']}.`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                            this.$router.push(`/intranet/comment?${response['data']['data']['api_token']}`);
                        }else{
                            Swal.fire({
                                position: 'top-end',
                                icon: 'warning',
                                title: response['response']['data']['message'],
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }

                        this.btnCargando = 'display: none;';
                        this.btnLoguear = '';
                    }).catch(error => {
                        console.dir(error);
                        this.btnCargando = 'display: none;';
                        this.btnLoguear = '';

                        Swal.fire({
                            position: 'top-end',
                            icon: 'warning',
                            title: error['response']['data']['message'],
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
            }
        }
    }
</script>