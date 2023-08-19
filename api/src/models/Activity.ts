import { Sequelize, DataTypes,Model } from "sequelize";


export default (sequelize: Sequelize) => {
    class Activity extends Model{
        public id!: string;
        public name!: string;
        public difficulty!: number;
        public duration?: number | null;
        public season!: 'Summer' | 'Spring' | 'Autumn' | 'Winter';
        public createdInDb!: boolean;
    }
    Activity.init(
    {    
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        difficulty:{
            type: DataTypes.INTEGER,
            allowNull:false,
            validate: {
                min: 1,
                max: 5,
            },
        },
        duration:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        season:{
            type: DataTypes.ENUM('Summer','Spring', 'Autumn', 'Winter'),
            allowNull:false,
        },
        createdInDb: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    },
    {
        sequelize,
        modelName: 'activity',
        timestamps: false,
    }
    )
    return Activity;
};