import { Test, TestingModule } from '@nestjs/testing';
import { OtherLoansController } from './other-loans.controller';
import { OtherLoansService } from './other-loans.service';

describe('OtherLoansController', () => {
  let controller: OtherLoansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OtherLoansController],
      providers: [OtherLoansService],
    }).compile();

    controller = module.get<OtherLoansController>(OtherLoansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
