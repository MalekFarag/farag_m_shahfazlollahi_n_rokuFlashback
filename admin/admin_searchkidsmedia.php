<?php 
require_once '../load.php';

if(isset($_GET['term'])){
    $term = $_GET['term'];
    $media = searchKidsMedia($term);

    echo $media;
}