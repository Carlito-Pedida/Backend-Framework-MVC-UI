"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePet = exports.editPet = exports.editPetPage = exports.addPet = exports.addPetPage = exports.onePetView = exports.allPets = exports.defaultView = void 0;
const petShop_1 = require("../models/petShop");
const defaultView = (req, res, next) => {
    res.redirect("/main");
};
exports.defaultView = defaultView;
const allPets = async (req, res, next) => {
    let petList = await petShop_1.Petshop.findAll();
    res.render("all-view", { petList });
};
exports.allPets = allPets;
const onePetView = async (req, res, next) => {
    let petItemId = req.params.petId;
    let petItem = await petShop_1.Petshop.findByPk(petItemId);
    if (petItem) {
        res.render("pet-info", { foundPet: petItem });
    }
    else {
        res.status(404).render("error", {
            message: "Pet Info Not Found!",
        });
    }
};
exports.onePetView = onePetView;
const addPetPage = (req, res, next) => {
    res.render("add-pet");
};
exports.addPetPage = addPetPage;
const addPet = async (req, res, next) => {
    let newPet = req.body;
    await petShop_1.Petshop.create(newPet);
    res.redirect("/main");
};
exports.addPet = addPet;
const editPetPage = async (req, res, next) => {
    let petItemId = req.params.petId;
    let petItem = await petShop_1.Petshop.findOne({
        where: { petId: petItemId },
    });
    if (petItem) {
        res.render("edit-pet", { foundPet: petItem });
    }
    else {
        res.status(404).render("error", {
            message: "Sorry! Pet not found!",
        });
    }
};
exports.editPetPage = editPetPage;
const editPet = async (req, res, next) => {
    let petItemId = req.params.petId;
    let updatedPetItem = req.body;
    let [updated] = await petShop_1.Petshop.update(updatedPetItem, {
        where: { petId: petItemId },
    });
    if (updated === 1) {
        res.redirect("/main");
    }
    else {
        res.render("error", {
            message: "Sorry! Pet info could not be updated!",
        });
    }
};
exports.editPet = editPet;
const deletePet = async (req, res, next) => {
    let petItemId = req.params.petId;
    let deleted = await petShop_1.Petshop.destroy({
        where: { petId: petItemId },
    });
    if (deleted) {
        res.redirect("/main");
    }
    else {
        res.status(404).render("error", {
            message: "Sorry! Cannot find pet info!",
        });
    }
};
exports.deletePet = deletePet;
