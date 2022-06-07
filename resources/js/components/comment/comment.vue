<template>
    <!-- BARRA DE MENU -->
    <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
            <h3><i class="fa-solid fa-compass" style="color: #fe6261;"></i> emprenD</h3>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="background-color: aqua;"></ul>

                <div class="d-flex" style="background-color: #fe6261; color: white; width: 40%; padding: 0.5%;">
                    <label>{{ nombre }}</label>
                    <!-- <router-link to="/intranet" style="margin-left: auto; color: white;">
                        <button type="button" class="btn btn-sm"><i class="fa-solid fa-right-from-bracket"></i></button>
                    </router-link> -->

                    <li class="nav-item dropdown" style="margin-left: auto; max-width: 100%;">
                        <a class="nav-link dropdown-toggle" id="dropdownUserMenu" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                            <i class="fa-regular fa-circle-user"></i>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownUserMenu">
                            <li>
                                <router-link to="/intranet">
                                    <a class="dropdown-item">Cerrar Sesión</a>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </div>
            </div>
        </div>
    </nav>

    <div class="container-fluid" v style="background-color: #efefef; padding-left: 5%; padding-right: 15%; padding-bottom: 15%;">
        <br>
        <!-- SECCION DE FORMULARIO PARA RGISTRAR NUEVA IDA -->
        <div class="row">
            <div class="col-sm-12">
                <h2>COMPARTE TU IDEA</h2>
            </div>
            <div class="col-sm-5">
                <hr style="color: #fe6261; border-width: 3px;" class="border-3 opacity-75">
            </div>
            
        </div>
        <div class="row">
            <div class="col-sm">
                <textarea cols="120" rows="5" v-model="formNuevaIdea.comentario"></textarea>
                <label class="inputError" :style="errorComentario">Este campo no debe quedar vacío</label>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-sm" :style="btnCompartir">
                <button type="button" class="btnRojoDerecha" style="padding: 10px;" @click="registrarComment()">
                    Compartir <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div class="col-sm" :style="btnCargando">
                <button type="button" class="btnRojoDerecha" style="padding: 10px;" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Cargando...
                </button>
            </div>
        </div>
        <br><br>
        
        <!-- SECCION - LISTA DE LAS ULTIMAS 10 IDEAS  -->
        <div class="row" style="background-color: #333333; color: white; padding: 2%;">
            <div class="row" :style="divCargandoListaComents">
                <div class="col-sm">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Cargando...
                </div>
            </div>

            <div v-for="comment in comments" :key="id" :style="divListaComents">
                <div class="row">
                    <div class="col-sm-1">
                        <h1 style="font-size: 50px; color: #fe6261;"><i class="fa-solid fa-circle-user"></i></h1>
                    </div>
                    <div class="col-sm" style="background-color: white; color: #333333; padding: 1%;">
                        <p>{{ comment.body }}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p style="float: right;">{{ comment.created_at }} - {{ comment.user_id }}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import { api_config } from '../../config';
    
    export default{
        data(){
            return{
                nombre: this.$route.params.name,
                id: this.$route.params.id,
                comments:[],
                formNuevaIdea: {
                    comentario: ''
                },
                btnCompartir: '',
                btnCargando: 'display: none;',
                errorComentario: 'display: none;',
                divCargandoListaComents: '',
                divListaComents: 'display: none;',
            }
        },
        mounted(){
            this.mostrarComments()
        },
        methods:{
            // LISTA DE FUNCIONES
            async mostrarComments(){
                this.divCargandoListaComents = '';
                this.divListaComents = 'display: none;';

                let config = {
                    headers:{
                        Authorization: 'Bearer '+this.$route.params.api
                    }
                };
                let numPage = new Array;
                let commentsList = new Array;
                let commentsData = new Array;

                // OBTENER LISTA DE TODOS LOS COMENTARIOS 
                await this.axios.get(api_config.url + api_config.comments.get, config)
                    .then(response => {
                        let urlPages = response['data']['links']['last'];
                        numPage = urlPages.split('=');
                    })
                    .catch(error => {
                        console.dir(error);
                    });

                // CICLO PARA ALMACENAR TODOS LOS DATA DE TODAS LAS PAGINAS
                for(var i = 1; i <= numPage[1]; i++){
                    // OBTENER LA ULTIMA LISTA O PAGINA DE COMENTARIOS
                    await this.axios.get(numPage[0]+'='+i, config)
                        .then(response => {
                            commentsList.push(response['data']['data']);
                        })
                        .catch(error => {
                            console.dir(error);
                        });
                }

                // CICLO PARA EXTRAER LOS OBJETOS DEL ARREGLO GENERAL
                for(var x = 0; x < numPage[1]; x++){
                    for(var y = 0; y < commentsList[0].length; y++){
                        commentsData.push(commentsList[x][y]);
                    }
                }
                
                // ORDENAR ARRAY DE OBJETOS POR SU ID - MAYOR A MENOR
                commentsData.sort(((a,b) => b.id - a.id));
                this.comments = commentsData.slice(0, 10);
                
                // RECORRER EL OBJETO PARA MODIFICAR EL FORMATO DE LA FECHA Y REEMPLAZAR EL ID POR NOMBRE DE USUARIO
                this.comments.forEach(datos => {
                    this.axios.get(api_config.url + api_config.get_user + datos.user_id, config)
                        .then(response => {
                            datos.user_id = response['data']['data']['name'];
                        })
                        .catch(error => {
                            console.dir(error);
                        });
                    var date = new Date(datos.created_at);
                    datos.created_at = date.getDate()+'/'+date.getDay()+'/'+date.getFullYear();
                });

                this.divCargandoListaComents = 'display: none;';
                this.divListaComents = '';
            },
            async registrarComment(){
                if(this.formNuevaIdea.comentario != ''){
                    this.errorComentario = 'display: none;';

                    // MOSTRAR CARGANDO
                    this.btnCompartir = 'display: none;';
                    this.btnCargando = '';

                    let config = {
                        headers:{
                            Authorization: 'Bearer '+this.$route.params.api
                        }
                    };
                    let data = {
                        body: this.formNuevaIdea.comentario
                    };

                    await this.axios.post(api_config.url + api_config.comments.post, data, config)
                        .then(response => {
                            if(response.status == 201){
                                this.mostrarComments();

                                // LIMPIAR NUEVA IDEA Y OCULTAR CARGANDO
                                this.formNuevaIdea.comentario = '';
                                this.btnCompartir = '';
                                this.btnCargando = 'display: none;';

                                // MOSTRAR SWEET ALERT DE CONFIRMACION
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: `Idea Registrada Correctamente.`,
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }else{
                                this.mensajeDefault();
                            }
                        })
                        .catch(error => {
                            console.dir(error);
                            this.mensajeDefault();

                            // OCULTAR CARGANDO
                            this.btnCompartir = '';
                            this.btnCargando = 'display: none;';
                        });
                }else{
                    this.errorComentario = '';
                }
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