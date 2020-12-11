<?php
$myfile = fopen("light-request.txt", "w");
if(!$myfile) {
    $request_result = false;
    } else {
    $txt = time();
    fwrite($myfile, $txt);
    fclose($myfile);
    $request_result  = true;
}
?>
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
    <title>Christmas Star</title>
</head>
<body>

    <div class="container">
    <h1>Watch the window...</h1>

        <?php
        if($request_result) {
            echo '<p>You may have to wait 10 seconds. Some changes are subtle.</p>';
        } else {
            echo '<p>There seems to be an issue, there may be too many requests tonight.';
        }
        ?>

        <nav aria-label="Links to other pages">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="/xmasstar">Return to window info</a></li>
                <li class="page-item"><a class="page-link" href="/christmas/belmont">Other Belmont windows</a></li>
                <li class="page-item"><a class="page-link" href="/christmas">Other Durham windows</a></li>
            </ul>
        </nav>
        <p>Behind the scenes pictures/video coming later...</p>

    </div>


</div>


<script type="text/javascript" src="../lib/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="../lib/bootstrap/bootstrap.min.js"></script>

</body>
</html>