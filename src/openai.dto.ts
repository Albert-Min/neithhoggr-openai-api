import { ApiProperty } from '@nestjs/swagger';
import { CreateCompletionRequest } from 'openai';

export class CreateCompletionRequestDTO implements CreateCompletionRequest {
  @ApiProperty({
    default: 100,
    type: Number,
    required: false,
  })
  max_tokens: number;
  @ApiProperty({
    default: 'text-davinci-003',
    type: String,
    required: false,
  })
  model: string;
  @ApiProperty({ type: String })
  prompt: string;
  @ApiProperty({
    default: 0,
    type: Number,
    required: false,
  })
  temperature: number;
}
