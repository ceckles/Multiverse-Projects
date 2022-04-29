import { DataTypes, Model } from 'https://deno.land/x/denodb@v1.0.35/mod.ts'

class User extends Model {
    static table = 'users';
    static timestamp = true;
    
    static fields = {
        id: { primaryKey: true, autoIncrement: true },
        username: { type : DataTypes.STRING},
        password: { type : DataTypes.STRING},
    };
}

export default User;