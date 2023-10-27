import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";


interface UserCreationAttrs{
    email:string
    password:string
}

@Table({tableName:'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example:'1', description:'Уникальный идентификатор'})
    @Column({type:DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id: number;

    @ApiProperty({example:'user@gmail.com', description:'Почтовый адрес'})
    @Column({type:DataType.STRING, unique:true, allowNull:false})
    email: string;

    @ApiProperty({example:'P@$$word1', description:'Пароль пользователя'})
    @Column({type:DataType.STRING, allowNull:true})
    password: string;


    @ApiProperty({example:'true', description:'Забанен или нет'})
    @Column({type:DataType.BOOLEAN, defaultValue:false})
    banned: boolean;


    @ApiProperty({example:'Оскорбительное поведение', description:'Причина блокировки'})
    @Column({type:DataType.BOOLEAN, allowNull:true})
    banReason: string;
}