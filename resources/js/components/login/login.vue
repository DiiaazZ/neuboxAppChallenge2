<template>
    <div class="container-fluid" style="background-color: #333333; color: #efeeef; min-height: 900px;">
        <br>
        <!-- SECCION DEL LOGOTIPO -->
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <center>
                    <h1><i class="fa-solid fa-compass" style="color: #fe6261;"></i> emprenD</h1>
                </center>
            </div>
            <div class="col-sm"></div>
        </div>

        <!-- SECCION DE FORMULARIO LOGIN -->
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <label style="float: right;">Usuario</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-sm"></div>
        </div><br>

        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <label style="float: right;">Contraseña</label>
                <input type="text" class="form-control">
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
                    <div class="col-sm">
                        <router-link to="/intranet/comment">
                            <button type="button" class="btn" style="float: right; background-color: #fe6261; color: white;">Entrar <i class="fa-solid fa-arrow-right"></i></button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-sm"></div>
        </div>
    </div>
</template>

<!-- <div class="row">
    <div class="col-sm">
        <router-link to="/intranet/register">Registrar nuevo usuario</router-link>
    </div>
    <div class="col-sm">
        <router-link to="/intranet/resetPass">Restaurar contraseña</router-link>
    </div>
    <div class="col-sm">
        <router-link to="/intranet/comment">Prueba Comments</router-link>
    </div>
</div> -->