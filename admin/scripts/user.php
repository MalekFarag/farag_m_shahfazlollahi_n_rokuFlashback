<?php 


function getSingleUser($id){
    $pdo = Database::getInstance()->getConnection();
    //TODO: execute the proper SQL query to fetch the user data whose user_id = $id
    $get_user_query = 'SELECT * FROM tbl_user WHERE user_id = :id';
    $get_user_set = $pdo->prepare($get_user_query);
    $get_user_result = $get_user_set->execute(
        array(
            ':id'=>$id
        )
    );

    //TODO: if the execution is successful, return the user data
    // Otherwise, return an error message
    if($get_user_result){
        return $get_user_set;
    }else{
        return 'There was a problem accessing the user';
    }
}

function getAllUsers(){
    $pdo = Database::getInstance()->getConnection();

    $get_user_query = 'SELECT * FROM tbl_user';
    $get_user_set = $pdo->prepare($get_user_query);
    $get_user_result = $get_user_set->execute();

    $users = array();

    if ($get_user_result) {
        while($user = $get_user_set->fetch(PDO::FETCH_ASSOC)) {
            // parse all the users' info like we did for a single and pass them 
            // into the users array

            $currentuser = array();

            $currentuser['id'] = $user['user_id'];
            $currentuser['admin'] = $user['user_admin'];
            $currentuser['avatar'] = $user['user_avatar'];
            $currentuser['permissions'] = $user['user_permissions'];
            $currentuser['uname'] = $user['user_name'];
            $currentuser['fname'] = $user['user_fname'];

            $users[] = $currentuser;
        }

        return json_encode($users);
    } else {
        return 'There was a problem getting the users';
    }
}

function editUser($id, $fname, $username, $password, $email){
    //TODO: set up database connection
    $pdo = Database::getInstance()->getConnection();

    //TODO: Run the proper SQL query to update tbl_user with proper values
    $update_user_query = 'UPDATE tbl_user SET user_fname = :fname, user_name = :username,';
    $update_user_query .= ' user_pass=:password, user_email =:email WHERE user_id = :id';
    $update_user_set = $pdo->prepare($update_user_query);
    $update_user_result = $update_user_set->execute(
        array(
            ':fname'=>$fname,
            ':username'=>$username,
            ':password'=>$password,
            ':email'=>$email,
            ':id'=>$id
        )
    );

    // echo $update_user_set->debugDumpParams();
    // exit;

    //TODO: if everything goes well, redirect user to index.php
    // Otherwise, return some error message...
    if($update_user_result){
        redirect_to('index.php');
    }else{
        return 'Guess you got canned...';
    }
}

function deleteUser($id){
    $pdo = Database::getInstance()->getConnection();
    $delete_user_query = 'DELETE FROM tbl_user WHERE user_id = :id';
    $delete_user_set = $pdo->prepare($delete_user_query);
    $delete_user_result = $delete_user_set->execute(
        array(
            ':id'=>$id
        )
    );

    //If everything went through, redirect to admin_deleteuser.php
    //Otherwise, return false
    if($delete_user_result && $delete_user_set->rowCount() > 0){
        redirect_to('admin_deleteuser.php');
    }else{
        return false;
    }
}