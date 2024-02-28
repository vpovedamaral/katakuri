import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {

  private nomEnv: string;
  private dataBase: string;
  private userNameDB: string;
  private mdpDB: string;


  constructor(configService: ConfigService) {
    this.nomEnv = configService.get('NOM_ENV');
    this.dataBase = configService.get('DATA_BASE');
    this.userNameDB = configService.get('USERNAME_DB');
    this.mdpDB = configService.get('MDP_DB');
  }

  getHello(): string {
    return 'Vous etes sur l api de ' + this.nomEnv;
  }
  getInfo(): string{
    return 'Toutes les informations : \n' + 'Environnement choisi : ' + this.nomEnv
        + '\nBase de donnees : ' + this.dataBase
        + '\nutilisateur utilise : ' + this.userNameDB
        + '\nmot de passe DB (ceci est pour exemple et a ne pas reproduire) : ' + this.mdpDB ;
  }
}
