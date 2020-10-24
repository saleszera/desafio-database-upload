import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getRepository(Transaction);

    const deleteTransaction = await transactionRepository.delete(id);

    if (deleteTransaction.affected === 0) {
      throw new AppError('Transaction does not exist!');
    }
  }
}

export default DeleteTransactionService;
