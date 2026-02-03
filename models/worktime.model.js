const {DataTypes} = require('sequelize');
module.exports = (sequelize)=>{
    const Worktime=sequelize.define(
        'worktimes',
        {
            id:{
                type:DataTypes.UUID,
                primaryKey: true,
                defaultValue:DataTypes.UUIDV4
            },
            userId: {
                type:DataTypes.UUID,
                allowNull:false
            },
            date: {
                type:DataTypes.DATEONLY,
                allowNull:false
            },
            start: {
                type:DataTypes.STRING(5),
                allowNull:false
            },
            end: {
                type:DataTypes.STRING(5),
                allowNull:false
            }
        },
    {
        timestamps:true,
        indexes: [
            {
                fields:['userId']
            }
        ]
    }

    );

    return Worktime;
}