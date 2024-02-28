import { Inject, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { CONFIG_OPTIONS } from './constants';
import { ConfigOptions, EnvConfig } from './interfaces';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  // Configuration du fichier a lire
  constructor(@Inject(CONFIG_OPTIONS) options: ConfigOptions) {

    const filePath = `${process.env.NODE_ENV || 'proprietes'}.env`;
    const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
    // Enregistrement du fichier lu
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  // Récupérer le champs souhaiter dans le fichier
  get(key: string): string {
    return this.envConfig[key];
  }
}
