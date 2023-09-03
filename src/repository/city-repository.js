//requiring city model
const {City}=require('../models/index');

class CityRepository{
    async createCity({name}){
        try {
            const city=await City.create({name});
            return city;
            
        } catch (error) {
            throw {error};
            
        }
    }
    async deleteCity(cityid){
        try {
            await City.destory({
                where:{
                    id:cityid
                }
            });
            
        } catch (error) {
            throw {error};
            
        }
    }
}

module.exports=CityRepository;
