/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { RequestOptions } from 'http';
import { HttpHeaders } from '@angular/common/http';
declare let $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public httpClient: HttpClient) { }

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


  getFilms() {
    return this.httpClient.get('https://swapi.co/api/films');
  }

  btnClicked() {

    //this.useremail = $('[name=\'useremail\']').val();
    //this.userpsw = $('[name=\'userpsw\']').val();

    alert(this.userpsw);
    alert(this.userid);
    //this.userid =  this.httpClient.post(this.serverurl + 'cmemb.php' )


    const body = { user: this.useremail, password: this.userpsw };


    //HttpClient.post(this.serverurl + 'cmemb.php' );
    const data = 'user=' + this.useremail + '&password=' + this.userpsw;

    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );

    this.httpClient.post(this.serverurl + 'cmemb.php', data, { headers });


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

