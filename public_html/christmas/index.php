<html>
<head>

    <link rel="stylesheet" type="text/css" href="../lib/bootstrap/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="../lib/bootstrap/bootstrap-theme.min.css" />
    <link rel="stylesheet" type="text/css" href="../lib/jquery-ui-lightness/jquery-ui-1.10.4.min.css" />
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RBM094ZZ2X"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-RBM094ZZ2X');
    </script>

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Christmas Windows</title>
</head>
<body>

    <div class="container">

        <h1>Christmas Window Trails</h1>
        <p>Several areas in Durham have organised window displays for you to see. I've collected them here.</p>

    <?php if(isset($_GET['error']) && $_GET['error'] == 'not-found') { ?>
        <div class="alert alert-danger" role="alert">
            Sorry, we could not find what you were looking for. Try one of the links below.
        </div>
    <?php } ?>

<?php
require_once('data.php');
?>

        <div class="row site-cards">
            <?php foreach($areas as $ref => $detail) {?>
            <div class="card rounded col-sm-3 card-<?= $ref; ?> text-center" >
                <a class="card-img-top" href="<?= $ref; ?>"><img src="images/card-<?= $ref; ?>.png" class="rounded"></a>
                <div class="card-body">
                    <h3 class="card-title"><?= $detail['name']; ?></h3>
                    <p class="card-text"><?= $detail['description']; ?></p>
                    <div class="row text-center">
                        <?php
                            if(isset($detail['umap_url'])) { echo '<a href="'. $ref .'" class="mx-auto btn btn-primary">View map</a> '; }
                            if(isset($detail['pdf'])) { echo '<a href="files/'. $detail['pdf'] .'" class="mx-auto btn btn-primary">Download PDF</a>'; }
                            if(isset($detail['image'])) { echo '<a href="files/'. $detail['image'] .'" class="mx-auto btn btn-primary">View leaflet</a>'; }
                        ?>
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>


            <div class="bottom-half">
            <p>
                Christmas Trails of Durham. Created by <a href="http://twitter.com/gregorymarler">Gregory Marler</a>. <br>Send details of other trails to <em>christmas@durhamlights.com</em>.
            </p>
        </div>
    </div>


</div>


<script type="text/javascript" src="../lib/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="../lib/bootstrap/bootstrap.min.js"></script>

</body>
</html>