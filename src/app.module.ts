import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NewsModule } from './news/news.module';
import { StudentService } from './student/service/student.service';
import { StudentController } from './student/student.controller';

@Module({
  imports: [UserModule, NewsModule],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
