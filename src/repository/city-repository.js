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
            await City.destroy({
                where:{
                    id:cityId
                }
            });

            return true;
            
        } catch (error) {
            console.log("something went wrong in repository");
            throw {error};
            
            
        }
    }
    async updateCity(cityId,data){//data={name : "prayagraj"}
        try {
            // this does not return the change values
            // const city=await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            // });
            // return city;
            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
            
        } catch (error) {
            console.log("something went wrong in repository");
            throw {error};
            
        }
    }

    async getCity(cityId){

        try {
            // const city=await City.findPk(cityId);
            const city = await City.findByPk(cityId);

            return city;
            
        } catch (error) {
            console.log("something went wrong in repository");
            throw {error};
            
        }


    }
    async getAllCities(){
        try {
            const cities=await City.findAll();
            return cities;
            
        } catch (error) {
            console.log("something went wrong in repository");
            throw {error};
            
        }
    }
}

module.exports=CityRepository;
