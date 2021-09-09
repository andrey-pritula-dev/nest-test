import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';
import { HttpModule } from '@nestjs/axios';
import { ApiService } from './api.service';

describe('ApiController', () => {
  let controller: ApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [ApiController],
      providers: [ApiService]
    }).compile();

    controller = module.get<ApiController>(ApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
