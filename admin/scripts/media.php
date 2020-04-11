<?php

function searchMedia($term){
    $pdo = Database::getInstance()->getConnection();

    $search_query = "SELECT * FROM tbl_media WHERE media_title LIKE '%$term%'";
    $search_set = $pdo->prepare($search_query);
    $search_res = $search_set->execute(
        array(
            ':term'=>$term
        )
    );

    $medias = array();

    if($search_res){
        while($media = $search_set->fetch(PDO::FETCH_ASSOC)) {
            $currentmedia = array();

            $currentmedia['id'] = $media['media_id'];
            $currentmedia['art'] = $media['media_art'];
            $currentmedia['title'] = $media['media_title'];
            $currentmedia['year'] = $media['media_year'];
            $currentmedia['type'] = $media['media_type'];
            $currentmedia['desc'] = $media['media_description'];
            $currentmedia['file'] = $media['media_file'];

            $medias[] = $currentmedia;
        }

        return json_encode($medias);
    }else{
        return 'There was an error with the query';
    }
}

function getMovies(){
    $pdo = Database::getInstance()->getConnection();

    $media_query = "SELECT * FROM tbl_media WHERE media_type = 'movie'";
    $media_set = $pdo->prepare($media_query);
    $media_res = $media_set->execute();

    $medias = array();

    if($media_res){
        while($media = $media_set->fetch(PDO::FETCH_ASSOC)) {
            $currentmedia = array();

            $currentmedia['id'] = $media['media_id'];
            $currentmedia['art'] = $media['media_art'];
            $currentmedia['title'] = $media['media_title'];
            $currentmedia['year'] = $media['media_year'];
            $currentmedia['type'] = $media['media_type'];
            $currentmedia['desc'] = $media['media_description'];
            $currentmedia['file'] = $media['media_file'];

            $medias[] = $currentmedia;
        }

        return json_encode($medias);
    }else{
        return 'There was an error with the query';
    }
}

function getMusic(){
    $pdo = Database::getInstance()->getConnection();

    $media_query = "SELECT * FROM tbl_media WHERE media_type = 'music'";
    $media_set = $pdo->prepare($media_query);
    $media_res = $media_set->execute();

    $medias = array();

    if($media_res){
        while($media = $media_set->fetch(PDO::FETCH_ASSOC)) {
            $currentmedia = array();

            $currentmedia['id'] = $media['media_id'];
            $currentmedia['art'] = $media['media_art'];
            $currentmedia['title'] = $media['media_title'];
            $currentmedia['year'] = $media['media_year'];
            $currentmedia['type'] = $media['media_type'];
            $currentmedia['desc'] = $media['media_description'];
            $currentmedia['file'] = $media['media_file'];

            $medias[] = $currentmedia;
        }

        return json_encode($medias);
    }else{
        return 'There was an error with the query';
    }
}

function getShows(){
    $pdo = Database::getInstance()->getConnection();

    $media_query = "SELECT * FROM tbl_media WHERE media_type = 'show'";
    $media_set = $pdo->prepare($media_query);
    $media_res = $media_set->execute();

    $medias = array();

    if($media_res){
        while($media = $media_set->fetch(PDO::FETCH_ASSOC)) {
            $currentmedia = array();

            $currentmedia['id'] = $media['media_id'];
            $currentmedia['art'] = $media['media_art'];
            $currentmedia['title'] = $media['media_title'];
            $currentmedia['year'] = $media['media_year'];
            $currentmedia['type'] = $media['media_type'];
            $currentmedia['desc'] = $media['media_description'];
            $currentmedia['file'] = $media['media_file'];

            $medias[] = $currentmedia;
        }

        return json_encode($medias);
    }else{
        return 'There was an error with the query';
    }
}

function getTrending(){
    $pdo = Database::getInstance()->getConnection();

    $media_query = "SELECT * FROM tbl_media WHERE media_year > 1998 ORDER BY media_year DESC";
    $media_set = $pdo->prepare($media_query);
    $media_res = $media_set->execute();

    $medias = array();

    if($media_res){
        while($media = $media_set->fetch(PDO::FETCH_ASSOC)) {
            $currentmedia = array();

            $currentmedia['id'] = $media['media_id'];
            $currentmedia['art'] = $media['media_art'];
            $currentmedia['title'] = $media['media_title'];
            $currentmedia['year'] = $media['media_year'];
            $currentmedia['type'] = $media['media_type'];
            $currentmedia['desc'] = $media['media_description'];
            $currentmedia['file'] = $media['media_file'];

            $medias[] = $currentmedia;
        }

        return json_encode($medias);
    }else{
        return 'There was an error with the query';
    }
}


//kids functions

function getKidsMedia(){
    $pdo = Database::getInstance()->getConnection();

    $media_query = "SELECT * FROM tbl_media WHERE kid_friendly = 1";
    $media_set = $pdo->prepare($media_query);
    $media_res = $media_set->execute();

    $medias = array();

    if($media_res){
        while($media = $media_set->fetch(PDO::FETCH_ASSOC)) {
            $currentmedia = array();

            $currentmedia['id'] = $media['media_id'];
            $currentmedia['art'] = $media['media_art'];
            $currentmedia['title'] = $media['media_title'];
            $currentmedia['year'] = $media['media_year'];
            $currentmedia['type'] = $media['media_type'];
            $currentmedia['desc'] = $media['media_description'];
            $currentmedia['file'] = $media['media_file'];

            $medias[] = $currentmedia;
        }

        return json_encode($medias);
    }else{
        return 'There was an error with the query';
    }
}

function searchKidsMedia($term){
    $pdo = Database::getInstance()->getConnection();

    $search_query = "SELECT * FROM tbl_media WHERE media_title LIKE '%$term%' AND kid_friendly = 1";
    $search_set = $pdo->prepare($search_query);
    $search_res = $search_set->execute(
        array(
            ':term'=>$term
        )
    );

    $medias = array();

    if($search_res){
        while($media = $search_set->fetch(PDO::FETCH_ASSOC)) {
            $currentmedia = array();

            $currentmedia['id'] = $media['media_id'];
            $currentmedia['art'] = $media['media_art'];
            $currentmedia['title'] = $media['media_title'];
            $currentmedia['year'] = $media['media_year'];
            $currentmedia['type'] = $media['media_type'];
            $currentmedia['desc'] = $media['media_description'];
            $currentmedia['file'] = $media['media_file'];

            $medias[] = $currentmedia;
        }

        return json_encode($medias);
    }else{
        return 'There was an error with the query';
    }
}