import { DataTypes, Model } from 'https://deno.land/x/denodb@v1.0.35/mod.ts'

class Character extends Model {
    static table = 'character';
    static timestamp = true;
    
    static fields = {
        id: { primaryKey: true, autoIncrement: true },
        name: { type : DataTypes.STRING},
    };
}

export default Character;