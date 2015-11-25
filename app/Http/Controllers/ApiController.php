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

    public function getIndex()
    {
        $data = array(
            ["author" => "呵呵", "text" => "this is one comments"],
            ["author" => "Jordan Walke", "text" => "this is *another* comment"]);
        return $data;
    }


    public function getProduct()
    {

        $data = array(
            ["category" => "Sporting Goods", "price" => "$49.99", "stocked" => true, "name" => "Football"],
            ["category" => "Sporting Goods", "price" => "$9.99", "stocked" => true, "name" => "Baseball"],
            ["category" => "Sporting Goods", "price" => "$29.99", "stocked" => false, "name" => "Basketball"],
            ["category" => "Electronics", "price" => "$99.99", "stocked" => false, "name" => "iPod Touch"],
            ["category" => "Electronics", "price" => "$399.99", "stocked" => false, "name" => "iPhone 5"],
            ["category" => "Electronics", "price" => "$199.99", "stocked" => true, "name" => "Nexus 7"]
        );

        return $data;
    }


    public function postIndex(Request $request)
    {

        return array($request->get('data'));
        /*$data = array(
            ["author" => "呵呵", "text" => "this is one comments"],
            ["author" => "Jordan Walke", "text" => "this is *another* comment"]);
        return $data;*/
    }


}