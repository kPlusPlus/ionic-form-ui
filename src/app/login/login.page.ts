/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { RequestOptions } from 'http';
import { HttpHeaders } from '@angular/common/http';
//import { map } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

declare let $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //serverurl = 'http://kplusplus.ddns.net:8080/';
  private serverurl: any = 'http://ubuntu:8080/';
  private useremail = '';
  private userpsw = '';
  private userid = '';
  private res = "";

  constructor(public httpClient: HttpClient) { }

  ngOnInit() { }

  getGetFunction() {
    this.httpClient.get('http://someapi')
      .pipe(map(res => res));
  }

  getPostFunction(yourPara) {
    this.httpClient.get('http://someapi', yourPara)
      .pipe(map(res => res));
  }



  getFilms() {
    return this.httpClient.get('https://swapi.co/api/films');
  }

  btnClicked() {

    //alert(this.userpsw);
    //alert(this.userid);
    //this.userid =  this.httpClient.post(this.serverurl + 'cmemb.php' )

    const body = { useremail: this.useremail, userpsw: this.userpsw };

    //HttpClient.post(this.serverurl + 'cmemb.php' );
    const data = 'user=' + this.useremail + '&password=' + this.userpsw;

    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    this.httpClient.post(this.serverurl + 'cmemb.php', data, { headers }).subscribe(datas => data);

    console.log(this.serverurl + 'cmemb.php');
    console.log(headers);


    this.httpClient.get('https://randomuser.me/api/?results=10')
      .pipe(map(res => this.res));
    console.log('******************************');
    console.log(this.res);
/*
    this.httpClient.get('https://randomuser.me/api/?results=10')
      .map(res => res.json())
      .subscribe(res => {
        this.userid = res.results;
      }, (err) => {
        alert("failed loading json data");
      });
*/

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

