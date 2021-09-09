import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ApiResponse, PaginationParams } from './interfaces';


@Injectable()
export class ApiService {
  constructor(private httpService: HttpService) {
  }

  getMarketstakData({offset, limit}: PaginationParams): Observable<AxiosResponse<ApiResponse>> {
    const config = {
      params: {
        access_key: process.env.API_ACCESS_KEY,
        symbols: 'AAPL,MSFT',
      },
    };
    if (offset) {
      config.params['offset'] = offset
    }
    if (limit) {
      config.params['limit'] = limit
    }
    return this.httpService
      .get(
        `${process.env.API_BASE_URL}/intraday`,
        config,
      )
      .pipe(
        map((res) => res.data),
      )
  }
}
