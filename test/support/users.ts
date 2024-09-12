export type User = {
  email: string;
  password: string;
};

enum UserName {
  ADMIN = 'admin',
  BIANCUNHA = 'biancunha',
  GROWDEV = 'growdev',
}

type UserList = {
  [key in UserName]: User;
};

export const userList: UserList = {
  [UserName.ADMIN]: { email: 'admin@admin.com', password: '2020' },
  [UserName.BIANCUNHA]: { email: 'biancunha@gmail.com', password: '123456' },
  [UserName.GROWDEV]: { email: 'growdev@growdev.com.br', password: 'growdev123' },
};
