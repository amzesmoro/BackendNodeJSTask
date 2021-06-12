module.exports = (sequelize, type) => {
    return sequelize.define('logs_hit_omdbapi', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        url: type.STRING,
        api_endpoint: type.STRING,
        parameters: {
            type: type.JSONB,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: {
                    msg: "Parameter can't be empty!"
                },
            },
        },
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: type.NOW,
        }
    }, 
    {
        timestamps: false,
        freezeTableName: true
    });
};