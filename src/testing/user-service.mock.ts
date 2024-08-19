import { UserService } from '../user/user.service';
import { UserEntityList } from './user-entity-list.mock';

export const userServiceMock = {
  provide: UserService,
  useValue: {
    show: jest.fn().mockReturnValue(UserEntityList[0]),
    create: jest.fn().mockReturnValue(UserEntityList[0]),
    list: jest.fn().mockReturnValue(UserEntityList),
    update: jest.fn().mockReturnValue(UserEntityList[0]),
    updatePartial: jest.fn().mockReturnValue(UserEntityList[0]),
    delete: jest.fn().mockReturnValue(true),
    exists: jest.fn().mockReturnValue(true),
  },
};
