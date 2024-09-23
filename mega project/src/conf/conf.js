const conf ={
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    PROJECT:String(import.meta.env.VITE_APP_APPWRITE_PROJECT),
    DATABASE_ID:String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
    cOLLECTION:String(import.meta.env.VITE_APP_APPWRITE_cOLLECTION),
    BUKET_ID:(import.meta.env.VITE_APP_APPWRITE_BUKET_ID)
}

export default conf;