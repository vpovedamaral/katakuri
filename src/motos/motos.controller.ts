import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from "@nestjs/common";
import { MotosService } from './motos.service';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';
import { Motos } from "./motos.model";

@Controller('motos')
export class MotosController {
  constructor(private readonly motosService: MotosService) {}

  @Post()
  create(@Body() moto: Motos) {
    return this.motosService.create(moto);
  }

  @Get()
  findAll() {
    return this.motosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMotoDto: UpdateMotoDto): Motos {
    return this.motosService.update(+id, updateMotoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Motos {
    return this.motosService.delete({ id: +id });
  }
}
