<?php
    require_once('data.php');
    $area = $areas[$_GET['url']];
    if(empty($area)) {
        header('Location: error-not-found');
        exit;
    }
?>
<html>
<head>

    <link rel="stylesheet" type="text/css" href="../../lib/bootstrap/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="../../lib/bootstrap/bootstrap-theme.min.css" />
    <link rel="stylesheet" type="text/css" href="../../lib/jquery-ui-lightness/jquery-ui-1.10.4.min.css" />
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RBM094ZZ2X"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-RBM094ZZ2X');
    </script>

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?= (isset($area['long-heading']) ? $area['long-heading'] : "Local Christmas Windows"); ?></title>
</head>
<body>

<div class="container">

    <h1><?= $area['long-heading']; ?></h1>
    <p><?= $area['description']; ?></p>


    <nav aria-label="Links to other pages">
        <ul class="pagination">
            <?php
            if(isset($area['pdf'])) { echo '<li class="page-item"><a class="page-link" href="/christmas/files/'. $area['pdf'] .'">Download PDF</a></li>'; }
            if(isset($area['image'])) { echo '<li class="page-item"><a class="page-link" href="/christmas/files/'. $area['image'] .'">View leaflet</a></li>'; }
            if(isset($area['umap_url'])) { echo '<li class="page-item"><a class="page-link" href="'. $area['umap_url'] .'">Fullscreen map</a></li>'; }
            ?>
            <li class="page-item"><a class="page-link" href="/christmas">Other trails in Durham</a></li>
        </ul>
    </nav>


    <?php if(isset($area['umap_url'])) { ?>
    <div class="row">
        <iframe width="100%" height="500px" frameborder="0" allowfullscreen src="<?= $area['umap_url']; ?>?scaleControl=true&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=false&onLoadPanel=undefined&captionBar=false"></iframe>
    </div>
    <?php } else { ?>
        <p>An interactive map is not available yet.</p>
    <?php } ?>


    <div class="bottom-half">
        <p>
            <a href="/christmas">Christmas Trails of Durham</a>. Created by <a href="http://twitter.com/gregorymarler">Gregory Marler</a>.
            Send details of other trails to <em>christmas@durhamlights.com</em>.
        </p>
    </div>
</div>




<script type="text/javascript" src="../../lib/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="../../lib/bootstrap/bootstrap.min.js"></script>

</body>
</html>