
import AppError from "../../errors/appError";

export default async (id) => {
    try {
        //Model
        return { status: 201, message: "sucess" };
    } catch (err) {
        throw new AppError(
            "error to create profile",
            "@profiles/profile_not_created",
            400
        );
    }
};