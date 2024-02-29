import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';
import { Motos } from './motos.model';
import { DeleteMotoDto } from "./dto/delete-moto.dto";
@Injectable()
export class MotosService {

  private readonly motos: Motos[] = require('./motos.json');
  create(createMotoDto: CreateMotoDto) {
    const newMoto: Motos = {
      id: this.motos.length + 1,
      ...createMotoDto,
    };
    this.motos.push(newMoto);
    return newMoto;
  }

  findAll() {
    return this.motos;
  }

  findOne(id: number) {
    return this.motos.find(moto => moto.id === +id);
  }

  update(id: number, updateMotoDto: UpdateMotoDto) {
    const motoIndex = this.motos.findIndex(moto => moto.id === id);
    if (motoIndex === -1) {
      throw new NotFoundException(`Moto with id ${id} not found`);
    }
    this.motos[motoIndex] = { ...this.motos[motoIndex], ...updateMotoDto };
    return this.motos[motoIndex];
  }

  delete(deleteMotoDto: DeleteMotoDto) {
    const motoIndex = this.motos.findIndex(moto => moto.id === deleteMotoDto.id);
    if (motoIndex === -1) {
      throw new NotFoundException(`Moto with id ${deleteMotoDto.id} not found`);
    }
    const deletedMoto = this.motos.splice(motoIndex, 1);
    return deletedMoto[0];
  }
}
