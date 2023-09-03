const {CityService}=require('../services/index');

const cityService=new CityService();
/**
 * POST
 * data->req.body
 */
const create=async (req,res)=>{

    try {
        const city=await cityService.createCity(req.body);

        return res.status(201).json({
            data:city,
            success:true,
            message:'successfully created a city',
            error:{}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to create city',
            error:{error}

        });
    }

}

//delete ->/city/:id
const destory=async(req,res)=>{

    try {

        const response=await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'successfully deleted a city',
            error:{}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to delete city',
            error:{error}

        });
    }
    
}

//GET -> /city/:id
const get=async(req,res)=>{

    try {
        const response=await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'successfully fetched the city',
            error:{}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to get the city',
            error:{error}

        });
    }
    
}
//PATCH ->/city/:id ->req.body
const update=async(req,res)=>{

    try {
        const response=await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:'successfully fetched the city',
            error:{}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to update the city',
            error:{error}

        });
    }
    
}

const getAll= async (req,res)=>{
    try {
        const cities=await cityService.getAllCities(req.query);
        return res.status(200).json({
            data:cities,
            success:true,
            message:'successfully fetched all the city',
            error:{}

        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to get all the city',
            error:{error}

        });
        
    }
}


module.exports={
    create,
    destory,
    get,
    update,
    getAll
}