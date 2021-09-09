import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ApiResponse, PaginationParams } from './interfaces';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get(['/limit/:limit/offset/:offset', ''])
  getData(@Param() param: PaginationParams): Observable<AxiosResponse<ApiResponse>> {
    try {
      return this.apiService.getMarketstakData(param);
    } catch (e) {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
