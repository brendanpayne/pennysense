import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';
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
  .setPlatform(config.platform) 

  const account = new Account(client);
  const avatars = new Avatars(client);
  const database = new Databases(client);

export const createUser = async (email, password, name) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      name
    )
    if (!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(name)

    await signIn(email, password)

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
    )
    return newUser
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password)
    if (!session) throw Error;
    return session
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}
