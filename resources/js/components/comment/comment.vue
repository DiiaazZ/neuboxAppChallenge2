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
                    <label>Nombre usuario</label>
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
                                    <a class="dropdown-item" href="#">Cerrar Sesión</a>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </div>
            </div>
        </div>
    </nav>

    <div class="container-fluid" style="background-color: #efefef; padding-left: 5%; padding-right: 15%; padding-bottom: 15%;">
        <br>
        <!-- SECCION DE FORMULARIO PARA RGISTRAR NUEVA IDA -->
        <div class="row">
            <div class="col-sm-12">
                <h2>COMPARTE TU IDEA</h2>
            </div>
            <div class="col-sm-5"><hr style="color: #fe6261;"></div>
        </div>
        <div class="row">
            <div class="col-sm">
                <textarea cols="120" rows="5"></textarea>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-sm">
                <button type="button" class="btn" style="color: white; background-color: #fe6261; float: right;">
                    Compartir <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
        <br><br>
        <!-- SECCION - LISTA DE LAS ULTIMAS 10 IDEAS  -->
        <div class="row" style="background-color: #333333; color: white; padding: 2%;">
            <div class="row">
                <div class="col-sm-1">
                    <h1 style="font-size: 50px; color: #fe6261;"><i class="fa-solid fa-circle-user"></i></h1>
                </div>
                <div class="col-sm" style="background-color: white; color: #333333; padding: 1%;">
                    <p>
                        Mi idea es una “Cámara Verrgua”, te la pegas en la cara y puedes estar grabando todo
                        sin que tengas que estar agarrando un teléfono, cámara, etc. Sería ideal para los
                        conciertos y/ o eventos públicos así puedes disfrutar del concierto y estar grabando
                        sin tener que estar con tu teléfono todo el tiempo. Si no también podría servir para
                        espionaje.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <p style="float: right;">20/2/20 Eduviges Arteaga</p>
                </div>
            </div>
        </div>
    </div>
</template>