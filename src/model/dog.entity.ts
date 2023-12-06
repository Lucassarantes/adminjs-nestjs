import { Table, Column, Model, DataType, AllowNull } from 'sequelize-typescript';

interface DogAttributes {
    id: number;
    name: string;
    age: number;
    sex: string;
    breed: string;
}

interface DogCreationAttributes extends Omit<DogAttributes, 'id'> {}

@Table
export class Dog extends Model<DogAttributes, DogCreationAttributes> {
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    })
    declareId: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    age: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    sex: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    breed: string;
}

export default Dog;
