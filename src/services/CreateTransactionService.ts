import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import Category from '../models/Category';

interface TransactionRequest {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: TransactionRequest): Promise<Transaction> {
    const categoryRepository = getRepository(Category);

    const categoryExists = await categoryRepository.findOne({
      where: { title: category },
    });

    let categoryId = '';

    if (categoryExists) {
      categoryId = categoryExists.id;
    } else {
      const createCategory = await categoryRepository.create({
        title: category,
      });

      await categoryRepository.save(createCategory);

      categoryId = createCategory.id;
    }

    if (!['income', 'outcome'].includes(type)) {
      throw new AppError('Type invalid');
    }

    if (!(typeof value === 'number')) {
      throw new AppError('Value must be a number');
    }

    const transactionRepository = getRepository(Transaction);
    const transaction = transactionRepository.create({
      title,
      value,
      type,
      category_id: categoryId,
    });

    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
