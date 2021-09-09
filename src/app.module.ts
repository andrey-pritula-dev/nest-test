import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {ApiModule} from './api/api.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.development', '.env.production'],
            isGlobal: true,
        }),
        ApiModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
