<html>
<head>

    <link rel="stylesheet" type="text/css" href="lib/bootstrap/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="lib/bootstrap/bootstrap-theme.min.css" />
    <link rel="stylesheet" type="text/css" href="lib/jquery-ui-lightness/jquery-ui-1.10.4.min.css" />
    <link rel="stylesheet" type="text/css" href="styles.css" />

    <?php if($_SERVER['HTTP_HOST'] != 'dev.durhamlights.com') { ?>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RBM094ZZ2X"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-RBM094ZZ2X');
    </script>
    <? } ?>

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Durham Lights</title>
</head>
<body>

    <div class="container">
    <h1>Durham Lights</h1>

    <div class="row site-cards">
        <div class="card rounded col-sm-6 card-christmas" style="width:268px;">
            <a class="card-img-top" href="christmas"><img src="images/card-christmas.png"></a>
            <div class="card-body">
                <h5 class="card-title">Christmas windows</h5>
                <p class="card-text">Decorated windows for advent and Christmas, and where to find them.</p>
                <div class="row text-center">
                    <a href="christmas" class="mx-auto btn btn-primary">View areas</a>
                </div>
            </div>
        </div>

    <div class="row site-cards">
        <div class="card rounded col-sm-6 card-streetlights" style="width:268px;">
            <a class="card-img-top" href="https://www.durhamcp.org.uk/streetlights"><img src="images/card-streetlights.png" alt="Card image cap"></a>
            <div class="card-body">
                <h5 class="card-title">Durham Streetlights</h5>
                <p class="card-text">Volunteers who care, listen, and provide practical support for anyone in Durham city centre on Friday and Saturday nights.</p>
                <div class="row text-center">
                    <a href="https://www.durhamcp.org.uk/streetlights" class="mx-auto btn btn-primary">Learn more</a>
                </div>
            </div>
        </div>

        <div class="card rounded col-sm-6 card-lumiere" style="width:268px;">
            <a class="card-img-top" href="/lumiere"><img src="images/card-lumiere2015.png" alt="Card image cap"></a>
            <div class="card-body">
                <h5 class="card-title">Lumiere Map</h5>
                <p class="card-text">The only interactive map of Lumiere 2015, with open-source locations and information.</p>
                <div class="row text-center">
                    <a href="/lumiere" class="mx-auto btn btn-primary">Lumiere Map</a>
                </div>
            </div>
        </div>
    </div>


</div>


<script type="text/javascript" src="lib/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="lib/bootstrap/bootstrap.min.js"></script>

</body>
</html>