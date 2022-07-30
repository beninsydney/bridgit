import { Test, TestingModule } from '@nestjs/testing';
import { IncomePaymentsController } from './income-payments.controller';
import { IncomePaymentsService } from './income-payments.service';

describe('IncomePaymentsController', () => {
  let controller: IncomePaymentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncomePaymentsController],
      providers: [IncomePaymentsService],
    }).compile();

    controller = module.get<IncomePaymentsController>(IncomePaymentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
