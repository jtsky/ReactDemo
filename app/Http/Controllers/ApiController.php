<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/11/23
 * Time: 16:56
 */
class ApiController extends Controller
{

    public function index()
    {
        $data = array(
            ["author" => "呵呵", "text" => "this is one comments"],
            ["author" => "Jordan Walke", "text" => "this is *another* comment"]);
        return $data;
    }

    public function aa(Request $request)
    {

        return array($request->get('data'));
        /*$data = array(
            ["author" => "呵呵", "text" => "this is one comments"],
            ["author" => "Jordan Walke", "text" => "this is *another* comment"]);
        return $data;*/
    }
}