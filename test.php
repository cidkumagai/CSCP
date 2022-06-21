<?php
    $test = $_REQUEST['id'];
    $json = file_get_contents('./js/test.json');
    $json = json_decode($json, true);
    $title = $json['recipe'][$test]["title"];
    $texts = preg_split("/[\n]/", $json['recipe'][$test]["text"]);
    $img = $json['recipe'][$test]["img"];
    $recipes = $json['recipe'][$test]["recipe"];
    $materials = $json['recipe'][$test]["material"];
    // echo($json['recipe'][$test]["name"]);
?>

<!DOCTYPE html>
<html lang="jp">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="./js/test.js"></script>
    <title>Document</title>
</head>
<body style="margin: 0 auto;">
    <?php
        echo '<h1>'.$title.'</h1>';
    ?>
    <div style="display: flex;">
        <?php
            echo '<img src="'. $img .'" style="width:300px; height:200px;">';
            echo '<div>';
            foreach( $texts as $text) {
                echo '<p>'. $text .'</p>';
            }
            echo '</div>';
        ?>
    </div>
    <p>材料</p>
    <ul>
        <?php
            foreach( $materials as $material) {
                echo '<div style="display:flex; justify-content:space-between; width: 250px; border-bottom: 1px solid #000000;">';
                echo '<p>'. $material[0] . '</p>';
                echo '<p>'. $material[1] . '</p>';
                echo '</div>';
            }
        ?>
    </ul>
    <p>レシピ</p>
    <ul style="list-style:none">
        <?php
            $number = 1;
            foreach( $recipes as $recipe) {
                echo '<li>'. $number++. ':' .$recipe .'</li>';
            }
        ?>
    </ul>
</body>
</html>