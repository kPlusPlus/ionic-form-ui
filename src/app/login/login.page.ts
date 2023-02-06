/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  serverurl = 'http://kplusplus.ddns.net:8080/';
  useremail = '';
  userpsw = '';
  userid = '';
  //http: HttpClient;

  btnClicked() {

    //this.useremail = $('[name=\'useremail\']').val();
    //this.userpsw = $('[name=\'userpsw\']').val();

    alert(this.userpsw);
    alert(this.userid);


    //$http.post('/someUrl', data, config).then(successCallback, errorCallback);

    //$('#userid').val(555);
    /*
        $.ajax({
          url: serverurl + 'cmemb.php',
          data: { this.useremail, this.userpsw },              // $('#formA').serialize(),
          type: 'POST',
          // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
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
        });

      }
    */
  }
}

