import { PartialType } from '@nestjs/mapped-types'
import { CreateOtherLoanDto } from './create-other-loan.dto'

export class UpdateOtherLoanDto extends PartialType(CreateOtherLoanDto) {}
