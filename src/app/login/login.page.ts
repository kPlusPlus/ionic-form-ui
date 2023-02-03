import { Component, OnInit } from '@angular/core';
declare let $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const ime = 'kreso';

    /*
    $(document).ready(function () {
      alert("Hello from New to design")
    });
    */
  }

  btnClicked() {
    //console.log("just clicked meeee");
    let serverurl = 'http://kplusplus.ddns.net:8080/';
    let useremail = $('[name=\'useremail\']').val();
    let userpsw = $('[name=\'userpsw\']').val();
    alert(userpsw);
    $('#userid').val(555);

    $.ajax({
      url: serverurl + 'cmemb.php',
      data: { useremail, userpsw },              // $('#formA').serialize(),
      type: 'POST',
      success(data) {
        if (data === 'no user') {
          alert('no user with this login');
          return false;
        }
        const USRID = data;
        //$("#userid").val(USRID).trigger('create');          // print user id on form with GPS
        $('#userid').val(USRID);
        alert(USRID);
        return true;
      },
      fail(data) {
        alert('Err 16. Internet connection problem');
      }
    }
    );

  }



}
