import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../user/entity/user.entity';
import { UserEntityList } from './user-entity-list.mock';

export const usersRepositoryMock = {
  provide: getRepositoryToken(UserEntity),
  useValue: {
    exists: jest.fn().mockResolvedValue(true),
    create: jest.fn(),
    update: jest.fn(),
    save: jest.fn().mockResolvedValue(UserEntityList[0]),
    find: jest.fn().mockResolvedValue(UserEntityList),
    findOneBy: jest.fn().mockResolvedValue(UserEntityList[0]),
    delete: jest.fn(),
  },
};
