import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDogInput, Dog, UpdateDogInput } from 'src/types/graphql';

@Injectable()
export class DogService {
  constructor(private prisma: PrismaService) {}
  create({ name, type, ownerId }: CreateDogInput) {
    return this.prisma.dog.create({
      data: {
        name,
        type,
        ownerId,
      },
    });
  }

  async findAll() {
    return await this.prisma.dog.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.dog.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateDogInput) {
    return this.prisma.dog.update({
      where: { id },
      data: data,
    });
  }

  remove(id: number) {
    return this.prisma.dog.delete({
      where: { id },
    });
  }
}
