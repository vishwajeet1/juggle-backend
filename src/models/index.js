import UserData from './UserData';
import MatchMaking from './MatchMaking';

UserData.hasMany(MatchMaking, { foreignKey: 'senderId', sourceKey: 'id' });
UserData.hasMany(MatchMaking, { foreignKey: 'receiverId', sourceKey: 'id' });
MatchMaking.belongsTo(UserData, { foreignKey: 'senderId', sourceKey: 'id' });
MatchMaking.belongsTo(UserData, { foreignKey: 'receiverId', sourceKey: 'id' });

export { UserData, MatchMaking };
