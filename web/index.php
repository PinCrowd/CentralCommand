<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Pincrowd</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta name="viewport" content="width=device-width" />
    <meta name="apple-mobile-web-app-capable" content="yes" />

    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png"> <!-- iPad -->
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png"> <!-- iPhone Retina -->
    <link rel="apple-touch-icon" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-startup-image" href="/splash-startup.png">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="/css/kiosk.css">
</head>
<body>
<div id="emulate-kiosk">
    <div id="app">
        <div id="games">

        </div><!-- /#games -->

    </div><!-- /app -->
</div><!-- /emulate-kiosk -->

<!-- Libs -->
<script src="/js/lib/zepto-1.0.rc.1.js"></script>
<script src="/js/lib/underscore-1.4.3.js"></script>
<script src="/js/lib/backbone-0.9.9.js"></script>
<script src="/js/lib/handlebars-1.0.rc.1.js"></script>

<!-- Init Pincrowd Namespaces -->
<script src="/js/pincrowd.js"></script>

<!-- Templates -->
<script src="/js/templates/template_game.js"></script>
<script src="/js/templates/template_game_player.js"></script>
<script src="/js/templates/template_game_frame.js"></script>
<script src="/js/templates/template_edit_player.js"></script>
<script src="/js/templates/template_edit_frame.js"></script>

<!-- Models -->
<script src="/js/models/model.player.js"></script>
<script src="/js/models/model.game.js"></script>
<script src="/js/models/model.match.js"></script>

<!-- Collections -->
<script src="/js/collections/collection.players.js"></script>
<script src="/js/collections/collection.games.js"></script>
<script src="/js/collections/collection.matches.js"></script>

<!-- Views -->
<script src="/js/views/view.player.js"></script>
<script src="/js/views/view.edit-player.js"></script>
<script src="/js/views/view.edit-frame.js"></script>
<script src="/js/views/view.game.js"></script>
<script src="/js/views/view.match.js"></script>
<script src="/js/views/view.splash.js"></script>
<script src="/js/views/view.kiosk.js"></script>

</body>
</html>