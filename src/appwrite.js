// Import necessary modules from the Appwrite SDK
import { Client, Databases, ID, Query } from "appwrite";

// Define environment variables for Appwrite project, database, and collection IDs
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

// Initialize the Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Set the Appwrite endpoint
  .setProject(PROJECT_ID); // Set the Appwrite project ID

// Initialize the Appwrite database service
const database = new Databases(client);

// Function to update the search count for a movie
export const updateSearchCount = async (search, movie) => {
  try {
    // Query the database for documents with the specified search term
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("search", search),
    ]);

    // If a document with the search term exists, update its count
    if (result.documents.length > 0) {
      const doc = result.documents[0];

      await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
        count: doc.count + 1,
      });
    } else {
      // If no document with the search term exists, create a new document
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        search,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  } catch (error) {
    // Log any errors that occur during the database operations
    console.error(error);
  }
};

// Function to get the top 5 trending movies based on search count
export const getTrendingMovies = async () => {
  try {
    // Query the database for the top 5 documents ordered by search count in descending order
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);

    // Return the list of trending movies
    return result.documents;
  } catch (error) {
    // Log any errors that occur during the database operations
    console.error(error);
  }
};
