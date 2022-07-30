import { Test, TestingModule } from '@nestjs/testing';
import { MonthlyExpensesController } from './monthly-expenses.controller';
import { MonthlyExpensesService } from './monthly-expenses.service';

describe('MonthlyExpensesController', () => {
  let controller: MonthlyExpensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonthlyExpensesController],
      providers: [MonthlyExpensesService],
    }).compile();

    controller = module.get<MonthlyExpensesController>(MonthlyExpensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
