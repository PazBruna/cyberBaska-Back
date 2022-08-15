import AppError from "../../errors/appError";

export default async (id) => {
  try {
    //Model
    return { status: 201, message: "sucess" };
  } catch (err) {
    throw new AppError(
      "error to update profile",
      "@profiles/profile_not_updated",
      400
    );
  }
};
