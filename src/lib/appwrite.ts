import { Client, Account, Databases } from "appwrite";

export const API_ENDPOINT = "https://cloud.appwrite.io/v1";
export const PROJECT_ID = "662efab30012ddca3221";
const client = new Client().setEndpoint(API_ENDPOINT).setProject(PROJECT_ID);
export const databases = new Databases(client);
export const account = new Account(client);
export default client;
