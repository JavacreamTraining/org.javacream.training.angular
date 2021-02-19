import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  appName = "P E O P L E"
  company = "Javacream"
  endpoint = "http://h2908727.stratoserver.net:8080/people"
}
