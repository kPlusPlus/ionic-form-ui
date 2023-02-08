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
  private res: any;

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
    const data = 'useremail=' + this.useremail + '&userpsw=' + this.userpsw;

    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    /*
    this.httpClient.post(this.serverurl + 'cmemb.php', data, { headers }).subscribe(datas => data);
    */


    // ovo radi
    /*
          this.httpClient.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
              this.userid = data.id;
          });
    */

    this.httpClient.post<any>(this.serverurl + 'cmemb.php?useremail='+ this.useremail +'&userpsw='+this.userpsw,
    {useremail:this.useremail,userpsw:this.userpsw }).subscribe(datas => {
      this.userid = datas.ID;
      console.log(datas);
    });


    /*
        this.httpClient.get('https://randomuser.me/api/?results=10')
          .map(res => res.json())
          .subscribe(res => {
            this.userid = res.results;
          }, (err) => {
            alert("failed loading json data");
          });
    */


  }
}

