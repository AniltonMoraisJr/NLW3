import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';
import { Router } from 'express';

const routes = Router();

routes.post("/orphanages", async (request, response) => {

  try {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    } = request.body;
  
    const orphanagesRepository = getRepository(Orphanage);
  
    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    });
  
    await orphanagesRepository.save(orphanage);
  
    return response.status(201).json(orphanage);
    
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
    
});

export default routes;