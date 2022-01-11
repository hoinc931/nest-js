import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepo: Repository<CategoryEntity>,
  ) {}

  async findAll(): Promise<CategoryEntity[]> {
    const data = await this.categoryRepo.find();
    return data;
  }

  async findOne(id: string): Promise<CategoryEntity> {
    return await this.categoryRepo.findOne(id);
  }

  async create(cate: CategoryEntity): Promise<CategoryEntity> {
    return await this.categoryRepo.save(cate);
  }

  async update(cate: CategoryEntity): Promise<UpdateResult> {
    return await this.categoryRepo.update(cate.id, cate);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.categoryRepo.delete(id);
  }
}
