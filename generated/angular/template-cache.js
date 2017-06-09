angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col s12 map\">\n" +
    "        </div>\n" +
    "        <div class=\"col s6 lastnews\">\n" +
    "            <div class=\"col s12 z-depth-2 blocknews\">\n" +
    "                <div class=\"\">\n" +
    "                    <div class=\"col s4\">\n" +
    "                        <img src=\"/img/srilanka.jpg\">\n" +
    "                    </div>\n" +
    "                    <div class=\"\">\n" +
    "                        <div class=\"col s8\">\n" +
    "                            <div class=\"col s4 offset-s8 chip chiplastnews\">\n" +
    "                                <img src=\"/img/profilimg.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "                            </div>\n" +
    "                            <p>I just came back from Sri-Lanka ! Amazing trip ! People are so nice. Beautifull landscapes...</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"card-action\">\n" +
    "                            <a href=\"#\">Wanna read more...</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col s12 z-depth-2 blocknews\">\n" +
    "\n" +
    "                <div class=\"col s4\">\n" +
    "                    <img src=\"/img/canaria.jpg\">\n" +
    "                </div>\n" +
    "                <div class=\"\">\n" +
    "                    <div class=\"col s8\">\n" +
    "                        <div class=\"col s4 offset-s8 chip chiplastnews\">\n" +
    "                            <img src=\"/img/profilimg.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "                        </div>\n" +
    "                        <p>Great surf in Canaria (Fuerte Ventura & Gran Canaria). Also awsome spot for partying ang chilling on the beach</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-action\">\n" +
    "                        <a href=\"#\">Read my report...</a>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col s12 z-depth-2 blocknews\">\n" +
    "                <div class=\"col s4\">\n" +
    "                    <img src=\"http://lorempixel.com/100/190/nature/6\">\n" +
    "                </div>\n" +
    "                <div class=\"\">\n" +
    "                    <div class=\"col s8\">\n" +
    "                        <div class=\"col s4 offset-s8 chip chiplastnews\">\n" +
    "                            <img src=\"/img/profilimg.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "                        </div>\n" +
    "                        <p>I just came back from Sri-Lanka ! Amazing trip ! People are so nice. Beautifull landscapes...</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-action\">\n" +
    "                        <a href=\"#\">Wanna read more...</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s4 blog\">\n" +
    "            <div class=\"col s12 z-depth-2\">\n" +
    "                <div class=\"\">\n" +
    "                    <img src=\"/img/canada.jpg\">\n" +
    "                    <span class=\"cardtitle\">Canada cold but cool !</span>\n" +
    "                </div>\n" +
    "                <div class=\"\">\n" +
    "                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n" +
    "                </div>\n" +
    "                <div class=\"\">\n" +
    "                    <a href=\"#\">Wanna read more...</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s2 newpeople\">\n" +
    "            <h2>Have you ever met :</h2>\n" +
    "            <div class=\"chip rightsuggest\" ng-repeat=\"user in users\" ng-click=\"profilUser(userName)\">\n" +
    "                <img src=\"/img/profilimg.jpg\" alt=\"Contact Person\"> {{user}}\n" +
    "            </div>\n" +
    "            <div class=\"chip rightsuggest\">\n" +
    "                <img src=\"/img/profilimg.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "            </div>\n" +
    "            <div class=\"chip rightsuggest\">\n" +
    "                <img src=\"/img/profilimg.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "            </div>\n" +
    "            <div class=\"chip rightsuggest\">\n" +
    "                <img src=\"/img/profilimg.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "            </div>\n" +
    "            <div class=\"chip rightsuggest\">\n" +
    "                <img src=\"/img/profilimg.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\" back\">\n" +
    "    <div class=\"col s12\">\n" +
    "\n" +
    "        <div class=\"col s6 offset-s6 boxforlog z-depth-2\">\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col s12\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <img src=\"/img/newlogo.svg\" alt=\"\">\n" +
    "                    </div>\n" +
    "                    <h1>Trip-Affinity</h1>\n" +
    "                    <h2 class=\"soustitre\">Because Love is the greatest trip !</h2>\n" +
    "                    <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "                        <div ng-repeat=\"error in errors\">{{error.error}}\n" +
    "                        </div>\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                            <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "                        </div>\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                            <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "                        </div>\n" +
    "                        <button class=\"col s6 offset-s3 btn btn-primary btn-block\" type=\"submit\">Login</button><br>\n" +
    "                        <div class=\"col s12 baseline\" >\n" +
    "                          <a href=\"#!/register\">If you're not registered click here !</a>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "\n" +
    "            <!-- <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button> -->\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <!-- <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Home</a></li>\n" +
    "          </ul> -->\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("anon/register.html",
    "<!-- <div class=\"container back\">\n" +
    "  <div class=\"modalform\">\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "      <h3>Trip-Affinity</h3>\n" +
    "      <h1>pour tenter l'aventure, inscrivez vous...!!</h1>\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "                    <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div> -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\" back\">\n" +
    "    <div class=\"col s12\">\n" +
    "\n" +
    "        <div class=\"col s6 offset-s6 boxforlog z-depth-2\">\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col s12\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <img src=\"/img/newlogo.svg\" alt=\"\">\n" +
    "                    </div>\n" +
    "                    <h1>Trip-Affinity</h1>\n" +
    "                    <h2 class=\"soustitre\">Because Love is the greatest trip !</h2>\n" +
    "                    <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "                        <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                            <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "                        </div>\n" +
    "                                <div class=\"input-group\">\n" +
    "                            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                            <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "                        </div>\n" +
    "                        <button class=\"col s6 offset-s3 btn btn-primary btn-block\" type=\"submit\">Register</button><br>\n" +
    "\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/home.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <div class=\"texttitle\">\n" +
    "        <img class=\"logo\" src=\"/img/newlogo.svg\" alt=\"\">\n" +
    "        <h1>Trip-Affinity</h1>\n" +
    "        <h2 class=\"soustitre\">Because Love is the greatest trip !</h2>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col s12 map\">\n" +
    "    </div>\n" +
    "    <div class=\"col s6 lastnews\">\n" +
    "        <div class=\"bgsubtitle\">\n" +
    "            <h2>Last reports</h2>\n" +
    "        </div>\n" +
    "        <p class=\"subtitle\">These people went to places you would like to go. Read them reports, chat with them and then why not meeting them.</p>\n" +
    "        <div class=\"col s12 z-depth-2 blocknews\">\n" +
    "            <div class=\"\">\n" +
    "                <div class=\"col s4\">\n" +
    "                    <img src=\"/img/srilanka.jpg\">\n" +
    "                </div>\n" +
    "                <div class=\"col s8\">\n" +
    "                    <div class=\"col s4 offset-s8 chip chiplastnews\">\n" +
    "                        <img src=\"/img/manon.png\" alt=\"Contact Person\"> Shanika\n" +
    "                    </div>\n" +
    "                    <p>I just came back from Sri-Lanka ! Amazing trip ! People are so nice. Beautifull landscapes...</p>\n" +
    "                </div>\n" +
    "                <div class=\"card-action\">\n" +
    "                    <a href=\"#\">Wanna read more...</a>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s12 z-depth-2 blocknews\">\n" +
    "\n" +
    "            <div class=\"col s4\">\n" +
    "                <img src=\"/img/canaria.jpg\">\n" +
    "            </div>\n" +
    "            <div class=\"\">\n" +
    "                <div class=\"col s8\">\n" +
    "                    <div class=\"col s4 offset-s8 chip chiplastnews\">\n" +
    "                        <img src=\"/img/cecile.png\" alt=\"Contact Person\"> Lucie\n" +
    "                    </div>\n" +
    "                    <p>Great surf in Canaria (Fuerte Ventura & Gran Canaria). Also awsome spot for partying ang chilling on the beach</p>\n" +
    "                </div>\n" +
    "                <div class=\"card-action\">\n" +
    "                    <a href=\"#\">Read my report...</a>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s12 z-depth-2 blocknews\">\n" +
    "            <div class=\"col s4\">\n" +
    "                <img src=\"/img/canada.jpg\">\n" +
    "            </div>\n" +
    "            <div class=\"col s8\">\n" +
    "                <div class=\"col s4 offset-s8 chip chiplastnews\">\n" +
    "                    <img src=\"/img/cindy.jpg\" alt=\"Contact Person\"> Cindy\n" +
    "                </div>\n" +
    "                <p>Canada cold but cool !</p>\n" +
    "            </div>\n" +
    "            <div class=\"card-action\">\n" +
    "                <a href=\"#\">Wanna read more...</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col s4 blog\">\n" +
    "        <div class=\"bgsubtitle\">\n" +
    "            <h2>Must Match of the day</h2>\n" +
    "        </div>\n" +
    "        <p class=\"subtitle\">You have so much in common with this person... <br> <br></p>\n" +
    "        <div class=\"col s12 z-depth-2\">\n" +
    "            <img class=\"picsprofil\" src=\"/img/tatiana.jpg\">\n" +
    "            <span class=\"cardtitle\">TatianaFromRussia</span>\n" +
    "            <div class=\"\">\n" +
    "                <p>I dream from long time ago to go to France and specialy in \"La Ferté Vidame\" ! I like playing darts and basket-ball and love big surprises...</p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col s3 offset-s9\">\n" +
    "                <i class=\"material-icons\" ng-click=\"goToProfil()\">person</i>\n" +
    "                <i class=\"material-icons\" ng-click=\"openChat()\">message</i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col s2 newpeople\">\n" +
    "        <div class=\"bgsubtitle\">\n" +
    "            <h2>Have you ever met :</h2>\n" +
    "        </div>\n" +
    "        <p class=\"subtitle\">here are the latest registered trippers</p>\n" +
    "        <!-- <div class=\"chip rightsuggest\" ng-repeat=\"user in users\" ng-click=\"profilUser(user)\">\n" +
    "            <img src=\"/img/\" {{user}} \".jpg\" alt=\"Contact Person\"> {{user}}\n" +
    "        </div> -->\n" +
    "        <div class=\"chip rightsuggest\">\n" +
    "            <img src=\"/img/Anna.jpg\" alt=\"Contact Person\"> Anna\n" +
    "        </div>\n" +
    "        <div class=\"chip rightsuggest\">\n" +
    "            <img src=\"/img/Camille.jpg\" alt=\"Contact Person\"> Camille\n" +
    "        </div>\n" +
    "        <div class=\"chip rightsuggest\">\n" +
    "            <img src=\"/img/Coralie.jpg\" alt=\"Contact Person\"> Coralie\n" +
    "        </div>\n" +
    "        <div class=\"chip rightsuggest\">\n" +
    "            <img src=\"/img/Annick.jpg\" alt=\"Contact Person\"> Annick\n" +
    "        </div>\n" +
    "        <div class=\"chip rightsuggest\">\n" +
    "            <img src=\"/img/Cecile.jpg\" alt=\"Contact Person\"> Cecile\n" +
    "        </div>\n" +
    "        <div class=\"chip rightsuggest\">\n" +
    "            <img src=\"/img/Manon.jpg\" alt=\"Contact Person\"> Manon\n" +
    "        </div>\n" +
    "        <div class=\"row\" ng-hide=\"chat\">\n" +
    "            <div class=\"chat z-depth-2 scale-transition\">\n" +
    "                <h3>TatianaFromRussia</h3>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <form class=\"col s12\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"input-field col s12\">\n" +
    "                                <textarea id=\"textarea1\" class=\"materialize-textarea\" ng-model=\"message\"></textarea>\n" +
    "                                <label for=\"textarea1\">Textarea</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                <a class=\"waves-effect  light-blue lighten-3 btn\" ng-click=\"send()\"><i class=\"material-icons left\">send</i>Send</a>\n" +
    "                <a class=\"waves-effect  light-blue lighten-3 btn\" ng-click=\"closeChat()\">X</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/infoPerso.html",
    "<div class=\"back\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"col s6 offset-s6 boxforcomp z-depth-2\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col s6 offset-s3\">\n" +
    "                <div class=\"row\">\n" +
    "                    <img src=\"/img/newlogo.svg\" alt=\"\">\n" +
    "                </div>\n" +
    "                <h1>Trip-Affinity</h1>\n" +
    "                <h2 class=\"soustitre\">Because Love is the greatest trip !</h2>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col s12\">\n" +
    "                        <div class=\"photo\">\n" +
    "\n" +
    "                                <!-- <img class=\"col s4 circle responsive-img\" src=\"/img/manu.jpg\" alt=\"\"> -->\n" +
    "\n" +
    "                            <br><br><br>\n" +
    "\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"input-field col s6\">\n" +
    "                                    <input id=\"first_name\" type=\"text\" class=\"validate\" ng-model=\"prenom\">\n" +
    "                                    <label for=\"first_name\">Name</label>\n" +
    "                                </div>\n" +
    "                                <div class=\"input-field col s6\">\n" +
    "                                    <input id=\"last_name\" type=\"text\" class=\"validate\" ng-model=\"nom\">\n" +
    "                                    <label for=\"last_name\">First name</label>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                              <div class=\"row\">\n" +
    "                                <div class=\"input-field col s6\">\n" +
    "                                    <input id=\"pseudo\" type=\"text\" class=\"validate\" ng-model=\"pseudo\">\n" +
    "                                    <label for=\"pseudo\">Pseudo</label>\n" +
    "                                </div>\n" +
    "                                <div class=\"input-field col 6\">\n" +
    "                                    <md-select placeholder=\"Your sex\" ng-model=\"sexe\">\n" +
    "                                        <md-option ng-repeat=\"sexe in genres\" value=\"{{sexe}}\">{{sexe}}</md-option>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col s12\">\n" +
    "                                  <div class=\"col s12 checkBox question\">\n" +
    "                                      <p class=\"col s4\" ng-repeat=\"type in typeOfTravel\">\n" +
    "                                          <input type=\"checkbox\" id=\"{{type}}\" />\n" +
    "                                          <label for=\"{{type}}\">{{type}}</label>\n" +
    "                                      </p>\n" +
    "                                  </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <button type=\"button\" class=\"col s3 offset-s4 btn btn-default\" ng-click=\"valide()\">OK</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/navbar.html",
    "\n" +
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "\n" +
    "      <ul class=\"right hide-on-med-and-down\">\n" +
    "        <li ui-sref-active=\"active\"><a ui-sref=\"user.home\">Home</a></li>\n" +
    "          <li ui-sref-active=\"active\"><a ui-sref=\"user.rencontre\">Match Someone</a></li>\n" +
    "        <li><a href=\"#!/user/infoperso\">Personnal infos</a></li>\n" +
    "            <li ui-sref-active=\"active\"><a ui-sref=\"user.persomen\">My profil</a></li>\n" +
    "\n" +
    "      </ul>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/perso.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col s12\">\n" +
    "\n" +
    "        <div class=\"col s4\">\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col s12 firstelem\">\n" +
    "\n" +
    "                        <img class=\"col s4 circle responsive-img\" src=\"/img/tatiana2.jpg\" alt=\"\">\n" +
    "\n" +
    "                        <p class=\"col s8 namecard firstelem center-align\">TatianaFromRussia</p>\n" +
    "                        <a class=\"waves-effect light-blue lighten-3 btn btnmess\"><i class=\"material-icons left\">message</i>Message</a>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <p class=\"subtitle\">I like playing darts and basket-ball and love big surprises...</p>\n" +
    "            <p class=\"col s3 pcard\">Visited :</p>\n" +
    "            <p class=\"col s9 pcard rep\">USA, Sounth africa, Brazil, Portugal, India</p>\n" +
    "            <p class=\"col s3 pcard\">Wish :</p>\n" +
    "            <p class=\"col s9 pcard rep\">France, Canada, Mexico</p>\n" +
    "\n" +
    "            <div class=\"chip chipcard\">Chill\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Backpack\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Sport\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Long spend\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "            <h4 class=\"memorys center-align\">Trip Memorys</h4>\n" +
    "            <div class=\"collections\">\n" +
    "                <div class=\"col s4 couple hoverable\">\n" +
    "                    <img class=\"collectpic\" src=\"/img/carnet1.jpg\" alt=\"\">\n" +
    "                    <p class=\"center-align\">Sketch</p>\n" +
    "                </div>\n" +
    "                <div class=\"col s4 couple hoverable\">\n" +
    "                    <img class=\"collectpic\" src=\"/img/brazil.jpg\" alt=\"\">\n" +
    "                    <p class=\"center-align\">Brazil</p>\n" +
    "                </div>\n" +
    "                <div class=\"col s4 couple hoverable\">\n" +
    "                    <img class=\"collectpic\" src=\"/img/capetown.jpg\" alt=\"\">\n" +
    "                    <p class=\"center-align\">Sounth Africa</p>\n" +
    "                </div>\n" +
    "                <div class=\"col s4 couple hoverable\">\n" +
    "                    <img class=\"collectpic\" src=\"/img/newyork.jpg\" alt=\"\">\n" +
    "                    <p class=\"center-align\">USA</p>\n" +
    "                </div>\n" +
    "                <div class=\"col s4 couple hoverable\">\n" +
    "                    <img class=\"collectpic\" src=\"/img/newdelhi.jpg\" alt=\"\">\n" +
    "                    <p class=\"center-align\">India</p>\n" +
    "                </div>\n" +
    "                <div class=\"col s4 couple hoverable\">\n" +
    "                    <img class=\"collectpic\" src=\"/img/lisboa.jpg\" alt=\"\">\n" +
    "                    <p class=\"center-align\">Portugal</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"btns\">\n" +
    "                <a class=\"btn-floating btn-large light-blue lighten-3\" ng-click=\"prevCarnet()\"><i class=\"material-icons\">chevron_left</i></a>\n" +
    "                <a class=\"btn-floating btn-large light-blue lighten-3\" ng-click=\"nextCarnet()\"><i class=\"material-icons\">chevron_right</i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s8\">\n" +
    "            <div class=\"col s12\">\n" +
    "                <!-- <div class=\"header\">\n" +
    "\n" +
    "                </div> -->\n" +
    "                <div class=\"slider\">\n" +
    "                    <img class=\"fondtest\" src={{currentImage}} alt=\"\">\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("user/persomen.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col s12\">\n" +
    "\n" +
    "        <div class=\"col s4\">\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col s12 firstelem\">\n" +
    "\n" +
    "                        <img class=\"col s4 circle responsive-img\" src=\"/img/manu.jpg\" alt=\"\">\n" +
    "\n" +
    "                        <p class=\"col s8 namecard firstelem center-align\">Manu28</p>\n" +
    "                        <a class=\"waves-effect light-blue lighten-3 btn btnmess\"><i class=\"material-icons left\">message</i>Message</a>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <p class=\"subtitle\">I like it just like your mum !</p>\n" +
    "            <p class=\"col s3 pcard\">Visited :</p>\n" +
    "            <p class=\"col s9 pcard rep\">Nogent-le-Rotrou, Mortagne-au-Perche, Bellou-sur-Huisne, St Aubin-des-Gois, La Loupe</p>\n" +
    "            <p class=\"col s3 pcard\">Wish :</p>\n" +
    "            <p class=\"col s9 pcard rep\">Chartres, Paris, Amsterdam, Sri-lanka, Canaria, Canada</p>\n" +
    "\n" +
    "            <div class=\"chip chipcard\">Chill\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Backpack\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Sport\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Long spend\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "            <h4 class=\"memorys center-align\">Trip Memorys</h4>\n" +
    "            <div class=\"collections\">\n" +
    "                <div class=\"col s4 couple hoverable\">\n" +
    "                    <img class=\"collectpic\" src=\"/img/manu1.jpeg\" alt=\"\">\n" +
    "                    <p class=\"center-align\">Mortagne-au-Perche</p>\n" +
    "                </div>\n" +
    "                <div class=\"col s4 couple hoverable\">\n" +
    "                    <img class=\"collectpic\" src=\"/img/manu2.jpg\" alt=\"\">\n" +
    "                    <p class=\"center-align\">Bellou-sur-Huisne</p>\n" +
    "                </div>\n" +
    "                <div class=\"col s4 couple hoverable\">\n" +
    "                    <img class=\"collectpic\" src=\"/img/manu3.jpg\" alt=\"\">\n" +
    "                    <p class=\"center-align\">St Aubin-des-Gois</p>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"btns\">\n" +
    "                <a class=\"btn-floating btn-large light-blue lighten-3\" ng-click=\"prevCarnet()\"><i class=\"material-icons\">chevron_left</i></a>\n" +
    "                <a class=\"btn-floating btn-large light-blue lighten-3\" ng-click=\"nextCarnet()\"><i class=\"material-icons\">chevron_right</i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s8\">\n" +
    "            <div class=\"col s12\">\n" +
    "                <!-- <div class=\"header\">\n" +
    "\n" +
    "                </div> -->\n" +
    "                <div class=\"slider\">\n" +
    "                    <img class=\"fondtest\" src=/img/manu2.jpg alt=\"\">\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

  $templateCache.put("user/rencontre.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col s6 filter\">\n" +
    "\n" +
    "\n" +
    "        <div class=\"bgsubtitle\">\n" +
    "            <h2>Who do you wanna meet ?</h2>\n" +
    "        </div>\n" +
    "        <div class=\"col s6 question\">\n" +
    "            <div class=\"selectbox\">\n" +
    "                <p>A :</p>\n" +
    "                <md-select placeholder=\"You're interrested into...\" ng-model=\"sexe\">\n" +
    "                    <md-option ng-repeat=\"sexe in genres\" value=\"{{sexe}}\">{{sexe}}</md-option>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s6 question\">\n" +
    "            <p>Speaking :</p>\n" +
    "            <div class=\"checkBox col s12\">\n" +
    "                <p class=\"col s6\" ng-repeat=\"langue in langues\">\n" +
    "                    <input type=\"checkbox\" id=\"{{langue}}\"/>\n" +
    "                    <label for=\"{{langue}}\">{{langue}}</label>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s6 question\">\n" +
    "            <p>who have already visited :</p>\n" +
    "            <md-input-container>\n" +
    "                <input type=\"text\" mdInput [formControl]=\"myControl\" [mdAutocomplete]=\"auto\">\n" +
    "            </md-input-container>\n" +
    "        </div>\n" +
    "        <div class=\"col s6 question\">\n" +
    "            <p>who wants to go in :</p>\n" +
    "            <md-input-container>\n" +
    "                <input type=\"text\" mdInput [formControl]=\"myControl\" [mdAutocomplete]=\"auto\">\n" +
    "            </md-input-container>\n" +
    "        </div>\n" +
    "\n" +
    "        <p>Wich kind of traveller do you wanna meet ?</p>\n" +
    "\n" +
    "        <div class=\"col s12 checkBox question\">\n" +
    "            <p class=\"col s2\" ng-repeat=\"type in typeOfTravel\">\n" +
    "                <input type=\"checkbox\" id=\"{{type}}\" />\n" +
    "                <label for=\"{{type}}\">{{type}}</label>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "        <a class=\"col s6 btn-large btnvalid\" ng-click=\"showList()\" >Show me the list</a>\n" +
    "        <a class=\"col s6 btn-large btnvalid\" ng-click=\"risk()\" >I like risk</a>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"col s6 matches\" >\n" +
    "        <div class=\"bgsubtitle\">\n" +
    "            <h2>Contact them :</h2>\n" +
    "        </div>\n" +
    "        <div class=\"col s6 userCard card-panel hoverable\" ng-hide=\"list\">\n" +
    "            <img class=\"col s4 circle responsive-img\" src=\"/img/tatiana2.jpg\" alt=\"\">\n" +
    "            <p class=\"col s8 namecard valign-wrapper\">TatianaFromRussia</p>\n" +
    "            <p class=\"subtitle\">I like playing darts and basket-ball and love big surprises...</p>\n" +
    "            <p class=\"col s3 pcard\">Visited :</p>\n" +
    "            <p class=\"col s9 pcard rep\">USA, Japan</p>\n" +
    "            <p class=\"col s3 pcard\">Wish :</p>\n" +
    "            <p class=\"col s9 pcard rep\">France, Canada, Mexico</p>\n" +
    "\n" +
    "            <div class=\"chip chipcard\">Chill\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Backpack\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Sport\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Long spend\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s6 userCard card-panel hoverable\" ng-hide=\"list\">\n" +
    "            <img class=\"col s4 circle responsive-img\" src=\"/img/Coralie2.jpg\" alt=\"\">\n" +
    "            <p class=\"col s8 namecard valign-wrapper\">Coralie</p>\n" +
    "            <p class=\"subtitle\">I would like to go in Asia. I need a real break I want to find love.</p>\n" +
    "            <p class=\"col s3 pcard\">Visited :</p>\n" +
    "            <p class=\"col s9 pcard rep\">China, Costa rica, Germany</p>\n" +
    "            <p class=\"col s3 pcard\">Wish :</p>\n" +
    "            <p class=\"col s9 pcard rep\">Bali, India, Maldives</p>\n" +
    "\n" +
    "            <div class=\"chip chipcard\">Chill\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Backpack\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Sport\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Party\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s6 userCard card-panel hoverable\" ng-hide=\"list\">\n" +
    "            <img class=\"col s4 circle responsive-img\" src=\"/img/Cecile2.jpg\" alt=\"\">\n" +
    "            <p class=\"col s8 namecard valign-wrapper\">Cécile</p>\n" +
    "            <p class=\"subtitle\">Just looking for a nice guy who wants to start a new adventure.</p>\n" +
    "            <p class=\"col s3 pcard\">Visited :</p>\n" +
    "            <p class=\"col s9 pcard rep\">Tunisia, Egypt, Mali, Kenya</p>\n" +
    "            <p class=\"col s3 pcard\">Wish :</p>\n" +
    "            <p class=\"col s9 pcard rep\">Bali, India, Maldives</p>\n" +
    "\n" +
    "            <div class=\"chip chipcard\">Photography\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Backpack\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Sport\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Short time\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Party\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s6 userCard card-panel hoverable\" ng-hide=\"list\">\n" +
    "            <img class=\"col s4 circle responsive-img\" src=\"/img/Camille2.jpg\" alt=\"\">\n" +
    "            <p class=\"col s8 namecard valign-wrapper\">Camille</p>\n" +
    "            <p class=\"subtitle\">I love surprises tell me where you wanna go and I'll follow you.</p>\n" +
    "            <p class=\"col s3 pcard\">Visited :</p>\n" +
    "            <p class=\"col s9 pcard rep\">Panama, USA, Canada, France, Spain</p>\n" +
    "            <p class=\"col s3 pcard\">Wish :</p>\n" +
    "            <p class=\"col s9 pcard rep\">India, japan, Indonesia</p>\n" +
    "\n" +
    "            <div class=\"chip chipcard\">Sport\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Chill\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Backpack\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- ///////////////////RANDOM//////////////////////////////// -->\n" +
    "\n" +
    "        <div class=\"col s6 userCard card-panel hoverable\" ng-hide=\"list1\">\n" +
    "            <img class=\"col s4 circle responsive-img\" src=\"/img/tatiana2.jpg\" alt=\"\">\n" +
    "            <p class=\"col s8 namecard valign-wrapper\">TatianaFromRussia</p>\n" +
    "            <p class=\"subtitle\">I like playing darts and basket-ball and love big surprises...</p>\n" +
    "            <p class=\"col s3 pcard\">Visited :</p>\n" +
    "            <p class=\"col s9 pcard rep\">USA, Japan</p>\n" +
    "            <p class=\"col s3 pcard\">Wish :</p>\n" +
    "            <p class=\"col s9 pcard rep\">France, Canada, Mexico</p>\n" +
    "\n" +
    "            <div class=\"chip chipcard\">Chill\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Backpack\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Sport\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Long spend\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s6 userCard card-panel hoverable\" ng-hide=\"list2\">\n" +
    "            <img class=\"col s4 circle responsive-img\" src=\"/img/Coralie2.jpg\" alt=\"\">\n" +
    "            <p class=\"col s8 namecard valign-wrapper\">Coralie</p>\n" +
    "            <p class=\"subtitle\">I would like to go in Asia. I need a real break I want to find love.</p>\n" +
    "            <p class=\"col s3 pcard\">Visited :</p>\n" +
    "            <p class=\"col s9 pcard rep\">China, Costa rica, Germany</p>\n" +
    "            <p class=\"col s3 pcard\">Wish :</p>\n" +
    "            <p class=\"col s9 pcard rep\">Bali, India, Maldives</p>\n" +
    "\n" +
    "            <div class=\"chip chipcard\">Chill\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Backpack\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Sport\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Party\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s6 userCard card-panel hoverable\" ng-hide=\"list3\">\n" +
    "            <img class=\"col s4 circle responsive-img\" src=\"/img/Cecile2.jpg\" alt=\"\">\n" +
    "            <p class=\"col s8 namecard valign-wrapper\">Cécile</p>\n" +
    "            <p class=\"subtitle\">Just looking for a nice guy who wants to start a new adventure.</p>\n" +
    "            <p class=\"col s3 pcard\">Visited :</p>\n" +
    "            <p class=\"col s9 pcard rep\">Tunisia, Egypt, Mali, Kenya</p>\n" +
    "            <p class=\"col s3 pcard\">Wish :</p>\n" +
    "            <p class=\"col s9 pcard rep\">Bali, India, Maldives</p>\n" +
    "\n" +
    "            <div class=\"chip chipcard\">Photography\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Backpack\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Sport\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Short time\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Party\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s6 userCard card-panel hoverable\" ng-hide=\"list4\">\n" +
    "            <img class=\"col s4 circle responsive-img\" src=\"/img/Camille2.jpg\" alt=\"\">\n" +
    "            <p class=\"col s8 namecard valign-wrapper\">Camille</p>\n" +
    "            <p class=\"subtitle\">I love surprises tell me where you wanna go and I'll follow you.</p>\n" +
    "            <p class=\"col s3 pcard\">Visited :</p>\n" +
    "            <p class=\"col s9 pcard rep\">Panama, USA, Canada, France, Spain</p>\n" +
    "            <p class=\"col s3 pcard\">Wish :</p>\n" +
    "            <p class=\"col s9 pcard rep\">India, japan, Indonesia</p>\n" +
    "\n" +
    "            <div class=\"chip chipcard\">Sport\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Chill\n" +
    "            </div>\n" +
    "            <div class=\"chip chipcard\">Backpack\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
