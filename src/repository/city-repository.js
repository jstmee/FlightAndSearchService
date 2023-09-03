//requiring city model
const {City}=require('../models/index');

class CityRepository{
    async createCity({name}){
        try {
            const city=await City.create({
                name
            });
            return city;
            
        } catch (error) {
            // throw {error};
            console.log("something went wrong in repository");
            throw {error};
            
        }
    }
    async deleteCity(cityId){
        try {
            await City.destory({
                where:{
                    id:cityId
                }
            });
            
        } catch (error) {
            console.log("something went wrong in repository");
            throw {error};
            
            
        }
    }
    async updateCity(cityId,data){//data={name : "prayagraj"}
        try {

            const city=await City.update(data,{
                where:{
                    id:cityId
                }
            });
            return city;
            
        } catch (error) {
            console.log("something went wrong in repository");
            throw {error};
            
        }
    }

    async getCity(cityId){

        try {
            const city=await City.findPk(cityId);
            return city;
            
        } catch (error) {
            console.log("something went wrong in repository");
            throw {error};
            
        }


    }
}

module.exports=CityRepository;
