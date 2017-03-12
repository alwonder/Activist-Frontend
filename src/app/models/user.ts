export class User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  secondName: string;
  lastName: string;
  birthDate: Date;
  group: number;
  gender: number;
  avatar: string;
}

export class JoinedUser {
  users: User;
  asVolonteur: boolean;
  formId: number;
}
