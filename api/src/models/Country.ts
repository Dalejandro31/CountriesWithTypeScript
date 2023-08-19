import { Sequelize, DataTypes,Model } from "sequelize";


export default (sequelize: Sequelize) => {
    class Country extends Model{
        public id!: string;
        public name!: string;
        public flag!: string;
        public region!: string;
        public capital!: string ;
        public subregion!:string;
        public area!: number;
        public population!:number;
        public createdInDb!: boolean;
    }
    Country.init(
    {    
        id:{
            type:DataTypes.STRING,
            primaryKey: true,
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        flag:{
            type:DataTypes.TEXT,
            allowNull:true,
        },
        region:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        capital:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        subregion:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        area:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        population:{
            type:DataTypes.INTEGER,
            allowNull: true,
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
    return Country;
};