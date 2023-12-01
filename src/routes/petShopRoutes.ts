import { Router } from "express";
import {
  addPet,
  addPetPage,
  allPets,
  deletePet,
  editPet,
  editPetPage,
  onePetView,
} from "../controllers/petShopController";

const router = Router();

router.get("/", allPets);

router.get("/add", addPetPage);

router.post("/add", addPet);

router.get("/edit/:petId", editPetPage);

router.post("/edit/:petId", editPet);

router.post("/delete/:petId", deletePet);

router.get("/:petId", onePetView);

export default router;
