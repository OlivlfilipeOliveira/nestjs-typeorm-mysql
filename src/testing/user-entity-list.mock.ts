import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const UserEntityList: UserEntity[] = [
  {
    id: 1,
    birthAt: new Date('2000-01-01'),
    email: 'joao@hcode.com.br',
    name: 'João Rangel',
    password: '$2b$10$0X9WakLIxzeKgL10Qyrld.fi6ng2N0PT1aHQBOmEClN/l6aq4yW8C',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    birthAt: new Date('2000-01-01'),
    email: 'filipe@hcode.com.br',
    name: 'Filipe Rangel',
    password: '$2b$10$0X9WakLIxzeKgL10Qyrld.fi6ng2N0PT1aHQBOmEClN/l6aq4yW8C',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    birthAt: new Date('2000-01-01'),
    email: 'ze@hcode.com.br',
    name: 'Zé Rangel',
    password: '$2b$10$0X9WakLIxzeKgL10Qyrld.fi6ng2N0PT1aHQBOmEClN/l6aq4yW8C',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
