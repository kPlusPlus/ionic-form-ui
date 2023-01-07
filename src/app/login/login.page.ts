import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
    var ime = "kreso";

    /*
    $(document).ready(function () {
      alert("Hello from New to design")
    });
    */
  }

  btnClicked() {
    //console.log("just clicked meeee");
    var serverurl = "http://kplusplus.ddns.net:8080/";
    var useremail = $("[name='useremail']").val();
    var userpsw = $("[name='userpsw']").val();
    alert(userpsw);

    $.ajax({
      url: serverurl + 'cmemb.php',
      data: { "useremail": useremail, "userpsw": userpsw },              // $('#formA').serialize(),
      type: "POST",
      success: function (data) {
          if (data === 'no user') {
              alert("no user with this login");
              return false;
          }
          var USRID = data;
          //$("#userid").val(USRID).trigger('create');          // print user id on form with GPS
          $("#userid").val(USRID);
          alert(USRID);
      },
      fail: function (data) {
          alert('Err 16. Internet connection problem');
      }
  }
  );




  }



}
