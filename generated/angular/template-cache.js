angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<nav class=\"nav-extended\">\n" +
    "    <div class=\"col s12\">\n" +
    "        <div class=\"nav-wrapper\">\n" +
    "            <a href=\"#\" class=\"brand-logo\">Logo</a>\n" +
    "            <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"\">menu</i></a>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"nav-content\">\n" +
    "            <ul class=\"tabs tabs-transparent\">\n" +
    "                <li class=\"tab\"><a href=\"#test1\">Defi</a></li>\n" +
    "                <li class=\"tab\"><a class=\"active\" href=\"#test2\">Classement</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"invitation\">\n" +
    "    <h2>Invitation<span class=\"new badge red\">4</span></h2></div>\n" +
    "<div class=\"carousel carousel-slider center\" data-indicators=\"true\" >\n" +
    "\n" +
    "\n" +
    "              <div class=\"carousel-item\" href=\"#One!\"  >\n" +
    "                <div class=\"card\" ng-click=\"goToInvitation()\" >\n" +
    "                    <div class=\"challenge\">\n" +
    "                        <img class=\"activator\" ng-src=\"{{categories[0].img}}\">\n" +
    "                    </div>\n" +
    "                    <div class=\"card-content\">\n" +
    "                        <p>{{categories[0].category}}</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-reveal\">\n" +
    "                        <span class=\"card-title grey-text text-darken-4\"> <i class=\"material-icons right\">close</i></span>\n" +
    "                        <p>Here is some more information about this product that is only revealed once clicked on.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"carousel-item\" href=\"#Two!\"  >\n" +
    "                    <div class=\"card\" ng-click=\"goToInvitation()\" >\n" +
    "                        <div class=\"challenge\">\n" +
    "                            <img class=\"activator\" ng-src=\"{{categories[1].img}}\">\n" +
    "                        </div>\n" +
    "                        <div class=\"card-content\">\n" +
    "                            <p>{{categories[1].category}}</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"card-reveal\">\n" +
    "                            <span class=\"card-title grey-text text-darken-4\"> <i class=\"material-icons right\">close</i></span>\n" +
    "                            <p>Here is some more information about this product that is only revealed once clicked on.</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"carousel-item\" href=\"#Three!\"  >\n" +
    "                <div class=\"card\" ng-click=\"goToInvitation()\" >\n" +
    "                    <div class=\"challenge\">\n" +
    "                        <img class=\"activator\" ng-src=\"{{categories[2].img}}\">\n" +
    "                    </div>\n" +
    "                    <div class=\"card-content\">\n" +
    "                        <p>{{categories[2].category}}</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-reveal\">\n" +
    "                        <span class=\"card-title grey-text text-darken-4\"> <i class=\"material-icons right\">close</i></span>\n" +
    "                        <p>Here is some more information about this product that is only revealed once clicked on.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"carousel-item\" href=\"#Four!\"  >\n" +
    "              <div class=\"card\" ng-click=\"goToInvitation()\" >\n" +
    "                  <div class=\"challenge\">\n" +
    "                      <img class=\"activator\" ng-src=\"{{categories[0].img}}\">\n" +
    "                  </div>\n" +
    "                  <div class=\"card-content\">\n" +
    "                      <p>{{categories[0].category}}</p>\n" +
    "                  </div>\n" +
    "                  <div class=\"card-reveal\">\n" +
    "                      <span class=\"card-title grey-text text-darken-4\"> <i class=\"material-icons right\">close</i></span>\n" +
    "                      <p>Here is some more information about this product that is only revealed once clicked on.</p>\n" +
    "                  </div>\n" +
    "              </div>\n" +
    "\n" +
    "              <div class=\"carousel-item\" href=\"#Five!\"  >\n" +
    "                  <div class=\"card\" ng-click=\"goToInvitation()\" >\n" +
    "                      <div class=\"challenge\">\n" +
    "                          <img class=\"activator\" ng-src=\"{{categories[1].img}}\">\n" +
    "                      </div>\n" +
    "                      <div class=\"card-content\">\n" +
    "                          <p>{{categories[1].category}}</p>\n" +
    "                      </div>\n" +
    "                      <div class=\"card-reveal\">\n" +
    "                          <span class=\"card-title grey-text text-darken-4\"> <i class=\"material-icons right\">close</i></span>\n" +
    "                          <p>Here is some more information about this product that is only revealed once clicked on.</p>\n" +
    "                      </div>\n" +
    "                  </div>\n" +
    "              </div>\n" +
    "\n" +
    "\n" +
    "          <div class=\"carousel-item\" href=\"#Six!\"  >\n" +
    "              <div class=\"card\" ng-click=\"goToInvitation()\" >\n" +
    "                  <div class=\"challenge\">\n" +
    "                      <img class=\"activator\" ng-src=\"{{categories[2].img}}\">\n" +
    "                  </div>\n" +
    "                  <div class=\"card-content\">\n" +
    "                      <p>{{categories[2].category}}</p>\n" +
    "                  </div>\n" +
    "                  <div class=\"card-reveal\">\n" +
    "                      <span class=\"card-title grey-text text-darken-4\"> <i class=\"material-icons right\">close</i></span>\n" +
    "                      <p>Here is some more information about this product that is only revealed once clicked on.</p>\n" +
    "                  </div>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <!-- <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\n" +
    "    <p><a href=\"#\">This is a link</a></p> -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "  <!--   <div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col s6 arbitrage\">\n" +
    "        <h1>Arbitrage</h1></div>\n" +
    "    <div class=\"col s6 flotingButton\">\n" +
    "        <a class=\"btn-floating btn-large waves-effect waves-light blue\">\n" +
    "            <i class=\"material-icons\">add</i></a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"arbitrage\">\n" +
    "</div>\n" +
    "<div class=\"carousel carousel-slider center\" data-indicators=\"true\">\n" +
    "\n" +
    "    <div class=\"carousel-item \" href=\"#one!\">\n" +
    "        <div class=\"card\">\n" +
    "            <div class=\"card-image waves-effect waves-block waves-light\">\n" +
    "                <img class=\"activator\" src=\"./img/foot.jpg\">\n" +
    "            </div>\n" +
    "            <div class=\"card-content\">\n" +
    "                <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\n" +
    "                <p><a href=\"#\">This is a link</a></p>\n" +
    "            </div>\n" +
    "            <div class=\"card-reveal\">\n" +
    "                <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\n" +
    "                <p>Here is some more information about this product that is only revealed once clicked on.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"carousel-item \" href=\"#two!\">\n" +
    "        <div class=\"card\">\n" +
    "            <div class=\"card-image waves-effect waves-block waves-light\">\n" +
    "                <img class=\"activator\" src=\"./img/boardGames.jpg\">\n" +
    "            </div>\n" +
    "            <div class=\"card-content\">\n" +
    "                <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\n" +
    "                <p><a href=\"#\">This is a link</a></p>\n" +
    "            </div>\n" +
    "            <div class=\"card-reveal\">\n" +
    "                <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\n" +
    "                <p>Here is some more information about this product that is only revealed once clicked on.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"carousel-item \" href=\"#three!\">\n" +
    "        <div class=\"card\">\n" +
    "            <div class=\"card-image waves-effect waves-block waves-light\">\n" +
    "                <img class=\"activator\" src=\"./img/ping-pong.jpg\">\n" +
    "            </div>\n" +
    "            <div class=\"card-content\">\n" +
    "                <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\n" +
    "                <p><a href=\"#\">This is a link</a></p>\n" +
    "            </div>\n" +
    "            <div class=\"card-reveal\">\n" +
    "                <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\n" +
    "                <p>Here is some more information about this product that is only revealed once clicked on.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"carousel-item\" href=\"#four!\">\n" +
    "        <div class=\"card\">\n" +
    "            <div class=\"card-image waves-effect waves-block waves-light\">\n" +
    "                <img class=\"activator\" src=\"./img/jeuxVideo.jpg\">\n" +
    "            </div>\n" +
    "            <div class=\"card-content\">\n" +
    "                <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\n" +
    "                <p><a href=\"#\">This is a link</a></p>\n" +
    "            </div>\n" +
    "            <div class=\"card-reveal\">\n" +
    "                <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\n" +
    "                <p>Here is some more information about this product that is only revealed once clicked on.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div> -->\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row\">\n" +
    "  <div class=\"welcomeLogin background z-depth-3\">\n" +
    "    <h1 class=\"titre center-align\">KingPong</h1>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <form class=\"col s12 offset-l4 l4 login\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "    <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field col s11 offset-l1 l10 \">\n" +
    "        <i class=\"material-icons prefix\">mail</i>\n" +
    "        <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required>\n" +
    "        <label for=\"email\">Email</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field col s11 offset-l1 l10 \">\n" +
    "        <i class=\"material-icons prefix\">vpn_key</i>\n" +
    "        <input id=\"password\" type=\"{{inputType}}\"  class=\"form-control\" ng-model=\"user.password\"   required>\n" +
    "        <span class=\"hide-on-small-only\"><a id=\"revealPassword\" href ng-click=\"showPassword()\"><i class=\"material-icons\">remove_red_eye</i></a></span>\n" +
    "        <label  for=\"password\">Password</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col col s12 offset-l1 l10\">\n" +
    "        <a id=\"submit\" ng-click=\"login()\" type=\"submit\" class=\"waves-effect waves-teal btn \">Login</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<footer>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col s12 offset-l4 l4 center-align\">\n" +
    "      <ul>\n" +
    "        <li>Vous n’avez pas de compte?</li>\n" +
    "        <li><a class=\"center-align\" ui-sref='anon.register'>Inscrivez-vous</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</footer>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<!-- <nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Home</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.createDefis\" ng-show=\"auth.isAuthenticated()\">Nouveau defi</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.filterActivity\" ng-show=\"auth.isAuthenticated()\">filter activity</a></li>\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.login\" ng-hide=\"auth.isAuthenticated()\">Login</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.register\" ng-hide=\"auth.isAuthenticated()\">Register</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav> -->\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "  <div class=\"welcomeRegister background z-depth-3\">\n" +
    "    <h2 class=\"titre center-align \">KingPong</h2>\n" +
    "    <p>Pariatur exercitation id excepteur occaecat et labore eu labore reprehenderit ad et esse id in proident. Esse consectetur consectetur mollit adipisicing laborum adipisicing incididunt elit do exercitation.</p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <form class=\"col s12 offset-l4 l4 register\" name=\"loginForm\" ng-submit=\"register()\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field col s11 offset-l1 l10  \">\n" +
    "        <i class=\"material-icons prefix\">account_circle</i>\n" +
    "        <input id=\"pseudo\" type=\"text\" class=\"form-control\" ng-model=\"user.pseudo\" ng-change=\"addPseudo()\" required>\n" +
    "        <label class=\"active\" for=\"pseudo\">Pseudo</label>\n" +
    "        <span ng-if=\"(user.pseudo| lowercase) == verif.pseudo && user.pseudo != undefined\" style=\"color:red\"><i class=\"material-icons\">error_outline</i>{{error.pseudo}}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field col s11 offset-l1 l10  \">\n" +
    "        <i class=\"material-icons prefix\">mail</i>\n" +
    "        <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" ng-change=\"addEmail()\" required>\n" +
    "        <label class=\"active\" for=\"email\">Email</label>\n" +
    "        <span ng-if=\"(user.email|lowercase) == verif.email && user.email != undefined\" style=\"color:red\"><i class=\"material-icons\">error_outline</i>{{error.email}}</span>\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"input-field col s11 offset-l1 l10  \">\n" +
    "        <i class=\"material-icons prefix\">vpn_key</i>\n" +
    "        <input id=\"password\" type=\"{{inputType}}\" class=\"form-control\" ng-model=\"user.password\" required>\n" +
    "        <span ><a id=\"revealPassword\" href ng-click=\"showPassword()\"><i class=\"material-icons\">remove_red_eye</i></a></span>\n" +
    "        <label class=\"active\" for=\"password\">Password</label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col col s12 offset-l1 l10 \">\n" +
    "        <input id=\"submit\" type=\"submit\" name=\"action\" class=\"waves-effect waves-teal btn form\" value=\"Register\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<footer>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col s12 offset-l4 l4 center-align\">\n" +
    "      <ul>\n" +
    "        <li>Vous avez un compte ?</li>\n" +
    "        <li><a class=\"center-align\" ui-sref='anon.login'>Connectez-vous</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</footer>\n"
  );

  $templateCache.put("user/activityDescription.html",
    "<nav>\n" +
    "    <div class=\"nav-wrapper\">\n" +
    "        <ul>\n" +
    "            <li>\n" +
    "                <i class=\"material-icons\" ng-click=\"navigateBefore()\">navigate_before</i>\n" +
    "            </li>\n" +
    "            <div class=\"valideButton\">\n" +
    "                <li>\n" +
    "                    <i  ng-click=\"valide()\">Valide</i>\n" +
    "                </li>\n" +
    "            </div>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "<div class=\"cadre\">\n" +
    "    <md-subheader class=\"md-no-sticky\">\n" +
    "        <div class=\"photoCat\">\n" +
    "            <img src=img/{{activity.photo}}.jpg alt=\"\" class=\"circle\">\n" +
    "            <p>{{activity.activityName}}</p>\n" +
    "        </div>\n" +
    "    </md-subheader>\n" +
    "</div>\n" +
    "<div class=\"listdscrp\">\n" +
    "\n" +
    "    <md-list>\n" +
    "        <div class=\"row\">\n" +
    "            <form class=\"col s12\">\n" +
    "                <label for=\"activity\">Description</label>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"input-field col s12\">\n" +
    "                        <input disabled id=\"description\" type=\"text\" class=\"active\" ng-model=\"activity.description\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <label for=\"resultRule\">Règle du resultat</label>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"input-field col s12\">\n" +
    "                        <input disabled id=\"resultRule\" type=\"text\" class=\"active\" ng-model=\"activity.resultRule\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <label for=\"teamNumber\">Nombre d'équipe</label>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"input-field col s12\">\n" +
    "                        <input disabled id=\"teamNumber\" type=\"text\" class=\"validate\" ng-model=\"activity.numberOfTeam\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <label for=\"playerNumber\">Nombre de joueur par équipe</label>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"input-field col s12\">\n" +
    "                        <input disabled id=\"playerNumber\" type=\"text\" class=\"validate\" ng-model=\"activity.numberOfplayer\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <label for=\"averageLast\">Durée moyenne</label>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"input-field col s12\">\n" +
    "                        <input disabled id=\"averageLast\" type=\"text\" class=\"validate\" ng-model=\"activity.duration\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "        </div>\n" +
    "</div>\n" +
    "</form>\n" +
    "</md-list>\n"
  );

  $templateCache.put("user/challenge.html",
    "<nav>\n" +
    "    <div class=\"nav-wrapper\">\n" +
    "        <i class=\"material-icons\" ng-click=\"goToHome()\">close</i></label>\n" +
    "        <form>\n" +
    "            <i class=\"material-icons\">close</i>\n" +
    "    </div>\n" +
    "    <div class=\"cadre\">\n" +
    "        <md-subheader class=\"md-no-sticky\">\n" +
    "        </md-subheader><br>\n" +
    "    </div>\n" +
    "    </form>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "<div class=\"cadre\">\n" +
    "    <md-subheader class=\"md-no-sticky\">\n" +
    "        <div class=\"photoCat\">\n" +
    "            <img src=\"img/echec.jpg\" alt=\"\" class=\"circle\">\n" +
    "        </div>\n" +
    "    </md-subheader><br>\n" +
    "</div>\n" +
    "<br><br>\n" +
    "<div class=\"row\">\n" +
    "    <form class=\"col s12\">\n" +
    "        <ul class=\"collection\">\n" +
    "            <li ng-repeat=\"x in challenges\">\n" +
    "                <li class=\"collection-item\">\n" +
    "                    <span class=\"title\">Date</span>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col s12 grey-text text-lighten-1\">\n" +
    "                            <p>{{challenges.}}\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <li class=\"collection-item\">\n" +
    "                    <span class=\"title \">Durée</span>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col s12 \">\n" +
    "                            <p class=\"grey-text text-lighten-1\">{{challenges.duration}}h</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "\n" +
    "                <li class=\"collection-item\">\n" +
    "                    <span class=\"title\">Activité</span>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col s6\">\n" +
    "                            <p class=\"grey-text text-lighten-1\">{{challenges.p}}</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col s6\">\n" +
    "                            <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">k<i class=\"material-icons\">keyboard_arrow_right</i></i></a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <li class=\"collection-item\">\n" +
    "                    <span class=\"title\">Lieu</span>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col s12 grey-text text-lighten-1\">\n" +
    "                            <p>{{challenges.place}}</p>\n" +
    "                            <a href=\"#!\" class=\"secondary-content\"></a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <li class=\"participants\">\n" +
    "                    <span class=\"title\">Participants</span>\n" +
    "                </li>\n" +
    "                </br>\n" +
    "                <li class=\"collection-item\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col s12\">\n" +
    "                            <span class=\"team grey-text text-lighten-1\">Equipe 1</span>\n" +
    "                            </br>\n" +
    "\n" +
    "                            <!-- <div class=\"row\">\n" +
    "                    <div class=\"col s12\"> -->\n" +
    "                            <div class=\"chip\">\n" +
    "                                <img src=\"./img/olive.jpg\" alt=\"Contact Person\"> Olive\n" +
    "                            </div>\n" +
    "                            <div class=\"chip\">\n" +
    "                                <img src=\"./img/olive.jpg\" alt=\"Contact Person\"> Tom\n" +
    "                            </div>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                </br>\n" +
    "                <li class=\"collection-item\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col s12\">\n" +
    "                            <span class=\"team grey-text text-lighten-1\">Equipe 2</span>\n" +
    "                            </br>\n" +
    "\n" +
    "                            <!-- <div class=\"row\">\n" +
    "    <div class=\"col s12\"> -->\n" +
    "                            <div class=\"chip\">\n" +
    "                                <img src=\"./img/olive.jpg\" alt=\"Contact Person\"> Olive\n" +
    "                            </div>\n" +
    "                            <div class=\"chip\">\n" +
    "                                <img src=\"./img/olive.jpg\" alt=\"Contact Person\"> Tom\n" +
    "                            </div>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "        </ul>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</form>\n"
  );

  $templateCache.put("user/community.html",
    "<nav class=\"\">\n" +
    "  <div class=\"nav-wrapper\">\n" +
    "\n" +
    "    <form>\n" +
    "      <div class=\"input-field center \">\n" +
    "        <input  id=\"search\" type=\"search\" ng-model='filter' required>\n" +
    "        <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n" +
    "        <i class=\"material-icons\">close</i>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</nav>\n" +
    "<md-toolbar layout=\"row\" class=\"md-hue-3 \">\n" +
    "  <div class=\"md-toolbar-tools toolbar\">\n" +
    "    <ul>\n" +
    "      <li><a href ui-sref='user.home'><i class=\"material-icons prefix\">close</i></a></li>\n" +
    "    </ul>\n" +
    "    <h5 id=\"communityTitle\">Community</h5>\n" +
    "  </div>\n" +
    "\n" +
    "</md-toolbar>\n" +
    "\n" +
    "\n" +
    "<md-list>\n" +
    "  <md-list-item class=\"md-2-line\" ng-repeat=\"community in communitys |filter: filter  track by $index\" ng-click=\"addCommunity(community._id)\">\n" +
    "    <div  class=\"md-list-item-text\">\n" +
    "      <h3>{{community.name}}</h3>\n" +
    "      <p>{{community.location}}</p>\n" +
    "    </div>\n" +
    "  </md-list-item>\n" +
    "</md-list>\n" +
    "<div class=\"fixed-action-btn\" ng-if=\"communityParam !=0\">\n" +
    "  <a ui-sref='user.createCommunity' class=\"btn-floating btn-large customPurple z-depth-4\">\n" +
    "    <i class=\"large material-icons \">add</i>\n" +
    "  </a>\n" +
    "</div>\n"
  );

  $templateCache.put("user/createCommunity.html",
    "<nav>\n" +
    "    <div class=\"nav-wrapper\">\n" +
    "      <ul>\n" +
    "          <li>\n" +
    "              <i class=\"material-icons\" ng-click=\"navigateBefore()\">navigate_before</i>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "              <i class=\"validate\" ng-click=\"valide()\">Valide</i>\n" +
    "          </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "<div class=\"cadre\">\n" +
    "    <md-subheader class=\"md-no-sticky\">\n" +
    "        <img src=\"img/carlin.jpg\" alt=\"\" class=\"circle\">\n" +
    "        <p>Créer une nouvelle communauté</p>\n" +
    "    </md-subheader><br>\n" +
    "</div>\n" +
    "<div class=\"blocEntier\">\n" +
    "  <div class=\"row\">\n" +
    "    <form class=\"col s12\">\n" +
    "        <div class=\"input-field col s7\">\n" +
    "          <input id=\"communityName\" type=\"text\" class=\"validate\" ng-model=\"communityName\">\n" +
    "          <label for=\"communityName\">Nom de la communauté</label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "  <div class=\"row\">\n" +
    "        <div class=\"input-field col s7\">\n" +
    "          <input id=\"communityPlace\" type=\"text\" class=\"validate\" ng-model=\"communityPlace\">\n" +
    "          <label for=\"communityPlace\">Lieu de la communauté</label>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</form>\n"
  );

  $templateCache.put("user/createDefis.html",
    "<nav>\n" +
    "    <div class=\"nav-wrapper\">\n" +
    "        <i class=\"material-icons\" ng-click=\"goToHome()\">close</i>\n" +
    "        <form>\n" +
    "            <i class=\"material-icons\">close</i>\n" +
    "    </div>\n" +
    "    </form>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "<div class=\"cadre\">\n" +
    "    <md-subheader class=\"md-no-sticky\">\n" +
    "\n" +
    "        <img src=\"img/carlin.jpg\" alt=\"\" class=\"circle\">\n" +
    "        <p>Créer un nouveau défi</p>\n" +
    "\n" +
    "    </md-subheader><br>\n" +
    "</div>\n" +
    "<br><br>\n" +
    "<div class=\"blocEntier\">\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <form class=\"col s12\">\n" +
    "            <div class=\"row\">\n" +
    "                <label for=\"activity\">Activité</label>\n" +
    "                <div class=\"input-field col s12\">\n" +
    "                    <input id=\"activity\" type=\"text\" class=\"active\" ng-click=\"filterActivity()\" ng-model=\"activity.activityName\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- Calendrier datepicker -->\n" +
    "            <div class=\"row\">\n" +
    "                <label for=\"start\">Date et heure</label>\n" +
    "                <div class=\"input-field col s12\">\n" +
    "                    <div layout-gt-xs=\"row\">\n" +
    "                        <div flex-gt-xs>\n" +
    "                            <md-datepicker ng-model=\"myDate\" md-placeholder=\"Saisir la date\"></md-datepicker>\n" +
    "                            <div class=\"timefield\">\n" +
    "                                <input placeholder=\"Entrez une heure\" type=\"time\" ng-model=\"startTime\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"input-field col s12\">\n" +
    "            <md-select placeholder=\"Indiquer la durée du défi\" ng-model=\"duration\">\n" +
    "                <md-option ng-repeat=\"duration in durations\" value=\"{{duration}}\">{{duration}}</md-option>\n" +
    "                <label for=\"duration\">Durée</label>\n" +
    "            </md-select>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"input-field col s12\">\n" +
    "                <input id=\"where\" type=\"text\" class=\"validate\" ng-model=\"lieu\">\n" +
    "                <label for=\"where\">Lieu</label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"bloc-participant\" ng-show=\"activity.activityName\">\n" +
    "            <div class=\"bckgrd-participant\">\n" +
    "                <p>Participants</p>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"input-field col s12\">\n" +
    "                    <input id=\"nbGroupe\" type=\"number\" class=\"validate\" ng-model=\"activity.numberOfTeam\">\n" +
    "                    <label for=\"nbGroupe\">Nombre de groupe</label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"input-field col s12\">\n" +
    "                    <input id=\"nbParticipantGroupe\" type=\"number\" class=\"validate\" ng-model=\"activity.numberOfplayer\">\n" +
    "                    <label for=\"nbParticipantGroupe\">Nombre de participants par groupe</label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"input-field col s12\">\n" +
    "                    <input placeholder=\"choisissez vos invités\" id=\"invitation\" type=\"text\" ng-model=\"invite\">\n" +
    "                    <label for=\"invitation\">Invitations</label>\n" +
    "                    <div class=\"inviteNavigate\">\n" +
    "                    <i class=\"material-icons\" ng-click = \"navigateTo()\">></i>\n" +
    "                  </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <button class=\"btn blue\" type=\"button\" ng-click=\"sendChallenge()\"><span>Creer le défi</span></button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</form>\n"
  );

  $templateCache.put("user/createNewActivity.html",
    "<nav>\n" +
    "    <div class=\"nav-wrapper\">\n" +
    "        <ul>\n" +
    "            <li>\n" +
    "                <i class=\"material-icons\" ng-click=\"navigateBefore()\">navigate_before</i>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <i class=\"validate\" ng-click=\"valide()\">Valide</i>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "<div class=\"cadre\">\n" +
    "      <md-subheader class=\"md-no-sticky\">\n" +
    "\n" +
    "          <img src=\"img/carlin.jpg\" alt=\"\" class=\"circle\">\n" +
    "          <p>Créer une nouvelle activité?</p>\n" +
    "\n" +
    "      </md-subheader><br>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<md-list>\n" +
    "    <div class=\"row\">\n" +
    "        <form class=\"col s12\">\n" +
    "            <label for=\"activity\">Activité</label>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"input-field col s12\">\n" +
    "                    <input id=\"activity\" type=\"text\" class=\"active\" ng-model=\"activity\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <label for=\"photo\">photo</label>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"input-field col s12\">\n" +
    "                    <md-select placeholder=\"choisir le type de photo\" ng-model=\"photo\">\n" +
    "                        <md-option ng-repeat=\"photo in photos\" value=\"{{photo}}\">{{photo}}</md-option>\n" +
    "                    </md-select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <form class=\"col s12\">\n" +
    "                    <label for=\"description\">Description</label>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"input-field col s12\">\n" +
    "                            <input id=\"description\" type=\"text\" class=\"active\" ng-model=\"description\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <label for=\"resultRule\">Règle du resultat</label>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"input-field col s12\">\n" +
    "                            <md-select placeholder=\"Indiquer la règle du résultat\" ng-model=\"resultRule\">\n" +
    "                                <md-option ng-repeat=\"resultRule in resultRules\" value=\"{{resultRule}}\">{{resultRule}}</md-option>\n" +
    "                            </md-select>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <label for=\"teamNumber\">Nombre d'équipe</label>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"input-field col s12\">\n" +
    "                            <input id=\"teamNumber\" type=\"text\" class=\"validate\" ng-model=\"teamNumber\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <label for=\"playerNumber\">Nombre de joueur par équipe</label>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"input-field col s12\">\n" +
    "                            <input id=\"playerNumber\" type=\"text\" class=\"validate\" ng-model=\"playerNumber\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <label for=\"averageLast\">Durée moyenne</label>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"input-field col s12\">\n" +
    "                            <input id=\"averageLast\" type=\"text\" class=\"validate\" ng-model=\"averageLast\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "            </div>\n" +
    "            </form>\n" +
    "</md-list>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/home.html",
    "<nav class=\"nav-extended\">\n" +
    "  <div class=\"nav-wrapper\">\n" +
    "    <select class=\"brand-logo select center\" ng-options=\"community.name for community in communitys\" ng-model=\"community\" ng-change=\"selected(community)\">\n" +
    "      </select>\n" +
    "    <a href class=\"button-collapse md-primary right\" ng-click=\"toggleRight()\" ng-hide=\"isOpenRight()\"><i class=\"material-icons\">menu</i></a>\n" +
    "  </div>\n" +
    "\n" +
    "    <div class=\"nav-content\">\n" +
    "      <ul class=\"tabs tabs-transparent ulCenter \">\n" +
    "        <li class=\"tab \"><a href>Defi<span class=\"badge red nav-badge\">{{invitations.length + arbitrages.length}}</span></a></li>\n" +
    "        <li class=\"tab \"><a href>Classement</a></li>\n" +
    "        <div class=\"indicator\"></div>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</nav>\n" +
    "\n" +
    "<div ng-cloak md-swipe-right=\"onSwipeRight()\">\n" +
    "  <section layout=\"row\" flex>\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-4dp\" md-component-id=\"right\" md-swipe-right=\"onSwipeRight()\">\n" +
    "      <md-toolbar class=\"md-theme-light\">\n" +
    "        <img class=\"center circle avatar\" src=\"{{user.avatar}}\" alt=\"\">\n" +
    "        <b class=\"center pseudo-sidenav\">{{user.pseudo}}</b>\n" +
    "      </md-toolbar>\n" +
    "      <md-content layout-padding>\n" +
    "        <md-list>\n" +
    "          <md-list-item ui-sref='user.profile' class=\"md-3-line\">\n" +
    "            <img src=\"./img/person.png\" class=\"md-avatar side-img\"></i>\n" +
    "            <div class=\"md-list-item-text\">\n" +
    "              <h2 class=\"side-title\">Profile</h4>\n" +
    "            </div>\n" +
    "            <md-divider ng-if=\"!$last\"></md-divider>\n" +
    "          </md-list-item>\n" +
    "          <md-list-item ng-click=\"goCommunity()\" class=\"md-3-line\">\n" +
    "            <img  src=\"./img/people.png\" class=\"md-avatar side-img\"></i>\n" +
    "                <div class=\"md-list-item-text\">\n" +
    "                <h2 class=\"side-title\">Community</h2>\n" +
    "            </div>\n" +
    "            <md-divider ng-if=\"!$last\"></md-divider>\n" +
    "          </md-list-item>\n" +
    "          <md-list-item ng-click=\"logout()\" class=\"md-3-line\">\n" +
    "            <img src=\"./img/exit.png\" class=\"md-avatar side-img\"></i>\n" +
    "            <div class=\"md-list-item-text\">\n" +
    "              <h2 class=\"side-title\">LogOut</h4>\n" +
    "              <span></span>\n" +
    "            </div>\n" +
    "            <md-divider ng-if=\"!$last\"></md-divider>\n" +
    "          </md-list-item>\n" +
    "        </md-list>\n" +
    "      </md-content>\n" +
    "    </md-sidenav>\n" +
    "  </section>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"row invitations \"  ng-if=\"!invitations.length == 0\">\n" +
    "  <div class=\"col s12 \">\n" +
    "    <div class=\"invitation \">\n" +
    "        <h2>Invitation<span class=\"badge red round-badge\">{{invitations.length}}</span></h2>\n" +
    "    </div>\n" +
    "\n" +
    "    <ks-swiper-container class=\"swiper-container\" on-ready=\"onReadySwiper(swiper)\" show-nav-buttons=\"true\" swiper='swiper'  override-parameters=\"slideOption\" slides-per-view=\"5\" space-between=\"20\" initial-slide=\"0\">\n" +
    "      <ks-swiper-slide class=\"swiper-slide \" ng-repeat=\"challenge in invitations track by $index\">\n" +
    "        <div class=\"card z-depth-2\">\n" +
    "          <div class=\"card-image\">\n" +
    "            <img class=\"\" ng-src=\"{{challenge.url}}\">\n" +
    "              <span class=\"card-title\"><h3>{{challenge.name}}</h3></span>\n" +
    "              <span class=\"card-title\"><p>{{challenge.activity}}</p></span>\n" +
    "          </div>\n" +
    "          <div class=\"card-content\">\n" +
    "          </div>\n" +
    "          <div class=\"card-reveal\">\n" +
    "            <span class=\"card-title grey-text text-darken-4\">{{challenge.activity}}<i class=\"material-icons right\">close</i></span>\n" +
    "            <p>Here is some more information about this product that is only revealed once clicked on.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </ks-swiper-slide>\n" +
    "      <ks-swiper-slide>\n" +
    "      </ks-swiper-slide>\n" +
    "    </ks-swiper-container>\n" +
    "    <div class=\"fixed-action-btn\">\n" +
    "      <a ui-sref='user.createDefis({community: community._id})' class=\"btn-floating btn-large z-depth-4\">\n" +
    "        <i class=\"large material-icons \">add</i>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row section arbitrages\" ng-if=\"!arbitrages.length == 0\" style=\"position: relative\">\n" +
    "  <div class=\"col s12 \">\n" +
    "    <div class=\"arbitrage\">\n" +
    "      <h2>Arbitrage<span class=\"badge red round-badge\">{{arbitrages.length}}</span></h2>\n" +
    "    </div>\n" +
    "\n" +
    "    <ks-swiper-container on-ready=\"onReadySwiper(swiper)\" class=\"swiper-container\" show-nav-buttons=\"true\" override-parameters=\"slideOption\"  initial-slide=\"0\">\n" +
    "      <ks-swiper-slide class=\"swiper-slide\" ng-repeat=\"challenge in arbitrages track by $index\">\n" +
    "        <div class=\"card\">\n" +
    "          <div class=\"card-image\">\n" +
    "            <img class=\"\" ng-src=\"{{challenge.url}}\">\n" +
    "            <span class=\"card-title\"><h3>{{challenge.name}}</h3></span>\n" +
    "            <span class=\"card-title\"><p>{{challenge.activity}}</p></span>\n" +
    "          </div>\n" +
    "          <div class=\"card-content\">\n" +
    "          </div>\n" +
    "          <div class=\"card-reveal\">\n" +
    "            <span class=\"card-title grey-text text-darken-4\">{{challenge.activity}}<i class=\"material-icons right\">close</i></span>\n" +
    "            <p>Here is some more information about this product that is only revealed once clicked on.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </ks-swiper-slide>\n" +
    "      <ks-swiper-slide>\n" +
    "      </ks-swiper-slide>\n" +
    "    </ks-swiper-container>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"row section myDefies\" ng-if=\"!defies.length == 0\">\n" +
    "  <div class=\"col s12 \">\n" +
    "    <div class=\"futurDefies\">\n" +
    "      <h2>Mes défis à venir</h2>\n" +
    "    </div>\n" +
    "    <ks-swiper-container class=\"swiper-container\" on-ready=\"onReadySwiper(swiper)\" show-nav-buttons=\"true\" swiper='swiper'  override-parameters=\"slideOption\" initial-slide=\"0\">\n" +
    "      <ks-swiper-slide class=\"swiper-slide\" ng-repeat=\"defy in defies track by $index\">\n" +
    "        <div class=\"card\">\n" +
    "          <div class=\"card-image\">\n" +
    "            <img class=\"\" ng-src=\"{{defy.url}}\">\n" +
    "            <span class=\"card-title\"><h3>{{defy.name}}</h3></span>\n" +
    "            <span class=\"card-title\"><p>{{defy.activity}}</p></span>\n" +
    "          </div>\n" +
    "          <div class=\"card-content\">\n" +
    "          </div>\n" +
    "          <div class=\"card-reveal\">\n" +
    "            <span class=\"card-title grey-text text-darken-4\">{{defy.activity}}<i class=\"material-icons right\">close</i></span>\n" +
    "            <p>Here is some more information about this product that is only revealed once clicked on.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </ks-swiper-slide>\n" +
    "      <ks-swiper-slide>\n" +
    "      </ks-swiper-slide>\n" +
    "    </ks-swiper-container>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"row section inMyCommunity\" ng-if=\"!communityDefies.length == 0\">\n" +
    "  <div class=\"col s12 \">\n" +
    "    <div class=\"communityDefies\">\n" +
    "      <h2>Dans ma communauté</h2>\n" +
    "    </div>\n" +
    "    <ks-swiper-container class=\"swiper-container\" on-ready=\"onReadySwiper(swiper)\" show-nav-buttons=\"true\" swiper='swiper'  override-parameters=\"slideOption\" initial-slide=\"0\">\n" +
    "      <ks-swiper-slide class=\"swiper-slide\" ng-repeat=\"defy in communityDefies track by $index\">\n" +
    "        <div class=\"card\">\n" +
    "          <div class=\"card-image\">\n" +
    "            <img class=\"\" ng-src=\"{{defy.url}}\">\n" +
    "            <span class=\"card-title\"><h3>{{defy.name}}</h3></span>\n" +
    "            <span class=\"card-title\"><p>{{defy.activity}}</p></span>\n" +
    "          </div>\n" +
    "          <div class=\"card-content\">\n" +
    "          </div>\n" +
    "          <div class=\"card-reveal\">\n" +
    "            <span class=\"card-title grey-text text-darken-4\">{{defy.activity}}<i class=\"material-icons right\">close</i></span>\n" +
    "            <p>Here is some more information about this product that is only revealed once clicked on.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </ks-swiper-slide>\n" +
    "      <ks-swiper-slide>\n" +
    "      </ks-swiper-slide>\n" +
    "    </ks-swiper-container>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/invites.html",
    "<nav class=\"\">\n" +
    "    <div class=\"nav-wrapper\">\n" +
    "\n" +
    "        <form>\n" +
    "            <div class=\"input-field center \">\n" +
    "                <input id=\"search\" type=\"search\" ng-model='filter' required>\n" +
    "                <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n" +
    "                <i class=\"material-icons\">close</i>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "<md-toolbar layout=\"row\" class=\"md-hue-3 \">\n" +
    "    <div class=\"md-toolbar-tools toolbar\">\n" +
    "        <ul>\n" +
    "            <li><a href ui-sref='user.home'><i class=\"material-icons prefix\">close</i></a></li>\n" +
    "        </ul>\n" +
    "        <h5 id=\"communityTitle\">invités</h5>\n" +
    "    </div>\n" +
    "</md-toolbar>\n" +
    "<br>\n" +
    "<!-- <div ng-repeat=\"community in communitys\">\n" +
    "\n" +
    "  <input type=\"checkbox\" checklist-model=\"community\" id=\"{{community.pseudo}}\" checklist-value=\"community.pseudo\"> <h1>{{community.pseudo}}</h1>\n" +
    "  <label for=\"{{community.pseudo}}\"></label>\n" +
    "</label>\n" +
    "</div> -->\n" +
    "\n" +
    "<md-list-item class=\"md-2-line\" ng-repeat=\"community in communitys\" )>\n" +
    "    <div class=\"md-list-item-text\">\n" +
    "        <div class=\"inviteAlign\">\n" +
    "            <div classs=\"inviteAvatar\">\n" +
    "                <img src=\"{{community.avatar}}\" class=\"circle\" alt=\"\">\n" +
    "            </div>\n" +
    "            <div class=\"invitePseudo\">\n" +
    "                    <div>\n" +
    "                        {{community.pseudo}}\n" +
    "                      </div>\n" +
    "                            <div>\n" +
    "                              <p>\n" +
    "                                <input type=\"checkbox\" id=\"{{community.pseudo}}\" ng-model=\"invite\"/>\n" +
    "                                <label for=\"{{community.pseudo}}\"></label>\n" +
    "                          </p>\n" +
    "                        </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "</md-list-item>\n" +
    "</md-list>\n" +
    "<div class=\"fixed-action-btn\" ng-if=\"communityParam !=0\">\n" +
    "    <a ui-sref='user.inv' class=\"btn-floating btn-large customPurple z-depth-4\" ng-click=\"addInvite()\">\n" +
    "        <i class=\"large material-icons \">add</i>\n" +
    "    </a>\n" +
    "</div>\n"
  );

  $templateCache.put("user/navbar.html",
    ""
  );

  $templateCache.put("user/newActivity.html",
    "<nav>\n" +
    "  <div class=\"nav-wrapper\">\n" +
    "    <ul>\n" +
    "        <li>\n" +
    "            <i class=\"material-icons\" ng-click=\"navigateBefore()\">navigate_before</i>\n" +
    "        </li>\n" +
    "            <div>\n" +
    "            <li>\n" +
    "              <form>\n" +
    "                <div class=\"input-field center \">\n" +
    "                  <input  id=\"search\" type=\"search\" ng-model='filtre'>\n" +
    "                      <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n" +
    "                </div>\n" +
    "              </form>\n" +
    "            </li>\n" +
    "            </div>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</nav>\n" +
    "<div class=\"cadre\">\n" +
    "<md-subheader class=\"md-no-sticky\"><b>Activités</b></md-subheader><br>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col s12\">\n" +
    "\n" +
    "            <md-list>\n" +
    "            <ul class=\"collection\">\n" +
    "                <li class=\"collection-item\" ng-repeat=\"activ in activity | filter: filtre\">\n" +
    "                    <div class=\"md-list-item-text compact\" ng-click=\"addActivity(activ)\">{{activ.activityName}}\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "          </md-list>\n" +
    "\n" +
    "                  <div class=\"fixed-action-btn\">\n" +
    "                    <a class=\"btn-floating btn-large customPurple z-depth-4\"  ng-click=\"createNewActivity()\">\n" +
    "                      <i class=\"large material-icons \">add</i>\n" +
    "                    </a>\n" +
    "                  </div>\n" +
    "\n" +
    "          </div>\n"
  );

  $templateCache.put("user/profile.html",
    "<nav>\n" +
    "    <div class=\"nav-wrapper\">\n" +
    "        <i class=\"material-icons\" ng-click=\"close()\">close</i></label>\n" +
    "        <form>\n" +
    "            <i class=\"material-icons\">close</i>\n" +
    "    </div>\n" +
    "    </form>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "<md-subheader class=\"md-no-sticky\">\n" +
    "    <div class=\"gravatar\">\n" +
    "        <img ng-src=\"{{avatar}}\" alt=\"avatar\" class=\"circle\">\n" +
    "    </div>\n" +
    "</md-subheader><br>\n" +
    "<div ng-init=\"checked=true\">\n" +
    "    <form action=\"#\">\n" +
    "        <p class=\"checkmodif\">\n" +
    "            <input type=\"checkbox\" class=\"filled-in\" id=\"filled-in-box\" checked=\"checked\" ng-model=\"checked\" />\n" +
    "            <label for=\"filled-in-box\">decocher pour modifier les parametres</label>\n" +
    "        </p>\n" +
    "        <div class=\"buttonSave\">\n" +
    "            <a class=\"waves-effect waves-light btn\" ng-hide=\"checked = checked\" ng-click=\"infoUpdate()\">Enregistrer</a>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<form class=\"col s12\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"input-field col s12\">\n" +
    "            <label for=\"user\">Username</label>\n" +
    "            <br>\n" +
    "            <input class=\"email\" name=\"email\" ng-model=\"email\" ng-disabled=\"checked\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"input-field col s12\">\n" +
    "            <label for=\"pseudo\">pseudo</label>\n" +
    "            <br>\n" +
    "            <input type=\"text\" name=\"pseudo\" ng-model=\"pseudo\" ng-disabled=\"checked\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"input-field col s12\">\n" +
    "            <label for=\"password\">mot de passe</label>\n" +
    "            <br>\n" +
    "            <input type=\"password\" name=\"pseudo\" ng-model=\"password\" ng-disabled=\"checked\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"input-field col s12\">\n" +
    "            <label for=\"point\">Points</label>\n" +
    "            <br>\n" +
    "            <input type=\"text\" name=\"point\" ng-model=\"point\" disabled>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"input-field col s12\">\n" +
    "            <label for=\"community\">Mes communautés</label>\n" +
    "            <br>\n" +
    "            </blockquote>\n" +
    "            <input type=\"text\" name=\"community\" ng-repeat=\"comunity in communitys\" ng-model=\"community.name\" disabled>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "</form>\n" +
    "</div>\n"
  );

}]);
