export interface RegistrationModel {
    name: string;
    lastname: string;
    age: number;
    identification: number;
    house: "Gryffindor"|"Hufflepuff"|"Ravenclaw"|"Slytherin";
    created?: Date;
    status?: "Pending"|"Approved"|"Rejected"|"Review";
    processed?: Date;
    nextReview?: Date;
}
