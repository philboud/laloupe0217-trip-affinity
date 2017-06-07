angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<div class=\"container\">\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col s12 map\">\n" +
    "        </div>\n" +
    "        <div class=\"col s6 lastnews\">\n" +
    "            <div class=\"col s12 blocknews\">\n" +
    "                <div class=\"\">\n" +
    "                    <div class=\"col s4\">\n" +
    "                        <img src=\"http://lorempixel.com/100/190/nature/6\">\n" +
    "                    </div>\n" +
    "                    <div class=\"\">\n" +
    "                        <div class=\"col s8\">\n" +
    "                            <div class=\"col s4 offset-s8 chip chiplastnews\">\n" +
    "                                <img src=\"images/yuna.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "                            </div>\n" +
    "                            <p>I just came back from Sri-Lanka ! Amazing trip ! People are so nice. Beautifull landscapes...</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"card-action\">\n" +
    "                            <a href=\"#\">Wanna read more...</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col s12\">\n" +
    "                <div class=\"\">\n" +
    "                    <div class=\"col s4\">\n" +
    "                        <img src=\"http://lorempixel.com/100/190/nature/6\">\n" +
    "                    </div>\n" +
    "                    <div class=\"\">\n" +
    "                        <div class=\"col s8\">\n" +
    "                            <div class=\"col s4 offset-s8 chip chiplastnews\">\n" +
    "                                <img src=\"images/yuna.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "                            </div>\n" +
    "                            <p>I just came back from Sri-Lanka ! Amazing trip ! People are so nice. Beautifull landscapes...</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"card-action\">\n" +
    "                            <a href=\"#\">Wanna read more...</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col s12\">\n" +
    "                <div class=\"\">\n" +
    "                    <div class=\"col s4\">\n" +
    "                        <img src=\"http://lorempixel.com/100/190/nature/6\">\n" +
    "                    </div>\n" +
    "                    <div class=\"\">\n" +
    "                        <div class=\"col s8\">\n" +
    "                            <div class=\"col s4 offset-s8 chip chiplastnews\">\n" +
    "                                <img src=\"images/yuna.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "                            </div>\n" +
    "                            <p>I just came back from Sri-Lanka ! Amazing trip ! People are so nice. Beautifull landscapes...</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"card-action\">\n" +
    "                            <a href=\"#\">Wanna read more...</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s4 blog\">\n" +
    "            <div class=\"col s12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-image\">\n" +
    "                        <img src=\"images/sample-1.jpg\">\n" +
    "                        <span class=\"card-title\">Card Title</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-content\">\n" +
    "                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-action\">\n" +
    "                        <a href=\"#\">This is a link</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col s2 newpeople\">\n" +
    "            <div class=\"chip rightsuggest\">\n" +
    "                <img src=\"images/yuna.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "            </div>\n" +
    "            <div class=\"chip rightsuggest\">\n" +
    "                <img src=\"images/yuna.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "            </div>\n" +
    "            <div class=\"chip rightsuggest\">\n" +
    "                <img src=\"images/yuna.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "            </div>\n" +
    "            <div class=\"chip rightsuggest\">\n" +
    "                <img src=\"images/yuna.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "            </div>\n" +
    "            <div class=\"chip rightsuggest\">\n" +
    "                <img src=\"images/yuna.jpg\" alt=\"Contact Person\"> Jane Doe\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"container back\">\n" +
    "\n" +
    "\n" +
    "<div class=\"modalform\">\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "      <h3>Trip-Affinity</h3>\n" +
    "      <h1>L'affaire est dans le sac...à dos!</h1>\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button><br>\n" +
    "          <a href=\"#!/register\">Vous n'êtes pas encore enregistré, cliquez sur ce lien</a>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          \n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
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
    "<div class=\"container back\">\n" +
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
    "</div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/home.html",
    "\n" +
    "<div class=\"container back\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("user/infoPerso.html",
    "<div class=\"container back\">\n" +
    "\n" +
    "\n" +
    "<div class=\"modalform\">\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "      <h3>Trip-Affinity</h3>\n" +
    "      <h1>L'affaire est dans le sac...à dos!</h1>\n" +
    "      \n" +
    "        </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <!-- <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button> -->\n" +
    "      <ul class=\"right hide-on-med-and-down\">\n" +
    "        <li><a href=\"#!/user/infoperso\">Info perso</a></li>\n" +
    "        <li><a href=\"#!\">The adventure</a></li>\n" +
    "        <li><a class=\"dropdown-button\" href=\"#!\" data-activates=\"dropdown1\">Dropdown<i class=\"material-icons right\">arrow_drop_down</i></a></li>\n" +
    "        <ul id='dropdown1' class='dropdown-content'>\n" +
    "          <li><a href=\"\">First</a></li>\n" +
    "          <li><a href=\"#!\">Second</a></li>\n" +
    "          <li><a href=\"#!\">Third</a></li>\n" +
    "          <li><a href=\"#!\">Fourth</a></li>\n" +
    "        </ul>\n" +
    "      </ul>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);
