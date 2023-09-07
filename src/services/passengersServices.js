 async function firstNameLastNamePost(firstName, lastName){

    const result = await firstNameLastRepositoy.firstNameLastNamePost (firstName, lastName);
 }

 export const firstNameLastServices = {firstNameLastNamePost}