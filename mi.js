/**
 * Created by Shellin on 2017/7/26.
 */

window.onload= function () {

//下拉购物车
    var myInput=document.getElementsByClassName("search_text")[0];
    var myData=document.getElementById("search_data");
    var data=["小米6","红米Note 4X","小米MIX","小米Max2","小米手机5c","手环","耳机","充电宝","运动鞋","路由器","小米盒子"];



    function showList() {
        var str="";
        for(var i=0;i<data.length;i++){
            str+="<li>"+data[i]+"</li>";
        }

        myData.innerHTML=str;
        var list = document.querySelectorAll("#search_data li");

        for(var i = 0; i < list.length; i++) {
            list[i].onclick = function() {
                list[i].className="gray";
                console.log(list[i]);
                myInput.innerHTML = this.innerText;
            }
        }
    }
    myInput.onfocus = showList();






//下拉菜单

    var list = document.querySelectorAll("#main_list>li")
    var child_list = document.querySelector("#child_list");
    var main_child = document.querySelectorAll("#main_child>ul");
    var contain = document.querySelector("#contain");
    function init1(){
        var main_child = document.querySelectorAll("#main_child>ul");
        for(var j=0;j<main_child.length;j++){
            main_child[j].className="hideIt";
        }
    }
   init1();
    for(var i = 0; i < list.length-2; i++) {
        list[i].index=i;
        list[i].onmouseenter = function() {
            var main_child = document.querySelectorAll("#main_child>ul");
            child_list.className = "child_list";
            main_child[this.index].className="showIt";
        }
        list[i].onmouseleave = function(ev) {
            var obj = ev.relatedTarget;
            if(obj.id == "child_list") {
            } else if(!isChild(child_list, obj)) {
                child_list.className = ""
                main_child[this.index].className="hideIt";
            }
        }
    }

    child_list.onmouseleave = function() {
        init1();
        this.className = ""
    }



    function isChild(p, s) {
        while(s.tagName != "BODY") {
            if(s.parentNode == p) {
                return 1;
            }
            //向上去一层
            s = s.parentNode;
        }
        return 0;
    }



    //单品
    var flag= 0,timer;
    var btn=document.querySelectorAll(".star_more a");
    var box=document.getElementById("star_box_ul");
    var more=document.getElementsByClassName("star_more")[0];



    btn[0].onclick=function(){
        flag= 0;

        box.className=" control_prev1";
        console.log(btn[0].className);
        btn[0].className=" disable";
        this.nextElementSibling.className = "";
    }
    btn[1].onclick=function(){
        flag=1;
        box.className = " control_next1";
        btn[1].className = "disable"
        this.nextElementSibling.className = "";
    }

    function auto(){
        if(flag==0){
            flag=1;
            box.className="control_next1";
            btn[0].className = "";
            btn[0].className="disable";
        }else if(flag==1){
            flag=1;
            box.className="control_next1";
            btn[1].className="disable";
            btn[0].className = ""
        }
    }

    timer=setInterval(auto,2000);
    more.onmouseover=function(){
        clearInterval(timer);
    }
    more.onmouseout=function(){
        timer = setInterval(auto, 2000);
    }
/*
    $(".control_prev").click(function(){
        flag=1;
        $(".star_box_ul").attr("class","control_prev1");

    });
    $(".control_next").click(function(){
        flag=0;
        console.log("w");
        $(".star_box_ul").attr("class","control_next1");
    });
    /*var prev=document.getElementsByClassName("control_prev");
    var next=document.getElementsByClassName("control_next");
    console.log(prev);
    prev.onclick(function(){
        console.log("23");
        alert("23");
    });*/

//选项卡



    function change_tab(myId){

        var btn=document.querySelectorAll(myId+ " .page_main_nav ul li");
        var tab=document.querySelectorAll(myId+ " .page_main_list ul");


        for(var i=0;i<btn.length;i++){
            btn[i].index=i;
            btn[i].onmouseover=function(){
                init();
                this.className="tab_active";
                tab[this.index].className="showIt";
            }
        }
        function init(){
            for(var i=0;i<btn.length;i++){
                btn[i].className="disabled";
                tab[i].className="hideIt";
            }
        }
    }
    change_tab("#tab_1");
     /*   var i=getIndex();
        function getIndex(){
            $(myId+ " .page_main_nav ul li").mouseover(function(){
            var index;
                init();
                this.className="tab_active";
                index=$(this).index();
                //index=$(myId+ " .page_main_list ul");
                return index;
               // console.log($(myId+ " .page_main_list ul")[$(this).index()]);

            });
        }
        function init(){
            $(myId+ " .page_main_nav ul li").removeClass("tab_active").addClass("disabled");
            $(myId+ " .page_main_list ul").hide();
        }
        $(myId+ " .page_main_list ul")[i].show();
    }*/









}
