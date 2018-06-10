export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export const getUser = (id: number): Promise<void> => {
  //TODO GET USER RESOLVER
};

export const addUser = (firstName: string, lastName: string): Promise<void> => {
  //TODO ADD USER RESOLVER
};

export const deleteUser = (id: number): Promise<void> => {
  //TODO DELETE USER RESOLVER
};

export const modifyUser = (id: number, firstName: string, lastName: string): Promise<void> => {
  //TODO MODIFY USER RESOLVER
};
