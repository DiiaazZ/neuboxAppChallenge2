<template>
    <div class="container-fluid" style="background-color: #333333; color: #efeeef; min-height: 900px;"><br>
        <!-- SECCION - LOGOTIPO-->
        <div class="row">
            <div class="col-sm">
                <center>
                    <router-link to="/intranet" style="color: white; text-decoration: none;">
                        <h1><i class="fa-solid fa-compass" style="color: #fe6261;"></i> emprenD</h1>
                    </router-link>
                </center>
            </div>
        </div><br>

        <!-- SECCION - TITULO -->
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <h3>Registrar Nuevo Usuario</h3>
                <hr style="color: #fe6261;">
            </div>
            <div class="col-sm"></div>
        </div>

        <!-- SECCION - FORMULARIO REGISTRAR NUEVO USUARIO -->
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <label style="float: right;">Nombre: </label>
                <input type="text" class="form-control">
            </div>
            <div class="col-sm"></div>
        </div><br>

        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <div class="row">
                    <div class="col-sm">
                        <label style="float: right;">Email:</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-sm">
                        <label style="float: right;">Confirmar Email:</label>
                        <input type="text" class="form-control">
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
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-sm">
                        <label style="float: right;">Confirmar Contraseña:</label>
                        <input type="text" class="form-control">
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
                    <div class="col-sm">
                        <button type="button" class="btn" style="float: right; background-color: #fe6261; color: white;">Registrar <i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-sm"></div>
        </div>
    </div>
</template>