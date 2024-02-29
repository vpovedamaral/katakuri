import { PartialType } from '@nestjs/mapped-types';
import { CreateMotoDto } from './create-moto.dto';

export class UpdateMotoDto extends PartialType(CreateMotoDto) {
  readonly marque?: string;
  readonly modele?: string;
  readonly annee?: number;
}
