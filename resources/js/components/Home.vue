<template>
    <!-- SECCION DE MENU -->
    <nav class="navbar navbar-expand-md bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">
                <i class="fa-solid fa-compass" style="color: #fe6261;"></i>
                emprenD
                <!-- <h1><i class="fa-solid fa-compass" style="color: #fe6261;"></i> emprenD</h1> -->
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav nav-pills flex-column flex-sm-row" style="min-width: 100%;">
                    
                    <li class="nav-item">
                        <a class="nav-link" style="color: #fe6261;">Inicio</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" style="color: #fe6261;">Nosotros</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" style="color: #fe6261;">Servicio</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" style="color: #fe6261;">Características</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" style="color: #fe6261;">Equipo</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" style="color: #fe6261;">Contacto</a>
                    </li>

                    <!-- <li class="nav-item">
                        <router-link exact-active-class="active" class="nav-link" to="/intraNet">Login</router-link>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
    
    <!-- CONTENIDO DE LA PAGINA  -->
    <div class="container-fluid">    
        <!-- SECCION TITULO -->
        <div class="row">
            <div class="col-sm" style="margin: 0; padding: 0;">
                <img src="../../img/oficina1.png" class="img-fluid" style="min-width: 100%; height: 645px;">
            </div>
            <div class="col-sm" style="position: absolute; min-width: 100%; height: 645px; background-color: #333333; opacity: 80%;"></div>
            <div class="col-sm" style="min-width: 100%; height: 645px; position: absolute; color: white;">
                <center style="margin-top: 20%;">
                    <h1>¿TE GUSTA EMPRENDER?</h1>
                    <hr style="color: #fe6261; width: 50%; border-width: 3px;" class="border-3 opacity-75">
                    <p>Nosotros te ayudamos a hacerlo</p>
                </center>
            </div>
        </div>

        <!-- SECCION DE NOSOTROS -->
        <div class="row" style="background-color: #efefef;">
            <div class="col-sm" style="padding: 6% 4%;">
                <h1>Nosotros</h1>
                <hr style="color: #fe6261; border-width: 3px;" class="border-3 opacity-75">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.</p>
                <button type="button" class="btn" style="background-color: #fe6261; color: white;">
                    <i class="fa-solid fa-arrow-right"></i> Soy un botón
                </button>
            </div>
            <div class="col-sm">
                <img src="../../img/oficina2.jpg" class="img-fluid" style="min-width: 100%;">
            </div>
        </div>

        <!-- SECCION DE SERVICIOS -->
        <div class="row">
            <div class="col-sm" style="padding: 6% 4%;">
                <div class="row">
                    <div class="col-sm">
                        <h1>Servicios</h1>
                        <hr style="color: #fe6261; border-width: 3px;" class="border-3 opacity-75">
                    </div>
                    <div class="col-sm"></div>
                </div><br>

                <div class="row">
                    <div class="col-sm">
                        <center><h1><i class="fa-solid fa-laptop" style="color: #fe6261;"></i></h1></center>
                        <p class="text-center">Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum</p>
                    </div>
                    <div class="col-sm">
                        <center><h1><i class="fa-solid fa-keyboard" style="color: #fe6261;"></i></h1></center>
                        <p class="text-center">Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum</p>
                    </div>
                    <div class="col-sm">
                        <center><h1><i class="fa-solid fa-folder-open" style="color: #fe6261;"></i></h1></center>
                        <p class="text-center">Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum</p>
                    </div>
                    <div class="col-sm">
                        <center><h1><i class="fa-regular fa-calendar" style="color: #fe6261;"></i></h1></center>
                        <p class="text-center">Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum</p>
                    </div>
                    <div class="col-sm">
                        <center><h1><i class="fa-solid fa-tv" style="color: #fe6261;"></i></h1></center>
                        <p class="text-center">Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum</p>
                    </div>
                    <div class="col-sm">
                        <center><h1><i class="fa-solid fa-floppy-disk" style="color: #fe6261;"></i></h1></center>
                        <p class="text-center">Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- SECCION DE CARACTERISTICAS -->
        <div class="row" style="background-color: #efefef;">
            <div class="col-sm" style="padding: 6% 4%;">
                <div class="row">
                    <div class="col-sm">
                        <h1>Características</h1>
                        <hr style="color: #fe6261; border-width: 3px;" class="border-3 opacity-75">
                    </div>
                    <div class="col-sm"></div>
                </div><br>

                <div class="row">
                    <div class="col-sm">
                        <div class="row">
                            <div class="col-sm-2">
                                <h1><i class="fa-solid fa-music" style="color: #fe6261;"></i></h1>
                            </div>
                            <div class="col-sm">
                                <h3 style="color: #fe6261;">Lorem ipsum</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                    dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-2">
                                <h1><i class="fa-regular fa-money-bill-1" style="color: #fe6261;"></i></h1>
                            </div>
                            <div class="col-sm">
                                <h3 style="color: #fe6261;">Lorem ipsum</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                    dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-2">
                                <h1><i class="fa-solid fa-folder-open" style="color: #fe6261;"></i></h1>
                            </div>
                            <div class="col-sm">
                                <h3 style="color: #fe6261;">Lorem ipsum</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                    dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <img class="img-fluid" src="../../img/ejemploImg.png" style="min-width: 100%;">
                    </div>
                </div>
            </div>
        </div>

        <!-- SECCION DE NUESTRO EQUIPO -->
        <div style="padding: 6% 4%;">
            <div class="row">
                <div class="col-sm">
                    <h1>Nuestro equipo de trabajo</h1>
                    <hr style="color: #fe6261; border-width: 3px;" class="border-3 opacity-75">
                </div>
                <div class="col-sm"></div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-sm" style="margin: 0; padding: 0;">
                    <div class="card" style="width: 90%; height: 100%; padding-top: 5%; background-color: #efefef;">
                        <center>
                            <img src="../../img/perfil1.jpg" class="card-img-top img-fluid" style="border-radius: 50%; width: 300px; height: 300px;">
                            <div class="card-body">
                                <h5>Rodrigo Alonso Herrera Aspra</h5>
                            </div>
                            <div class="card-body">
                                Some quick example text to build on the card title and make up the bulk of the card's 
                                content.
                            </div>
                            <div class="card-body" style="font-size: 40px;">
                                <div class="row">
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-twitter-square"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-facebook-square"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-linkedin"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-solid fa-envelope"></i></div>
                                </div>
                                <div class="row">
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-google-plus-square"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-youtube"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-pinterest-square"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-tumblr-square"></i></div>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>

                <div class="col-sm" style="margin: 0; padding: 0;">
                    <div class="card" style="width: 90%; height: 100%; padding-top: 5%; background-color: #efefef;">
                        <center>
                            <img src="../../img/perfil2.jpg" class="card-img-top img-fluid" style="border-radius: 50%; width: 300px; height: 300px;">
                            <div class="card-body">
                                <h5>Arturo Elías Ayud</h5>
                            </div>
                            <div class="card-body">
                                Some quick example text to build on the card title and make up the bulk of the card's 
                                content.
                            </div>
                            <div class="card-body" style="font-size: 40px;">
                                <div class="row">
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-twitter-square"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-facebook-square"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-linkedin"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-solid fa-envelope"></i></div>
                                </div>
                                <div class="row">
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-google-plus-square"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-youtube"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-pinterest-square"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-tumblr-square"></i></div>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>

                <div class="col-sm" style="margin: 0; padding: 0;">
                    <div class="card" style="width: 90%; height: 100%; padding-top: 5%; background-color: #efefef;">
                        <center>
                            <img src="../../img/perfil3.jpg" class="card-img-top img-fluid" style="border-radius: 50%; width: 300px; height: 300px;">
                            <div class="card-body">
                                <h5>Carlos Bremer</h5>
                            </div>
                            <div class="card-body">
                                Some quick example text to build on the card title and make up the bulk of the card's 
                                content.
                            </div>
                            <div class="card-body" style="font-size: 40px;">
                                <div class="row">
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-twitter-square"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-facebook-square"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-linkedin"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-solid fa-envelope"></i></div>
                                </div>
                                <div class="row">
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-google-plus-square"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-youtube"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-pinterest-square"></i></div>
                                    <div class="col-sm" style="padding: 0;"><i class="fa-brands fa-tumblr-square"></i></div>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>

        <!-- SECCION DE CONTACTO -->
        <div class="row">
            <div class="col-sm" style="padding: 6% 4%; background-color: #efefef;">
                <div class="row">
                    <div class="col-sm">
                        <h1>Contacto</h1>
                        <hr style="color: #fe6261; border-width: 3px;" class="border-3 opacity-75">
                    </div>
                    <div class="col-sm"></div>
                </div><br>

                <div class="row">
                    <div class="col-sm" style="padding-right: 5%;"><br>
                        <h1>Escríbenos</h1>
                        <p style="color: #fe6261;">Lorem ipsum lorem lorem ipsum bacon ipsum</p>

                        <div class="row">
                            <div class="col-sm-1"><i class="fa-solid fa-user" style="color: #fe6261;"></i></div>
                            <div class="col-sm">
                                <input type="text" class="form-control" placeholder="Nombre">
                            </div>
                        </div><br>

                        <div class="row">
                            <div class="col-sm-1"><i class="fa-solid fa-envelope" style="color: #fe6261;"></i></div>
                            <div class="col-sm">
                                <input type="text" class="form-control" placeholder="Correo Electrónico">
                            </div>
                        </div><br>

                        <div class="row">
                            <div class="col-sm-1"><i class="fa-solid fa-phone" style="color: #fe6261;"></i></div>
                            <div class="col-sm">
                                <input type="text" class="form-control" placeholder="Teléfono">
                            </div>
                        </div><br>

                        <div class="row">
                            <div class="col-sm-1"><i class="fa-regular fa-calendar-days" style="color: #fe6261;"></i></div>
                            <div class="col-sm">
                                <input type="date" class="form-control" placeholder="Elegir fecha">
                            </div>
                        </div><br>

                        <div class="row">
                            <div class="col-sm-1"><i class="fa-regular fa-comments" style="color: #fe6261;"></i></div>
                            <div class="col-sm">
                                <textarea class="form-control" rows="3" placeholder="Mensaje"></textarea>
                            </div>
                        </div><br>

                        <div class="row">
                            <div class="col-sm">
                                <button class="btn btn-lg" type="button" style="background-color: #fe6261; color: white; float: right;">
                                    Enviar <i class="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm" style="background-color: #333333; color: white; padding: 2%;">
                        <center><img src="../../img/googleMaps.png" style="width: 100%;"></center>
                        
                        <h1>Ubicacón</h1>
                        <hr style="color: #fe6261; border-width: 3px;" class="border-3 opacity-75">
                        <div class="row" style="justify-content: center;">
                            <div class="col-sm-2">
                                <center><h4><i class="fa-solid fa-phone" style="color: #fe6261;"></i></h4></center>
                            </div>
                            <div class="col-sm">
                                <p>33 1234 5678</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-2">
                                <center><h4><i class="fa-solid fa-envelope" style="color: #fe6261;"></i></h4></center>
                            </div>
                            <div class="col-sm">
                                <p>info@emprend.com</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-2">
                                <center><h4><i class="fa-solid fa-location-dot" style="color: #fe6261;"></i></h4></center>
                            </div>
                            <div class="col-sm">
                                <p style="margin: 0; padding: 0;">Nostrud exerci tation ullamcoper</p>
                                <p>Nostrud exerci tation ullamcoper</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- SECCION DE FOODER -->
        <div class="row">
            <div class="col-sm" style="padding: 3% 1% 0 1%; background-color: #333333; color: white;">
                
                <div class="row">
                    <div class="col-sm">
                        <center style="font-size: 50px;">
                            <i class="fa-solid fa-compass" style="color: #fe6261;"></i> emprenD
                            <hr style="width: 50%; color: #fe6261; border-width: 3px;" class="border-3 opacity-75">
                        </center>
                    </div>
                </div>
                
                <div class="row" style="text-align: center; align-items: center;">
                    <div class="col-sm">
                        <i class="fa-solid fa-phone" style="color: #fe6261; float: right; font-size: 40px;"></i>
                    </div>
                    <div class="col-sm">
                        <div class="row">
                            Teléfono:
                        </div>
                        <div class="row">
                            (33)1234 5678
                        </div>
                    </div>

                    <div class="col-sm">
                        <div class="row">
                            <p style="margin: 0; padding: 0;">Aceptamos</p>
                        </div>
                        <div class="row">
                            <div class="col-sm" style="margin: 0; padding: 0;">
                                <i class="fa-brands fa-cc-visa"></i>
                            </div>
                            <div class="col-sm" style="margin: 0; padding: 0;">
                                <i class="fa-brands fa-cc-mastercard"></i>
                            </div>
                            <div class="col-sm" style="margin: 0; padding: 0;">
                                <i class="fa-brands fa-cc-discover"></i>
                            </div>
                            <div class="col-sm" style="margin: 0; padding: 0;">
                                <i class="fa-brands fa-cc-discover"></i>
                            </div>
                            <div class="col-sm" style="margin: 0; padding: 0;">
                                <i class="fa-brands fa-cc-amex"></i>
                            </div>
                            <div class="col-sm" style="margin: 0; padding: 0;">
                                <i class="fa-brands fa-cc-paypal"></i>
                            </div>
                            <div class="col-sm" style="margin: 0; padding: 0;">
                                <i class="fa-brands fa-cc-stripe"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm">
                        <i class="fa-solid fa-envelope" style="color: #fe6261; float: right; font-size: 40px;"></i>
                    </div>
                    <div class="col-sm">
                        <div class="row">
                            Contacto:
                        </div>
                        <div class="row">
                            info@emprend.com
                        </div>
                    </div>
                </div><br>

                <div class="row" style="background-color: #fe6261;">
                    <div class="col-sm" style="text-align: center;">
                        <p>NEUBOX 2022 © - Derechos Reservados</p>
                    </div>

                    <div class="col-sm" style="align-items: center; text-align: center;">
                        <div class="row">
                            <div class="col-sm">
                                <i class="fa-brands fa-twitter-square"></i>
                            </div>
                            <div class="col-sm">
                                <i class="fa-brands fa-facebook-square"></i>
                            </div>
                            <div class="col-sm">
                                <i class="fa-brands fa-linkedin"></i>
                            </div>
                            <div class="col-sm">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div class="col-sm">
                                <i class="fa-brands fa-google-plus-square"></i>
                            </div>
                            <div class="col-sm">
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                            <div class="col-sm">
                                <i class="fa-brands fa-pinterest-square"></i>
                            </div>
                            <div class="col-sm" style="margin: 0;padding: 0;">
                                <i class="fa-brands fa-tumblr-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>

    </div>
</template>