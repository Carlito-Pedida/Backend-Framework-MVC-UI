import { RequestHandler } from "express";
import { Petshop } from "../models/petShop";

export const defaultView: RequestHandler = (req, res, next) => {
  res.redirect("/main");
};

export const allPets: RequestHandler = async (req, res, next) => {
  let petList: Petshop[] = await Petshop.findAll();
  res.render("all-view", { petList });
};

export const onePetView: RequestHandler = async (req, res, next) => {
  let petItemId = req.params.petId;
  let petItem: Petshop | null = await Petshop.findByPk(petItemId);

  if (petItem) {
    res.render("pet-info", { foundPet: petItem });
  } else {
    res.status(404).render("error", {
      message: "Pet Info Not Found!",
    });
  }
};

export const addPetPage: RequestHandler = (req, res, next) => {
  res.render("add-pet");
};

export const addPet: RequestHandler = async (req, res, next) => {
  let newPet: Petshop = req.body;
  await Petshop.create(newPet);
  res.redirect("/main");
};

export const editPetPage: RequestHandler = async (req, res, next) => {
  let petItemId = req.params.petId;
  let petItem: Petshop | null = await Petshop.findOne({
    where: { petId: petItemId },
  });

  if (petItem) {
    res.render("edit-pet", { foundPet: petItem });
  } else {
    res.status(404).render("error", {
      message: "Sorry! Pet not found!",
    });
  }
};

export const editPet: RequestHandler = async (req, res, next) => {
  let petItemId = req.params.petId;
  let updatedPetItem: Petshop = req.body;

  let [updated] = await Petshop.update(updatedPetItem, {
    where: { petId: petItemId },
  });

  if (updated === 1) {
    res.redirect("/main");
  } else {
    res.render("error", {
      message: "Sorry! Pet info could not be updated!",
    });
  }
};

export const deletePet: RequestHandler = async (req, res, next) => {
  let petItemId = req.params.petId;

  let deleted = await Petshop.destroy({
    where: { petId: petItemId },
  });

  if (deleted) {
    res.redirect("/main");
  } else {
    res.status(404).render("error", {
      message: "Sorry! Cannot find pet info!",
    });
  }
};
