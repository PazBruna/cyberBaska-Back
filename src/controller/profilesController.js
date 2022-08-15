import Joi from "joi";
import * as profilesDomain from "../domain/profiles/index";

/*
 * Register Player
 */
export const addPlayer = async (req, res) => {
  const player = req.body;

  const playerCreated = await profilesDomain.registerPlayerDomain(player);

  return res.status(201).json(playerCreated);
};

addPlayer.schema = Joi.object().keys({
  name: Joi.string().required(),
  birthdate: Joi.date().required(),
  weight: Joi.string(),
  height: Joi.string(),
  email: Joi.string().required(),
});

/*'
 * Update Player
 */
export const updateProfile = async (req, res) => {
  const id = req.params;

  const playerInfo = await profilesDomain.updatePlayerDomain(id);

  return res.status(201).json(playerInfo);
};

updateProfile.schema = Joi.object().keys({
  id: Joi.number().required(),
});

/*'
* Get player
*/

export const getProfileByID = async (req, res) => {

  const id = req.params;

  const profileByID = await profilesDomain.getProfileByIdDomain(id)

  return res.status(201).json(profileByID)
}

getProfileByID.schema = Joi.object().keys({
  id: Joi.number().required(),
});

/*'
* Get all players
*/

export const getAllPlayers = async (res) => {

  const allPlayers = profilesDomain.getAllPlayersDomain()

  return res.status(201).json(allPlayers)
}

/*'
* Delete player
*/

export const deletePlayerId = async (req, res) => {

  const id = req.params;

  const deletePlayer = profilesDomain.deletePlayerIdDomain(id)

  return res.status(201).json(deletePlayer)
}

deletePlayerId.schema = Joi.object().keys({
  id: Joi.number().required(),
});