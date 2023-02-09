import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOwnerInput, Owner } from 'src/types/graphql';

@Injectable()
export class OwnerService {
  constructor(private prisma: PrismaService) {}
  create(owner: CreateOwnerInput): Promise<Owner> {
    return this.prisma.owner.create({
      data: owner,
      include: { dogs: true },
    });
  }
  findAll() {
    return this.prisma.owner.findMany();
  }

  findOne(id: number): Promise<Owner> {
    return this.prisma.owner.findUnique({
      where: { id },
      include: { dogs: true },
    });
  }
}
