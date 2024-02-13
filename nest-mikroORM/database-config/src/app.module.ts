import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { LoadStrategy, MySqlDriver } from '@mikro-orm/mysql';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      // specify that we want to use mysql database
      driver: MySqlDriver,
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      // password:
      dbName: 'wales_nestjs', //name of database in mysql?
      //
      debug: true, //allows us to see sql in the terminal
      entitiesTs: ['src/**/*.entity.ts'],
      entities: ['dist/**/*.entity.ts'],
      loadStrategy: LoadStrategy.JOINED,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
