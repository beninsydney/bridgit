import { Test, TestingModule } from '@nestjs/testing'
import { OtherLoansService } from './other-loans.service'

describe('OtherLoansService', () => {
  let service: OtherLoansService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtherLoansService]
    }).compile()

    service = module.get<OtherLoansService>(OtherLoansService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
