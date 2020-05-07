import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

interface Request {
  email: string;
  password: string;
  name: string;
}

class CreateUserService {
  public async execute({ email, name, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const findExistUser = await userRepository.findOne({
      where: { email },
    });

    if (findExistUser) {
      throw new Error('User already exists!');
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: passwordHash,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
