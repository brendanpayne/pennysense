import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

// Init your React Native SDK
const client = new Client();

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.pennysense.app',
  projectId: '667e18e40007d8abbef1',
  databaseId: '667e2cd100323d852346',
  userCollectionId: '667e2ce10027bd580352',
  transactionCollectionId: '667e2db90001cc3a0c63',
  storageId: '667e2fd2001ffdd3ac20'
};

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId) 
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);

export const createUser = async (email: string, password: string, name: string) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      name
    );
    if (!newAccount) throw new Error('Account creation failed');

    const avatarUrl = avatars.getInitials(name);

    await signIn(email, password);

    const newUser = await database.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        name,
        avatar: avatarUrl
      }
    );

    return newUser;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message || 'User creation failed');
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    if (!session) throw new Error('Sign-in failed');
    return session;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message || 'Sign-in failed');
  }
};

export const getCurrentUser = async () => {
  try {
    const user = await account.get();
    if (!user) throw new Error('User not found');
    const userDoc = await database.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accountId', user.$id)]
    );
    if (!userDoc) throw new Error('User document not found');
    return userDoc.documents[0];
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message || 'User not found');
  }
};